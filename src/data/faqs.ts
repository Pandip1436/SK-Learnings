export type FAQSection = "General" | "Individual NEET Coaching";

export type FAQ = {
  section: FAQSection;
  question: string;
  answer?: string;
  points?: { heading: string; body: string }[];
  summary?: string;
};

export const faqs: FAQ[] = [
  {
    section: "General",
    question: "What is the eligibility criteria for NEET?",
    answer:
      "To appear for NEET, students must have completed 10+2 education with Physics, Chemistry, Biology/Biotechnology, and English from a recognized board, with a minimum percentage as specified for general and reserved categories. The SK Learnings provides guidance to help you verify the latest eligibility criteria and ensures your documents are ready.",
  },
  {
    section: "General",
    question: "What is the NEET exam pattern?",
    answer:
      "The NEET exam includes 200 multiple-choice questions from Physics, Chemistry, and Biology (Botany & Zoology). Students answer 180 questions in 3 hours and 20 minutes. The exam is conducted offline and follows current NTA guidelines. The SK Learnings NEET Individual Coaching and Micro Batch mock tests and study modules are updated for the latest pattern.",
  },
  {
    section: "General",
    question: "How to Manage School and NEET Coaching?",
    answer:
      "Balancing school studies with NEET coaching is achievable through personalized, individual coaching programs. At The SK Learnings NEET Individual Coaching and Micro Batch, we offer customized attention that adapts to your learning pace, whether you're strong in some subjects or need extra support in others. This tailored approach ensures that complex concepts are thoroughly understood, doubts are promptly clarified, and study time becomes more effective and less stressful.",
  },
  {
    section: "General",
    question: "What study materials are best for NEET preparation?",
    answer:
      "NCERT books for Physics, Chemistry, and Biology are recommended, supplemented by The SK Learnings NEET Individual Coaching and Micro Batch exclusive notes, previous years' papers, and targeted practice tests created by expert faculty. Our NEET library covers all syllabus requirements and frequently updated topics.",
  },
  {
    section: "General",
    question: "Why is Individual Coaching the Best for NEET/JEE?",
    points: [
      {
        heading: "Structured Learning",
        body: "Individual coaching offers a personalized curriculum aligned precisely with your strengths and weaknesses, helping you focus more efficiently on your key exam topics.",
      },
      {
        heading: "Flexible Schedule",
        body: "Opt for online or flexible coaching sessions to fit your preparation around school hours, reducing stress and optimizing your study routine.",
      },
      {
        heading: "Focused Revision",
        body: "With access to practice tests, revision tools, and individual mentorship, you can target weak areas more effectively, leading to better exam performance.",
      },
      {
        heading: "Stress Management",
        body: "Personal coaching provides moral support, motivational guidance, and focused attention, helping students stay motivated and manage exam stress effectively.",
      },
      {
        heading: "Why Choose The SK Learnings NEET Individual Coaching and Micro Batch?",
        body: "Our personalized approach ensures that your NEET/JEE preparation is comprehensive, stress-free, and aligned with your unique learning style — making your success more achievable and sustainable.",
      },
    ],
  },
  {
    section: "General",
    question: "How does SK Learnings personalize NEET coaching?",
    answer:
      "SK Learnings offers individual coaching sessions tailored to each student's strengths and weaknesses. AI-powered tests and analytics help pinpoint areas for improvement, and our mentors provide focused guidance for every topic.",
  },
  {
    section: "General",
    question: "What is the NEET exam pattern?",
    answer:
      "The NEET exam includes 200 multiple-choice questions from Physics, Chemistry, and Biology (Botany & Zoology). Students answer 180 questions in 3 hours and 20 minutes. The exam is conducted offline and follows current NTA guidelines. SK Learnings' mock tests and study modules are updated for the latest pattern.",
  },
  {
    section: "General",
    question: "How do I register for NEET?",
    answer:
      "Registration is done online via the NTA NEET portal. Students must fill the application form, upload documents, and pay the fee within the deadlines. SK Learnings provides step-by-step registration support and document verification for all enrolled students.",
  },
  {
    section: "General",
    question: "What study materials are best for NEET preparation?",
    answer:
      "NCERT books for Physics, Chemistry, and Biology are recommended, supplemented by SK Learnings' exclusive notes, previous years' papers, and targeted practice tests created by expert faculty. Our NEET library covers all syllabus requirements and frequently updated topics.",
  },
  {
    section: "General",
    question: "How does SK Learnings personalize NEET coaching?",
    answer:
      "SK Learnings offers individual coaching sessions tailored to each student's strengths and weaknesses. AI-powered tests and analytics help pinpoint areas for improvement, and our mentors provide focused guidance for every topic.",
  },
  {
    section: "Individual NEET Coaching",
    question:
      "What is the difference between group coaching and individual NEET coaching?",
    answer:
      "Individual NEET coaching provides personalized lesson plans, one-on-one mentoring, and flexible scheduling, addressing each student's unique doubts and learning style. SK Learnings uses data-driven insights and AI-powered performance tracking for quality improvement.",
  },
  {
    section: "Individual NEET Coaching",
    question:
      "Can I switch from group to individual coaching if I need more personal attention?",
    answer:
      "Yes, SK Learnings allows students to upgrade from group to individual coaching anytime. This ensures each learner receives targeted support for weak subjects and advanced concepts as needed.",
  },
  {
    section: "Individual NEET Coaching",
    question: "How does SK Learnings use AI or technology in NEET coaching?",
    answer:
      "Our coaching blends experienced faculty with AI-driven tools for adaptive tests, personalized study plans, and real-time doubt resolution. This hybrid approach boosts results and makes learning efficient for every NEET/JEE aspirant.",
  },
  {
    section: "Individual NEET Coaching",
    question: "How do you track my progress during NEET preparation?",
    answer:
      "We use regular assessments, AI-powered progress analytics, and monthly feedback sessions to help you monitor improvement. Individual coaching students receive customized reports highlighting strengths and areas to work on.",
  },
  {
    section: "Individual NEET Coaching",
    question: "What support is available for doubts and exam stress?",
    answer:
      "SK Learnings provides 24/7 online doubt support, live chat with faculty, regular motivational webinars, and counseling sessions to help students manage stress and maintain peak performance throughout their NEET journey.",
  },
];
