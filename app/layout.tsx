import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik Guha Roy — Backend Developer & AI Engineer",
  description:
    "Passionate backend developer with strong experience in Go, Node.js, and AI/ML systems.",
  keywords: ["backend developer", "AI engineer", "Go", "Python", "ML", "Kolkata"],
  authors: [{ name: "Pratik Guha Roy" }],
  openGraph: {
    title: "Pratik Guha Roy — Backend Developer & AI Engineer",
    description: "Building scalable APIs, AI automation workflows, and intelligent systems.",
    type: "website",
  },
};

import AnimatedBackground from "./components/ui/AnimatedBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
