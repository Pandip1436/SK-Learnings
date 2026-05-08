export type Program = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  grades: string;
  duration: string;
  highlights: string[];
};

export const programs: Program[] = [
  {
    slug: "neet",
    name: "NEET",
    tagline: "The flagship program",
    description:
      "Our most rigorous offering — designed for students aiming at India's top medical colleges. Personalized study plans, daily one-on-one mentoring, and analytics-driven assessment.",
    grades: "Grades 11 – 12 + Repeaters",
    duration: "1 – 2 years",
    highlights: [
      "Daily one-on-one mentor sessions",
      "Weekly full-length mock tests",
      "Subject-wise weakness analytics",
      "Direct access to senior faculty",
    ],
  },
  {
    slug: "jee",
    name: "JEE",
    tagline: "Engineering, with discipline",
    description:
      "Structured preparation for JEE Main and Advanced. Concept-first instruction, problem-solving labs, and high-frequency assessment to sharpen exam temperament.",
    grades: "Grades 11 – 12",
    duration: "1 – 2 years",
    highlights: [
      "Conceptual physics & math foundations",
      "JEE Advanced problem labs",
      "All-India test ranking",
      "IIT alumni mentors",
    ],
  },
  {
    slug: "foundation",
    name: "Foundation",
    tagline: "Start early, finish strong",
    description:
      "An early-stage program for grades 6 – 10 that builds the conceptual depth competitive exams demand later. NTSE, KVPY, and Olympiad preparation woven through.",
    grades: "Grades 6 – 10",
    duration: "Yearly cohorts",
    highlights: [
      "NTSE & KVPY readiness",
      "Math & Science Olympiad prep",
      "Critical thinking workshops",
      "Periodic parent reviews",
    ],
  },
  {
    slug: "boards",
    name: "Boards & IGCSE",
    tagline: "School excellence, elevated",
    description:
      "Targeted coaching for CBSE, ICSE, ISC, and IGCSE boards. Curriculum-aligned teaching designed to convert school marks into university-ready performance.",
    grades: "Grades 9 – 12",
    duration: "Academic year",
    highlights: [
      "Board-aligned curriculum",
      "Past-paper-based mock exams",
      "Writing-skill coaching",
      "School-progress integration",
    ],
  },
];
