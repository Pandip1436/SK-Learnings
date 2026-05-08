export type Feature = {
  title: string;
  body: string;
  icon: "list" | "id" | "chart" | "bulb" | "building";
};

export const keyFeatures: Feature[] = [
  {
    icon: "list",
    title: "Individualized Coaching",
    body: "Experience personalized coaching tailored to each student's unique learning style. Our individualized approach ensures focused attention, fostering a deeper understanding of subjects and optimizing the learning journey.",
  },
  {
    icon: "id",
    title: "Experienced Faculties",
    body: "Benefit from the expertise of our seasoned faculty members who bring a wealth of knowledge and years of experience to the classroom. Our educators are committed to guiding students through challenges and inspiring academic excellence.",
  },
  {
    icon: "chart",
    title: "Proven Success Ratio",
    body: "Join a community of achievers — SK Learnings boasts an impressive 84% success ratio per batch, a testament to our commitment to nurturing every student towards their academic goals.",
  },
  {
    icon: "bulb",
    title: "Innovative Teaching Methods",
    body: "Explore a dynamic learning environment where traditional teaching meets innovation. Our instructors leverage modern teaching methods, technology, and interactive tools to make learning engaging and effective.",
  },
  {
    icon: "building",
    title: "State of the Art Facilities",
    body: "Immerse yourself in a conducive learning environment equipped with state-of-the-art facilities. From modern classrooms to advanced study resources, SK Learnings provides a space where education thrives.",
  },
];

export type Pillar = {
  title: string;
  body: string;
  icon: "analytics" | "target" | "heart" | "thumbsup" | "spark";
};

export const aboutPillars: Pillar[] = [
  {
    icon: "analytics",
    title: "Personalized Analytics",
    body: "Dive into the power of personalized analytics, where we assess each student's strengths and areas for improvement. Through data-driven insights, we tailor our approach to address individual learning styles, ensuring targeted and effective coaching.",
  },
  {
    icon: "target",
    title: "Targeted Training",
    body: "Our approach extends beyond generalized instruction. With 'INDIVIDUAL COACHING,' students receive targeted training that hones in on specific areas that require attention. This personalized focus accelerates understanding and mastery of subjects.",
  },
  {
    icon: "heart",
    title: "Genuine Care",
    body: "More than just educators, our team is a source of genuine care and support. We understand the importance of a nurturing environment, and our faculty is committed to fostering a sense of belonging, encouragement, and motivation for each student.",
  },
  {
    icon: "thumbsup",
    title: "A Formula for Success",
    body: "'INDIVIDUAL COACHING' at SK Learnings is not just a strategy; it's a formula for inevitable success. The integration of Personalized Analytics, Targeted Training, and Genuine Care creates an educational journey where every student can thrive and reach their academic goals.",
  },
  {
    icon: "spark",
    title: "Experience the Difference",
    body: "Embark on a learning journey where your unique potential is recognized and nurtured. At SK Learnings, 'INDIVIDUAL COACHING' is more than an approach; it's a commitment to your success.",
  },
];

export const examsList: string[] = [
  "NEET",
  "JEE",
  "NTSE",
  "Board Exams",
  "KVPY",
  "IGCSE",
  "CBSE",
  "ICSE",
  "ISC",
  "Olympiad",
];
