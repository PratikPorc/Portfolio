export const personalInfo = {
  name: "Pratik Guha Roy",
  role: "Backend Developer & AI Engineer",
  location: "Kolkata, India",
  email: "pratik@example.com",
  bio: [
    "I'm a backend developer and AI engineer based in Kolkata, India. I specialise in building the invisible layer that makes software intelligent — from high-performance APIs to LLM-powered automation systems.",
    "My stack of choice: Go for performance-critical services, Python for AI/ML pipelines, and Node.js for rapid iteration. I believe great software is built at the intersection of rigorous engineering and creative problem-solving.",
    "When I'm not pushing commits, I'm exploring MUNs, filmmaking, playing the drums, or diving deep into competitive chess.",
  ],
  social: {
    github: "https://github.com/pratikguharoy",
    kaggle: "https://kaggle.com/pratikguharoy",
    leetcode: "https://leetcode.com/pratikguharoy",
  },
};

export const typingRoles = [
  "Backend Developer",
  "AI Engineer",
  "Builder",
  "Go Developer",
  "ML Practitioner",
];

export const stats = [
  { num: "5+", label: "Projects Built" },
  { num: "2", label: "Hackathon Wins" },
  { num: "∞", label: "Lines of Code" },
];

export const strengths = [
  {
    icon: "Server",
    title: "Backend Systems",
    desc: "Scalable microservices, RESTful APIs, and distributed systems with Go and Node.js",
  },
  {
    icon: "BrainCircuit",
    title: "AI/ML Engineering",
    desc: "LLMs, CNNs, TensorFlow, PyTorch — building intelligent systems from scratch",
  },
  {
    icon: "Bot",
    title: "Automation & LLMs",
    desc: "AI workflows, MCP integrations, and intelligent automation pipelines",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Go", level: 90 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "REST / GraphQL", level: 78 },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "CNNs", level: 78 },
      { name: "LLM Integration", level: 85 },
    ],
  },
  {
    label: "Tools & Infra",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Git / GitHub", level: 90 },
      { name: "PostgreSQL", level: 75 },
      { name: "Postman", level: 85 },
    ],
  },
];

export const experiences = [
  {
    role: "AI / Backend Engineer Intern",
    company: "Tech Startup — Kolkata",
    date: "2024 — Present",
    desc: "Built AI invoice processing system using LLMs and OCR. Developed scalable REST APIs in Go handling thousands of concurrent requests. Implemented ML inference pipelines deployed with Docker.",
    tags: ["Go", "Python", "LLMs", "Docker", "FastAPI"],
  },
  {
    role: "ML Research Contributor",
    company: "Academic Project",
    date: "2023 — 2024",
    desc: "Developed a CNN-based lung cancer detection model achieving 94%+ accuracy. Implemented data augmentation pipelines and model evaluation frameworks with TensorFlow and PyTorch.",
    tags: ["TensorFlow", "CNN", "Python", "PyTorch"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance / Open Source",
    date: "2022 — 2023",
    desc: "Built multiple production-grade APIs and automation tools. Containerised services with Docker, integrated third-party AI models, and contributed to open-source ML tooling.",
    tags: ["Node.js", "Express", "Docker", "MongoDB"],
  },
];

export type ProjectCategory = "all" | "ai" | "backend" | "ml";

export const projects = [
  {
    num: "01",
    cat: "ai" as ProjectCategory,
    title: "AI Invoice Processing System",
    desc: "Intelligent document processing pipeline that extracts, validates, and categorises invoice data using LLMs and OCR. Reduces manual processing time by 90%.",
    stack: ["Python", "LLMs", "OCR", "FastAPI", "Docker"],
    github: "https://github.com/pratikguharoy",
  },
  {
    num: "02",
    cat: "ml" as ProjectCategory,
    title: "Lung Cancer Detection (CNN)",
    desc: "Deep learning model using Convolutional Neural Networks to detect lung cancer from CT scan images with 94%+ accuracy. Trained on curated medical imaging datasets.",
    stack: ["TensorFlow", "CNN", "Python", "PyTorch"],
    github: "https://github.com/pratikguharoy",
  },
  {
    num: "03",
    cat: "backend" as ProjectCategory,
    title: "Iris ML API",
    desc: "Production-grade ML inference API built with FastAPI, containerised with Docker. Exposes Iris classification model via clean RESTful endpoints with full documentation.",
    stack: ["FastAPI", "Docker", "scikit-learn", "Python"],
    github: "https://github.com/pratikguharoy",
  },
  {
    num: "04",
    cat: "ai" as ProjectCategory,
    title: "MCP HR Assistant",
    desc: "AI-powered HR automation assistant built with Model Context Protocol (MCP). Handles leave management, meeting scheduling, and employee queries through natural language.",
    stack: ["MCP", "LLMs", "Node.js", "TypeScript"],
    github: "https://github.com/pratikguharoy",
  },
  {
    num: "05",
    cat: "ml" as ProjectCategory,
    title: "Astrologer Recommender",
    desc: "ML-powered recommendation engine that matches users with astrologers based on preferences, history, and real-time availability using collaborative filtering.",
    stack: ["Python", "scikit-learn", "FastAPI", "Redis"],
    github: "https://github.com/pratikguharoy",
  },
  {
    num: "06",
    cat: "backend" as ProjectCategory,
    title: "Go Microservices API",
    desc: "High-performance microservices architecture built in Go, with service discovery, load balancing, and gRPC communication. Handles 10K+ req/sec under load.",
    stack: ["Go", "gRPC", "Docker", "PostgreSQL"],
    github: "https://github.com/pratikguharoy",
  },
];

export const hackathons = [
  {
    badge: "🏆 1st Place",
    badgeClass: "gold",
    title: "Plot2Deploy Hackathon",
    position: "Winner — 1st Place",
    desc: "Built and deployed a full-stack AI application from concept to production in under 24 hours. Outcompeted multiple teams with an innovative AI-powered solution.",
  },
  {
    badge: "🥈 4th Place",
    badgeClass: "silver",
    title: "Hack Horizon 2.0",
    position: "4th Place among 187 teams",
    desc: "Ranked 4th out of 187 competing teams. Developed an intelligent automation solution combining computer vision and NLP under intense time constraints.",
  },
  {
    badge: "🎯 Kaggle",
    badgeClass: "green",
    title: "Kaggle Competitions",
    position: "Top Rankings — ML Competitions",
    desc: "Participated in multiple Kaggle competitions, solving real-world ML challenges across NLP, computer vision, and tabular data domains.",
  },
  {
    badge: "⚡ LeetCode",
    badgeClass: "cyan",
    title: "Competitive Programming",
    position: "Active Problem Solver",
    desc: "Consistently solving algorithmic challenges on LeetCode, sharpening data structures and algorithm skills across difficulty levels.",
  },
];

export const extracurriculars = [
  { icon: "Mic", name: "MUN" },
  { icon: "Clapperboard", name: "Film Making" },
  { icon: "Music", name: "Drums" },
  { icon: "Gamepad2", name: "Chess" },
  { icon: "Palette", name: "Painting" },
];
