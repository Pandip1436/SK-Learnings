export type Post = {
  slug: string;
  category: "NEET" | "JEE" | "Study Strategy" | "Parents" | "Mindset";
  title: string;
  excerpt: string;
  content: string;
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
    content: `
      Building a study plan isn't about filling blocks on a calendar with subject names. It's about understanding the metabolic rate of your own learning. 

      At SK Learnings, we've moved away from the 'fixed schedule' model. Why? Because life isn't fixed. Some days you grasp Thermodynamics in twenty minutes; other days, a simple concept in Organic Chemistry feels like climbing Everest. 

      ### The Weekly Reset
      Every Sunday, our mentors sit down with students not just to review what they learned, but to analyze *how* they learned it. We look at the 'Mistake Log' (more on that in another post) and adjust the coming week's intensity.

      ### The 3-2-1 Rule
      We recommend a ratio of 3 hours of active problem solving, 2 hours of conceptual reading, and 1 hour of revision. This balance ensures that you're not just consuming information, but applying it.

      ### Quality over Quantity
      It's better to solve 10 high-quality problems with deep understanding than 100 problems by rote. Our plans prioritize depth. When you truly understand the 'why' behind a solution, the 'how' becomes second nature.
    `,
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
    content: `
      Biology is the backbone of your NEET score. While every chapter is technically 'important', the data tells a different story.

      ### The High-Yield Zones
      Genetics and Evolution, Ecology, and Human Physiology consistently account for over 50% of the Biology section. If you haven't mastered these, you're leaving marks on the table.

      ### NCERT: The Holy Grail
      You've heard it before, but are you doing it right? Reading NCERT isn't just about the text. It's about the diagrams, the captions, and even the supplementary 'Did you know?' boxes. In the last three years, 12 questions came directly from diagram captions.

      ### The Art of Elimination
      NEET isn't just about knowing the right answer; it's about spotting the wrong ones. We train our students to identify 'distractor' options that look scientifically plausible but are contextually incorrect.
    `,
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
    content: `
      Parental support is the silent engine of a student's success. But sometimes, that engine runs too hot.

      ### The Pressure of 'More'
      When parents see a dip in mock scores, the natural instinct is to add more: more classes, more books, more hours. However, the student often needs *less* noise and *more* space to process what they already know.

      ### Support over Supervision
      Your role isn't to be a second warden. It's to be the safe harbor. Ensure they are eating well, sleeping enough, and have a quiet place to study. The best thing you can say after a bad mock isn't 'Why?', but 'It's just data. What's the next step?'
    `,
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
    content: `
      A mistake is a gift. It's a precise map of where your understanding is weak.

      ### What is a Mistake Log?
      It's not just a list of wrong answers. It's a journal where you record:
      1. The problem you got wrong.
      2. *Why* you got it wrong (Conceptual error? Calculation error? Misread the question?).
      3. The correct solution in your own words.
      4. A 'reminder to self' for the next time you see a similar problem.

      ### The Review Cycle
      Don't just write it and forget it. Review your Mistake Log every 15 days. If you can solve the same problem correctly two weeks later, you've officially 'fixed' that gap in your knowledge.
    `,
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
    content: `
      The 'Comeback Quarter' is a legendary phase at SK Learnings. It's where students who were previously stagnant suddenly find their rhythm.

      ### Emotional Resilience
      The first step isn't academic; it's psychological. You have to detach your self-worth from your score. A score of 400 is just a starting point, not a ceiling.

      ### Targeted Intervention
      Instead of trying to 'study everything again', we identify the 2-3 specific areas causing the most friction. By solving those, the rest of the syllabus often falls into place.
    `,
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
    content: `
      Standard school exams test memory and speed. Olympiads test logic and depth.

      ### Thinking from First Principles
      An Olympiad question often requires you to combine concepts from three different chapters to find a solution. This 'lateral thinking' is exactly what JEE Advanced and the new NEET patterns are starting to demand.

      ### Building Intellectual Stamina
      Students today are used to instant answers. Olympiad problems teach them to sit with a problem for 30 minutes, try four different paths, and not give up when the fifth path also fails. That stamina is the hallmark of a topper.
    `,
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
