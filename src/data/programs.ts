export type Program = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  grades: string;
  duration: string;
  highlights: string[];
  accent: "cyan" | "violet" | "sky" | "emerald";
};

export const programs: Program[] = [
  {
    slug: "neet",
    name: "NEET Mastery",
    tagline: "The flagship medical pathway",
    description:
      "Our most rigorous offering — designed for students aiming at India's top medical colleges. Personalized study plans, daily one-on-one mentoring, and analytics-driven assessment to ensure you stay ahead of the curve.",
    grades: "Grades 11 – 12 + Repeaters",
    duration: "1 – 2 years",
    accent: "cyan",
    highlights: [
      "Daily 1-on-1 mentor sessions",
      "Weekly full-length mock tests",
      "Micro-topic weakness analytics",
      "Direct access to senior faculty",
    ],
  },
  {
    slug: "jee",
    name: "JEE Advanced",
    tagline: "Engineering, with precision",
    description:
      "Structured preparation for JEE Main and Advanced. Concept-first instruction, problem-solving labs, and high-frequency assessment to sharpen exam temperament and technical depth.",
    grades: "Grades 11 – 12",
    duration: "1 – 2 years",
    accent: "sky",
    highlights: [
      "Conceptual physics & math labs",
      "JEE Advanced problem workshops",
      "All-India test ranking system",
      "IIT alumni mentors & guidance",
    ],
  },
  {
    slug: "home-tuition",
    name: "Home Tuitions",
    tagline: "Premium individualized learning",
    description:
      "Our signature service where elite educators come to you. Experience the highest level of personalized attention with a curriculum that adapts to your home environment and personal schedule.",
    grades: "Grades 3 – 12",
    duration: "Flexible / Long-term",
    accent: "violet",
    highlights: [
      "Learning at your convenience",
      "100% focused individual attention",
      "Custom pace & doubt clearing",
      "Safe & comfortable environment",
    ],
  },
  {
    slug: "foundation",
    name: "Foundation",
    tagline: "Start early, finish strong",
    description:
      "An early-stage program for grades 6 – 10 that builds the conceptual depth competitive exams demand later. NTSE, KVPY, and Olympiad preparation are woven into the core curriculum.",
    grades: "Grades 6 – 10",
    duration: "Yearly cohorts",
    accent: "emerald",
    highlights: [
      "NTSE & KVPY readiness focus",
      "Critical thinking & logic labs",
      "Strong math & science roots",
      "Periodic parent-mentor reviews",
    ],
  },
  {
    slug: "boards",
    name: "Boards & IGCSE",
    tagline: "School excellence, elevated",
    description:
      "Targeted coaching for CBSE, ICSE, ISC, and IGCSE boards. Curriculum-aligned teaching designed to convert school marks into university-ready performance with writing-skill enhancement.",
    grades: "Grades 9 – 12",
    duration: "Academic year",
    accent: "cyan",
    highlights: [
      "Board-aligned curriculum focus",
      "Past-paper-based mock exams",
      "Answer-writing skill coaching",
      "Consistent school-mark tracking",
    ],
  },
  {
    slug: "olympiad",
    name: "Olympiad Mastery",
    tagline: "For the top 1% thinkers",
    description:
      "Specialized training for International Math, Physics, and Biology Olympiads. We push the boundaries of standard curriculum to develop world-class problem-solving abilities.",
    grades: "Grades 5 – 11",
    duration: "Modular program",
    accent: "violet",
    highlights: [
      "Advanced problem-solving kits",
      "International syllabus coverage",
      "Competitive logic workshops",
      "National level participation prep",
    ],
  },
  {
    slug: "residential",
    name: "Residential Program",
    tagline: "Total immersion coaching",
    description:
      "A high-intensity, residential batch designed for absolute focus. Includes structured study hours, supervised practice sessions, and a competitive peer environment in our Madurai campus.",
    grades: "Repeaters & Grade 12",
    duration: "10-month intensive",
    accent: "sky",
    highlights: [
      "Supervised night study sessions",
      "Distraction-free environment",
      "Healthy food & accommodation",
      "24/7 access to doubt mentors",
    ],
  },
];
