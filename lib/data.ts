// ─────────────────────────────────────────────
//  PRATIK GUHA ROY — Portfolio Data
//  Source of truth for all portfolio content.
//  Edit this file to update the site.
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Pratik Guha Roy",
  role: "Backend Developer & AI Engineer",
  location: "Kolkata, India",
  phone: "+91 9903693894",
  email: "pratikguharoystads@gmail.com",
  bio: [
    "I'm a B.Tech CSE student and AI/Backend engineer based in Kolkata, India. I specialise in building the invisible layer that makes software intelligent — from scalable service-oriented APIs to LLM-powered agentic automation systems.",
    "My stack of choice: Go & Node.js for backend services, Python for AI/ML pipelines, and FastAPI for production ML inference. Currently interning as an AI Engineer, building agentic voice & text bots and backend infrastructure.",
    "When I'm not pushing commits, I'm participating in MUNs, producing short films, playing drums, or sharpening my chess game.",
  ],
  social: {
    github: "https://github.com/PratikPorc",
    linkedin: "https://linkedin.com/in/pratikfromindia",
    leetcode: "https://leetcode.com/pratikguharoy",
    instagram: "https://instagram.com/proooteeek",
  },
};

export const typingRoles = [
  "Backend Developer",
  "AI Engineer",
  "Agentic AI Architect",
  "Go Developer",
  "ML Practitioner",
];

export const stats = [
  { num: "10+", label: "Projects Built" },
  { num: "2", label: "Hackathon Wins" },
  { num: "3", label: "Internships" },
];

export const strengths = [
  {
    icon: "⚙️",
    title: "Backend Systems",
    desc: "Scalable service-oriented APIs, microservices, and backend infrastructure using Go, Node.js, and Express",
  },
  {
    icon: "🧠",
    title: "AI/ML Engineering",
    desc: "LLMs, CNNs, TensorFlow, PyTorch — building intelligent systems from image classifiers to agentic bots",
  },
  {
    icon: "🤖",
    title: "Agentic AI & Automation",
    desc: "AI automation workflows, MCP integrations, multi-channel agent orchestration and LLM-powered pipelines",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Go (Golang)", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    label: "Backend & APIs",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "FastAPI", level: 82 },
      { name: "REST API / JWT / OAuth", level: 85 },
      { name: "WebSockets", level: 72 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "TensorFlow / Keras", level: 82 },
      { name: "PyTorch", level: 75 },
      { name: "CNNs / Deep Learning", level: 80 },
      { name: "LLM / Gemini / Prompt Eng.", level: 88 },
    ],
  },
  {
    label: "Tools & Databases",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git / GitHub / CI-CD", level: 88 },
      { name: "PostgreSQL / MySQL / MongoDB", level: 78 },
      { name: "Postman / Swagger", level: 87 },
    ],
  },
];

export const experiences = [
  {
    role: "AI Intern",
    company: "Better Best Software Solutions, Virtual",
    date: "Dec 2025 — Present",
    desc: "Architected and built backend systems for multiple projects using scalable service-oriented design. Tested and optimised API Gateway implementations to improve service reliability. Developed agentic AI text and voice bots for automated customer support and client engagement.",
    tags: ["Go", "Node.js", "Agentic AI", "API Gateway", "LLMs"],
  },
  {
    role: "AI Automation Intern",
    company: "Calyco Products Pvt Ltd, Virtual",
    date: "Jul 2025 — Sep 2025",
    desc: "Built AI-driven automation workflows using Tasker and Python to streamline internal processes. Integrated LLMs to parse emails, understand buyer requests, and generate intelligent responses. Developed end-to-end automation pipelines for lead processing and data management. Collaborated on multi-channel AI agent orchestration to improve workflow efficiency.",
    tags: ["Python", "LLMs", "Automation", "Tasker", "NLP"],
  },
  {
    role: "Internshala Student Partner",
    company: "Internshala, Virtual",
    date: "Mar 2024 — Aug 2024",
    desc: "Drove student outreach and community building on campus. Developed strong sales, communication, and deadline management skills while growing a peer network.",
    tags: ["Community Building", "Sales", "Communication"],
  },
];

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Techno India University",
    year: "2023 — 2027",
  },
  {
    degree: "Senior Secondary (XII) — Science, CISCE",
    institution: "St. Augustine's Day School, Barrackpore",
    year: "2023",
    score: "97.50%",
  },
  {
    degree: "Secondary (X) — ICSE",
    institution: "St. Augustine's Day School, Barrackpore",
    year: "2021",
    score: "96.00%",
  },
];

