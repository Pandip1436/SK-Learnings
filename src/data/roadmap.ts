export interface RoadmapStep {
  id: number;
  month: string;
  title: string;
  description: string;
  topperTip: string;
  focusAreas: string[];
  status: "completed" | "current" | "upcoming";
}

export const topperRoadmap: RoadmapStep[] = [
  {
    id: 1,
    month: "June - August",
    title: "Foundation & Conceptual Clarity",
    description: "The phase where you master NCERT basics and build a strong foundation in all three subjects.",
    topperTip: "Don't rush! Spend extra time on Mechanics and Genetics early on.",
    focusAreas: ["NCERT Thorough Reading", "Basic Math for Physics", "Classification in Biology"],
    status: "completed"
  },
  {
    id: 2,
    month: "September - November",
    title: "The Deep Dive",
    description: "Transitioning from basic concepts to complex problem solving and advanced topics.",
    topperTip: "Start making your own short notes now. They are lifesavers in April!",
    focusAreas: ["Organic Chemistry Mechanisms", "Electromagnetism", "Human Physiology"],
    status: "completed"
  },
  {
    id: 3,
    month: "December - January",
    title: "Syllabus Completion & First Review",
    description: "Finishing the 12th standard portions and starting the integrated revision of 11th standard.",
    topperTip: "Consistency > Intensity. Do 50 MCQs every single day without fail.",
    focusAreas: ["Modern Physics", "Ecological Balance", "Inorganic Trends"],
    status: "current"
  },
  {
    id: 4,
    month: "February - March",
    title: "Mock Test Marathon",
    description: "Intensive practice with full-length papers and identifying weak areas through analysis.",
    topperTip: "Analyze every mistake. A mock test without analysis is a waste of time.",
    focusAreas: ["Full Length Tests", "Time Management", "Negative Marking Control"],
    status: "upcoming"
  },
  {
    id: 5,
    month: "April",
    title: "Final Polish & Strategy",
    description: "Focusing purely on high-yield topics and memorization of formulas/examples.",
    topperTip: "Trust your preparation. Stay calm and follow a fixed sleep schedule.",
    focusAreas: ["Flashcard Revision", "Formula Sheets", "Biology Example Lists"],
    status: "upcoming"
  },
  {
    id: 6,
    month: "May",
    title: "NEET Exam Day Mastery",
    description: "Executing the strategy with confidence and clear mind to secure your dream seat.",
    topperTip: "The 3 hours in the hall are about mental strength as much as knowledge.",
    focusAreas: ["Confidence", "Accuracy", "Your Dream College"],
    status: "upcoming"
  }
];
