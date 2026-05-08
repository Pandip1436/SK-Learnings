export type Story = {
  name: string;
  exam: "NEET" | "JEE" | "Boards" | "Olympiad";
  year: number;
  outcome: string;
  rank?: string;
  initials: string;
  quote: string;
};

export const stories: Story[] = [
  {
    name: "Aravind R.",
    exam: "NEET",
    year: 2024,
    outcome: "Madurai Medical College",
    rank: "AIR 4,212",
    initials: "AR",
    quote:
      "What set SK Learnings apart was the attention I got. The mentors knew exactly which chapters I struggled with and built my schedule around them. It never felt like a classroom — it felt like a plan.",
  },
  {
    name: "Sneha P.",
    exam: "NEET",
    year: 2023,
    outcome: "Stanley Medical College",
    rank: "AIR 6,108",
    initials: "SP",
    quote:
      "Two years here taught me how to study, not just what to study. The weekly analytics reports were brutal but honest — I always knew where I stood and what to fix next week.",
  },
  {
    name: "Karthik V.",
    exam: "JEE",
    year: 2024,
    outcome: "IIT Madras · Computer Science",
    rank: "AIR 1,847",
    initials: "KV",
    quote:
      "Every doubt got answered the same day. The faculty stayed late, marked my papers personally, and pushed me to attempt the questions I was avoiding. That's the difference.",
  },
  {
    name: "Priya M.",
    exam: "NEET",
    year: 2024,
    outcome: "Coimbatore Medical College",
    rank: "AIR 9,440",
    initials: "PM",
    quote:
      "I joined as a repeater. They didn't treat me like one — they treated me like a fresh start. By month three I was scoring higher than I had in two years of self-study.",
  },
  {
    name: "Rahul S.",
    exam: "JEE",
    year: 2023,
    outcome: "NIT Trichy · Mechanical",
    rank: "AIR 5,212",
    initials: "RS",
    quote:
      "The problem-solving labs are the secret. You don't really know a concept until you've defended it against ten different question types. That's what we did, every week.",
  },
  {
    name: "Lakshmi N.",
    exam: "Boards",
    year: 2024,
    outcome: "98.6% · CBSE Class 12",
    initials: "LN",
    quote:
      "I came in for Board prep but the mentors helped me think about university applications too. They genuinely care about what happens after we leave.",
  },
  {
    name: "Vignesh K.",
    exam: "NEET",
    year: 2022,
    outcome: "Tirunelveli Medical College",
    rank: "AIR 11,089",
    initials: "VK",
    quote:
      "I'm the first in my family to study medicine. The faculty here didn't just teach me — they made sure I felt I belonged in that room. That mattered more than the marks.",
  },
  {
    name: "Anjali D.",
    exam: "Olympiad",
    year: 2024,
    outcome: "INMO Qualifier · Class 10",
    initials: "AD",
    quote:
      "The Foundation program was where I learned to actually enjoy maths. By Class 9 I was solving problems my older cousins couldn't. That's a gift.",
  },
];