export type ProjectCategory = "all" | "ai" | "backend" | "ml";

export const projects = [
  {
    num: "01",
    cat: "ai" as ProjectCategory,
    title: "AI Invoice Processing & GST Compliance System",
    desc: "End-to-end invoice pipeline using OCR (Tesseract/pdfplumber) and Google Gemini for JSON extraction. Validation agent for GST compliance — GSTIN verification, CGST/SGST/IGST checks, duplicate detection. Integrated Supabase + Neo4j for storage and business relationship graphs. Auto-generates GSTR-1 and GSTR-3B returns.",
    stack: ["Python", "Gemini", "OCR", "Supabase", "Neo4j", "FastAPI"],
    github: "https://github.com/PratikPorc",
    date: "Apr 2026",
  },
  {
    num: "02",
    cat: "ml" as ProjectCategory,
    title: "Lung Cancer Detection (CNN)",
    desc: "CNN trained on the Lung and Colon cancer histopathological images dataset from Kaggle to classify CT scan images as cancerous or normal with high accuracy.",
    stack: ["TensorFlow", "Keras", "CNN", "Python", "Kaggle"],
    github: "https://github.com/PratikPorc",
    date: "Nov 2025",
  },
  {
    num: "03",
    cat: "backend" as ProjectCategory,
    title: "Iris Classification — Docker + FastAPI",
    desc: "Dockerized FastAPI ML inference API classifying Iris flower species using a trained Decision Tree from scikit-learn. Features Pydantic validation, Swagger UI at /docs, and portable Docker deployment.",
    stack: ["FastAPI", "Docker", "scikit-learn", "Python", "Swagger"],
    github: "https://github.com/PratikPorc",
    date: "Jul 2025",
  },
  {
    num: "04",
    cat: "ai" as ProjectCategory,
    title: "MCP Server HR Assistant",
    desc: "Robust HR Leave Management System and Client Meeting Scheduler using FastMCP — the Python framework for context-aware LLM-powered applications. Includes dynamic tools, prompt handling, and resources for a mock employee database.",
    stack: ["FastMCP", "Python", "LLMs", "MCP", "TypeScript"],
    github: "https://github.com/PratikPorc",
    date: "Jul 2025",
  },
  {
    num: "05",
    cat: "ml" as ProjectCategory,
    title: "Astrologer Recommender",
    desc: "Smart matching using semantic similarity (all-mpnet-base-v2 embeddings) and FAISS top-k search. LLM integration via Together.ai for response generation. FastAPI-first modular architecture.",
    stack: ["Python", "FAISS", "FastAPI", "HuggingFace", "LLMs"],
    github: "https://github.com/PratikPorc",
    date: "Jul 2025",
  },
  {
    num: "06",
    cat: "ml" as ProjectCategory,
    title: "Opti Tracker — AI Focus & Posture Monitor",
    desc: "Real-time facial landmark tracking using MediaPipe to monitor posture, attention, and fatigue. Audio feedback alerts for distraction/ergonomic issues. Interactive PyQt GUI with modular tracking, feedback, and UI components.",
    stack: ["Python", "MediaPipe", "PyQt", "OpenCV", "TensorFlow"],
    github: "https://github.com/PratikPorc",
    date: "Nov 2024",
  },
  {
    num: "07",
    cat: "ai" as ProjectCategory,
    title: "iCue AI — Intelligent Calendar Assistant",
    desc: "Smart assistant that reads WhatsApp messages, detects events using Gemini NLP, and syncs them with Google Calendar via OAuth. Eliminates manual deadline entry and boosts productivity.",
    stack: ["Node.js", "Gemini API", "Google Calendar API", "OAuth"],
    github: "https://github.com/PratikPorc",
    date: "Mar 2024",
  },
  {
    num: "08",
    cat: "ml" as ProjectCategory,
    title: "Gender & Age Detection (CNN)",
    desc: "Real-time computer vision tool using OpenCV and pre-trained deep learning models for age and gender classification via webcam feed.",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/PratikPorc",
    date: "Jun 2025",
  },
  {
    num: "09",
    cat: "ml" as ProjectCategory,
    title: "Job Salaries Prediction",
    desc: "Analysed job posting data to understand correlation between skills, location, company type, and salary. ML regression model with feature engineering and evaluation using scikit-learn, Seaborn, and Matplotlib.",
    stack: ["Python", "scikit-learn", "Pandas", "Seaborn", "Matplotlib"],
    github: "https://github.com/PratikPorc",
    date: "Jul 2024",
  },
  {
    num: "10",
    cat: "backend" as ProjectCategory,
    title: "AI-Powered Freelancing Platform",
    desc: "Backend development for an AI-powered platform matching freelancers with suitable jobs. Designed scalable APIs and structured the codebase using clean architecture principles.",
    stack: ["Node.js", "Go", "PostgreSQL", "Docker", "AI Matching"],
    github: "https://github.com/PratikPorc",
    date: "Dec 2024 — Present",
  },
];

