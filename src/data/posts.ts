export type Post = {
  slug: string;
  category: "NEET" | "JEE" | "Study Strategy" | "Parents" | "Mindset";
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  author: string;
};

export const posts: Post[] = [
  {
    slug: "how-we-build-a-study-plan",
    category: "Study Strategy",
    title: "How we actually build a study plan that works for one student",
    excerpt:
      "Most coaching centres hand you a calendar. We hand you a plan — and rebuild it every week. Here's the method, in detail.",
    date: "2026-04-22",
    readMinutes: 9,
    author: "S. Karthikeyan",
  },
  {
    slug: "neet-2026-biology-strategy",
    category: "NEET",
    title: "NEET 2026: a chapter-weighted Biology strategy from someone who's read every paper",
    excerpt:
      "After a decade of analysing every NEET paper, the patterns are clearer than the official syllabus suggests. Here's where the marks actually live.",
    date: "2026-04-08",
    readMinutes: 12,
    author: "Dr. Meena R.",
  },
  {
    slug: "what-parents-get-wrong",
    category: "Parents",
    title: "What well-meaning parents get wrong in the final six months",
    excerpt:
      "The intentions are right. But the reflexes — extra tuition, more mock tests, longer hours — often hurt more than help. A note from someone who's seen it for ten years.",
    date: "2026-03-25",
    readMinutes: 7,
    author: "S. Karthikeyan",
  },
  {
    slug: "jee-mistake-log",
    category: "JEE",
    title: "Why every serious JEE aspirant should keep a mistake log",
    excerpt:
      "The students who improve fastest aren't the ones doing the most problems. They're the ones who study their own mistakes the hardest.",
    date: "2026-03-12",
    readMinutes: 6,
    author: "A. Vignesh",
  },
  {
    slug: "the-comeback-quarter",
    category: "Mindset",
    title: "The comeback quarter: how to turn a bad mock into the best three months of prep",
    excerpt:
      "A bad mock test isn't a verdict. It's data. Here's how our mentors guide students to convert that data into a different exam-day outcome.",
    date: "2026-02-28",
    readMinutes: 8,
    author: "Dr. Meena R.",
  },
  {
    slug: "olympiad-foundation",
    category: "Study Strategy",
    title: "Why we put Olympiad questions in front of Class 8 students",
    excerpt:
      "Not because we expect them to qualify. Because the questions teach a kind of thinking the school syllabus never asks for.",
    date: "2026-02-14",
    readMinutes: 5,
    author: "S. Karthikeyan",
  },
];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
