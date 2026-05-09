export interface AnatomyPart {
  id: string;
  name: string;
  icon: string;
  weightage: string;
  facts: string[];
  color: "cyan" | "violet" | "emerald" | "rose" | "sky";
  coordinates: { x: number; y: number };
}

export const anatomyData: AnatomyPart[] = [
  {
    id: "brain",
    name: "Central Nervous System",
    icon: "Brain",
    weightage: "High (8-10%)",
    color: "violet",
    coordinates: { x: 50, y: 26 },
    facts: [
      "Hypothalamus regulates body temperature & hunger.",
      "Cerebellum maintains balance and posture.",
      "Corpus Callosum connects the two hemispheres."
    ]
  },
  {
    id: "endocrine",
    name: "Endocrine System",
    icon: "Gland",
    weightage: "High (6-8%)",
    color: "violet",
    coordinates: { x: 50, y: 32 },
    facts: [
      "Pituitary gland is the 'Master Gland'.",
      "Insulin lowers blood glucose levels.",
      "Thyroxine regulates basal metabolic rate."
    ]
  },
  {
    id: "lungs",
    name: "Respiratory System",
    icon: "Lungs",
    weightage: "High (7-9%)",
    color: "cyan",
    coordinates: { x: 44, y: 42 },
    facts: [
      "Alveoli provide 70-100m² surface area for exchange.",
      "Diaphragm contraction increases thoracic volume.",
      "Oxyhemoglobin dissociation curve is sigmoid."
    ]
  },
  {
    id: "heart",
    name: "Circulatory System",
    icon: "Heart",
    weightage: "Moderate (5-7%)",
    color: "rose",
    coordinates: { x: 56, y: 44 },
    facts: [
      "SA Node is known as the natural pacemaker.",
      "Double circulation ensures efficient oxygenation.",
      "Mitral valve prevents backflow to left atrium."
    ]
  },
  {
    id: "digestive",
    name: "Digestive System",
    icon: "Stomach",
    weightage: "Moderate (5-6%)",
    color: "emerald",
    coordinates: { x: 50, y: 52 },
    facts: [
      "Villi increase surface area for absorption.",
      "Bile emulsifies fats in the small intestine.",
      "Pepsin digests proteins in acidic stomach pH."
    ]
  },
  {
    id: "kidney",
    name: "Excretory System",
    icon: "Kidney",
    weightage: "Moderate (4-6%)",
    color: "emerald",
    coordinates: { x: 58, y: 56 },
    facts: [
      "Podocytes in Bowman's capsule aid filtration.",
      "Loop of Henle maintains medullary gradient.",
      "ADH increases water reabsorption in DCT."
    ]
  },
  {
    id: "reproductive",
    name: "Reproductive System",
    icon: "Cell",
    weightage: "High (7-9%)",
    color: "rose",
    coordinates: { x: 50, y: 62 },
    facts: [
      "LH surge triggers ovulation in females.",
      "Spermatogenesis occurs in seminiferous tubules.",
      "Zygote is the first diploid cell of new life."
    ]
  },
  {
    id: "skeletal",
    name: "Skeletal System",
    icon: "Bone",
    weightage: "Low-Moderate (3-5%)",
    color: "sky",
    coordinates: { x: 44, y: 68 },
    facts: [
      "Human adult has 206 bones; infants have ~300.",
      "Femur is the longest and strongest bone.",
      "Osteoblasts are cells that form new bone."
    ]
  },
  {
    id: "dna",
    name: "Genetics & Inheritance",
    icon: "DNA",
    weightage: "Extreme (12-15%)",
    color: "sky",
    coordinates: { x: 50, y: 74 },
    facts: [
      "Mendel's laws form the basis of inheritance.",
      "Chargaff's rule: A=T and G=C.",
      "Transcription occurs in 5' to 3' direction."
    ]
  }
];
