
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
    name: "GREEN DREAM",
    tagline: "Nutritious Morning Boost",
    ingredients: ["Spinach", "Banana", "Yogurt", "Spirulina"],
    image: greenSmoothieImage,
    bgColor: "#c8e0a0", // light green
    description: "Start your day with a nutritious boost of energy from our Green Dream smoothie, combining fresh vegetables with yogurt for a perfect balance.",
    healthBenefits: [
      "High in fiber for digestive health",
      "Rich in chlorophyll for detoxification",
      "Packed with antioxidants",
      "Great source of plant-based nutrients"
    ]
  },
  {
    id: 2,
    name: "MANGO TANGO",
    tagline: "Tropical fruit delight",
    ingredients: ["Mango", "Pineapple", "Orange", "Coconut Milk"],
    image: orangeSmoothieImage,
    bgColor: "#ffc1a1", // orange
    isBestSeller: true,
    description: "Our popular Mango Tango smoothie combines tropical fruits for a refreshing and vibrant drink that will transport you to paradise.",
    healthBenefits: [
      "Rich in vitamin C for immune support",
      "Anti-inflammatory properties",
      "High in digestive enzymes",
      "Natural energy booster"
    ]
  },
  {
    id: 3,
    name: "BANANA BLAST",
    tagline: "Perfect for Pre-workout",
    ingredients: ["Banana", "Honey", "Oats", "Almond Milk"],
    image: yellowSmoothieImage,
    bgColor: "#ffd485", // yellow
    isBestSeller: true,
    description: "Prepare for your workout with our protein-rich Banana Blast smoothie, designed to provide sustainable energy and muscle support.",
    healthBenefits: [
      "Potassium-rich for muscle function",
      "Complex carbohydrates for sustained energy",
      "Natural sugars for quick energy",
      "Helps prevent muscle cramps"
    ]
  },
  {
    id: 4,
    name: "BERRY BLISS",
    tagline: "Antioxidant powerhouse!",
    ingredients: ["Strawberry", "Raspberry", "Blueberry", "Yogurt"],
    image: pinkSmoothieImage,
    bgColor: "#ffc1c8", // pink
    description: "Our Berry Bliss smoothie is packed with antioxidant-rich berries to support radiant skin and overall wellness.",
    healthBenefits: [
      "Rich in antioxidants to fight free radicals",
      "Vitamin C for immune health",
      "Anti-aging benefits",
      "Supports cognitive function"
    ]
  },
  {
    id: 5,
    name: "ACTIVE CHARCOAL",
    tagline: "Detox & Cleanse",
    ingredients: ["Activated Charcoal", "Banana", "Almond Milk", "Chia Seeds"],
    image: graySmoothieImage,
    bgColor: "#c9c9c9", // gray
    description: "Cleanse and detoxify with our Active Charcoal smoothie, featuring activated charcoal and clean ingredients.",
    healthBenefits: [
      "Helps remove toxins from the body",
      "Supports digestive health",
      "Omega-3 fatty acids from chia seeds",
      "Great for skin health"
    ]
  }
];
