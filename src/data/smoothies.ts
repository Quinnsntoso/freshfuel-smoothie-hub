
import { SmoothieData } from "../types/smoothie";

// Image paths for your real smoothie products
const greenSmoothieImage = "/lovable-uploads/66e2c74c-b0cf-4ef2-af6c-149a36f3fc39.png";
const orangeSmoothieImage = "/lovable-uploads/d3a5ed60-79be-403b-942f-79bf1429cd0d.png"; 
const yellowSmoothieImage = "/lovable-uploads/845ebd93-bf80-462a-a6df-41cc0c347275.png";
const pinkSmoothieImage = "/lovable-uploads/36d13960-fe3f-4fd0-b246-a7165e972504.png";
const graySmoothieImage = "/lovable-uploads/a51759f2-f511-4e6e-acc3-a16d9641b052.png";

export const smoothies: SmoothieData[] = [
  {
    id: 1,
    name: "SUNRISE OATS",
    tagline: "Your smart breakfast on the go.",
    ingredients: ["Banana", "Muesli & Oats", "Green Spirulina"],
    image: greenSmoothieImage,
    bgColor: "#c8e0a0", // light green
    description: "A balanced, protein-rich blend to kickstart your morning with clean energy.",
    healthBenefits: [
      "Supports digestion",
      "Promotes sustained energy",
      "Provides antioxidant support"
    ]
  },
  {
    id: 2,
    name: "TROPICAL IMMUNE",
    tagline: "Immunity in every sip.",
    ingredients: ["Mango", "Raspberry", "Vitamin C Powder"],
    image: orangeSmoothieImage,
    bgColor: "#ffc1a1", // orange
    isBestSeller: true,
    description: "A vibrant tropical mix to boost your defenses and keep you energized.",
    healthBenefits: [
      "Strengthens the immune system",
      "Rich in antioxidants",
      "Supports daily vitality"
    ]
  },
  {
    id: 3,
    name: "ENERGY BLAST",
    tagline: "Stay sharp. Stay energized!",
    ingredients: ["Mango", "Banana", "Electrolyte Powder"],
    image: yellowSmoothieImage,
    bgColor: "#ffd485", // yellow
    isBestSeller: true,
    description: "A refreshing, tropical energy booster designed to hydrate and power you through the day.",
    healthBenefits: [
      "Restores electrolytes",
      "Boosts stamina",
      "Supports peak physical performance"
    ]
  },
  {
    id: 4,
    name: "BEAUTY BURST",
    tagline: "Glow from within.",
    ingredients: ["Strawberry", "Raspberry", "Blueberry", "Collagen"],
    image: pinkSmoothieImage,
    bgColor: "#ffc1c8", // pink
    description: "A fruity collagen blend that helps your skin stay radiant and healthy.",
    healthBenefits: [
      "Enhances skin elasticity",
      "Supports collagen regeneration",
      "Helps brighten complexion"
    ]
  },
  {
    id: 5,
    name: "ACTIVE FUEL",
    tagline: "Refuel. Recharge. Repeat.",
    ingredients: ["Muesli", "Oats", "Banana", "Peanut Butter"],
    image: graySmoothieImage,
    bgColor: "#c9c9c9", // gray
    description: "A post-workout blend designed to help your body bounce back, stronger.",
    healthBenefits: [
      "Aids muscle recovery",
      "Supports digestion",
      "Detoxifies with activated charcoal"
    ]
  }
];
