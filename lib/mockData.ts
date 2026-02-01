export const INITIAL_HISTORY = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TechCorp",
    status: "Rejected",
    score: 65,
    date: "April 18, 2024",
  },
  {
    id: 2,
    role: "Data Analyst",
    company: "StartupInc",
    status: "In Progress",
    score: 0,
    date: "April 05, 2024",
  },
  {
    id: 3,
    role: "Java Developer",
    company: "Enterprise Sys",
    status: "Rejected",
    score: 55,
    date: "March 22, 2024",
  },
  {
    id: 4,
    role: "Product Manager",
    company: "Innovate Ltd",
    status: "Rejected",
    score: 72,
    date: "March 15, 2024",
  },
  {
    id: 5,
    role: "UX Designer",
    company: "Creative Studio",
    status: "Rejected",
    score: 60,
    date: "March 10, 2024",
  },
  {
    id: 6,
    role: "Full Stack Dev",
    company: "WebSolutions",
    status: "Rejected",
    score: 45,
    date: "Feb 28, 2024",
  },
  {
    id: 7,
    role: "React Native Dev",
    company: "AppWorks",
    status: "Rejected",
    score: 50,
    date: "Feb 15, 2024",
  },
];

export const MOCK_AI_RESPONSE = {
  weaknesses: [
    "Lacking in-depth knowledge of React Hooks (specifically useMemo).",
    "Weak problem-solving approach on the whiteboard challenge.",
    "Unclear communication when explaining API integration patterns.",
  ],
  skillGaps: [
    "Advanced JavaScript Concepts (Closures, Event Loop)",
    "System Design Principles (Scalability)",
    "State Management (Redux/Zustand)",
  ],
  communication: [
    "Be more concise and structured in answers using the STAR method.",
    "Avoid using filler words like 'um' and 'you know'.",
    "Ask clarifying questions before jumping into code.",
  ],
  nextSteps: [
    "Study React Hooks and practice coding challenges on LeetCode.",
    "Work on a small system design project (e.g., URL shortener).",
    "Conduct a mock interview to practice vocal delivery.",
  ],
};
