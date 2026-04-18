import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

// Basic in-memory rate limiting (Note: resets on Vercel cold starts)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const rule = rateLimitMap.get(ip);
  if (!rule) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - rule.timestamp < RATE_LIMIT_WINDOW) {
    if (rule.count >= MAX_REQUESTS) {
      return true;
    }
    rule.count += 1;
    return false;
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting check
    const ip = req.headers.get('x-forwarded-for') || 'unknown-ip';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, _honeypot } = body;

    // 2. Simple spam protection (Honeypot)
    // If the hidden field is filled, silently resolve as success to trick bots.
    if (_honeypot) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    // 3. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // 4. Validate credentials
    const SHEET_ID = process.env.GOOGLE_SHEET_ID;
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    // Replace literal '\n' sequences in env var with actual newlines
    const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!SHEET_ID || !CLIENT_EMAIL || !PRIVATE_KEY) {
      console.error('SERVER ERROR: Missing Google Sheets credentials in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    // 5. Connect to Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 6. Append Row to 'Sheet1!A:D'
    const row = [
      new Date().toISOString(),
      name,
      email,
      message,
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A:D', 
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ success: true, message: 'Successfully saved to Google Sheets' });
  } catch (error: any) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save message due to a server error.' },
      { status: 500 }
    );
  }
}