export const certifications = [
  {
    title: "Project-Based Experiential Learning on AIML",
    issuer: "IBM",
    date: "Sep 2025 — Nov 2025",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM",
    date: "Aug 2024 — Sep 2024",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM / Coursera",
    date: "Apr 2024 — May 2024",
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Apr 2024 — May 2024",
  },
  {
    title: "Microsoft Azure Data Fundamentals",
    issuer: "Microsoft",
    date: "Apr 2024",
  },
  {
    title: "Microsoft Cloud Skills Challenge",
    issuer: "Microsoft",
    date: "Mar 2024",
  },
  {
    title: "JavaScript Bootcamp",
    issuer: "LetsUpgrade",
    date: "Mar 2024 — Sep 2024",
  },
  {
    title: "Canva Bootcamp",
    issuer: "LetsUpgrade",
    date: "May 2024",
  },
];

export const hackathons = [
  {
    badge: "🏆 Winner",
    badgeClass: "gold",
    title: "Plot2Deploy Hackathon",
    position: "1st Place — GDSC, Techno India University",
    desc: "Won the hackathon organised by the Google Developer Student Club at Techno India University, West Bengal. Built and deployed a full-stack AI application from concept to production.",
  },
  {
    badge: "🥈 4th Place",
    badgeClass: "silver",
    title: "Hack Horizon 2.0",
    position: "4th among 187 teams — AJU Jharkhand",
    desc: "Secured 4th position out of 187 teams in this 24-hour nationwide hackathon at AJU Jharkhand. Built an intelligent automation solution under intense time pressure.",
  },
  {
    badge: "🎖️ Expert",
    badgeClass: "cyan",
    title: "Postman API Fundamentals",
    position: "Student Expert — Certified",
    desc: "Completed and mastered the Postman API Fundamentals Student Expert certification, demonstrating proficiency in API design, testing, and documentation.",
  },
  {
    badge: "☁️ Azure",
    badgeClass: "green",
    title: "Microsoft Cloud Skill Challenge",
    position: "Completed — Microsoft",
    desc: "Completed the Microsoft Cloud Skill Challenge, acquiring hands-on knowledge in Azure cloud technologies, data fundamentals, and cloud infrastructure.",
  },
];

export const extracurriculars = [
  { icon: "🎙️", name: "MUN Secretariat" },
  { icon: "🎬", name: "Drumming" },
  { icon: "🥁", name: "Painting" },
  { icon: "♟️", name: "Public Speaking" },
  { icon: "🎨", name: "Chess" },
  { icon: "🎤", name: "Film Making" },
];