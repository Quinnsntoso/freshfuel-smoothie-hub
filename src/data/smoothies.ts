
import { SmoothieData } from "../types/smoothie";

// Image paths (we'll use placeholder images for now)
const sunriseOatsImage = "/lovable-uploads/de193eca-3c1a-42af-86e3-7a01986f5439.png";
const beautyBurstImage = "/lovable-uploads/efcb7c50-5519-4712-8a10-4567f76a1b08.png";
const activeFuelImage = "/lovable-uploads/0d07c852-84c5-42ca-969d-3a118792c4e4.png";
const energyBlastImage = "/lovable-uploads/eb16ca6f-8cc1-468a-8ffc-72f98fa892d2.png";
const tropicalImmuneImage = "/lovable-uploads/aec7c7ab-b267-4a82-bf80-6ddff2f59a20.png";

export const smoothies: SmoothieData[] = [
  {
    id: 1,
    name: "SUNRISE OATS",
    tagline: "Nutritious Morning Meal",
    ingredients: ["Muesli & Oats", "Banana", "Yogurt", "Green Spirulina"],
    image: sunriseOatsImage,
    bgColor: "#c8e0a0", // light green
    description: "Start your day with a nutritious boost of energy from our Sunrise Oats smoothie, combining the wholesome goodness of oats with fresh ingredients.",
    healthBenefits: [
      "High in fiber for digestive health",
      "Sustained energy release throughout the morning",
      "Rich in probiotics from yogurt",
      "Great source of plant-based protein"
    ]
  },
  {
    id: 2,
    name: "BEAUTY BURST",
    tagline: "Collagen for youthful skin",
    ingredients: ["Blueberry", "Strawberry", "Raspberry", "Fresh & Sour!"],
    image: beautyBurstImage,
    bgColor: "#ffc1c8", // pink
    isBestSeller: true,
    description: "Our popular Beauty Burst smoothie is packed with antioxidant-rich berries and collagen to promote radiant skin and overall wellness.",
    healthBenefits: [
      "Rich in antioxidants to fight free radicals",
      "Collagen support for skin elasticity",
      "Vitamin C for immune health",
      "Berry blend for anti-aging benefits"
    ]
  },
  {
    id: 3,
    name: "ACTIVE FUEL",
    tagline: "Perfect fuel for Pre-workout",
    ingredients: ["Muesli & Oats", "Banana", "Peanut Butter", "Active Charcoal"],
    image: activeFuelImage,
    bgColor: "#c9c9c9", // gray
    isBestSeller: true,
    description: "Prepare for your workout with our protein-rich Active Fuel smoothie, designed to provide sustainable energy and muscle support.",
    healthBenefits: [
      "High-quality protein for muscle recovery",
      "Complex carbohydrates for sustained energy",
      "Healthy fats from peanut butter",
      "Detoxifying properties from activated charcoal"
    ]
  },
  {
    id: 4,
    name: "ENERGY BLAST",
    tagline: "Energy recharge on the go!",
    ingredients: ["Banana", "Mango", "Electrolyte", "Yummy Yogurt"],
    image: energyBlastImage,
    bgColor: "#ffd485", // yellow
    description: "Need a quick energy boost? Our Energy Blast smoothie combines fruits and electrolytes to revitalize you instantly.",
    healthBenefits: [
      "Natural sugars for immediate energy",
      "Electrolytes for hydration and recovery",
      "Potassium from bananas for muscle function",
      "Digestive enzymes from mango"
    ]
  },
  {
    id: 5,
    name: "TROPICAL IMMUNE",
    tagline: "Fresh Immune Booster",
    ingredients: ["Mango", "Raspberry", "Vitamin C", "Apple Juice"],
    image: tropicalImmuneImage,
    bgColor: "#ffc4a1", // orange
    description: "Strengthen your immune system with our Tropical Immune smoothie, featuring vitamin-rich fruits and immune-boosting ingredients.",
    healthBenefits: [
      "High vitamin C content for immune support",
      "Antioxidants from berries",
      "Anti-inflammatory properties",
      "Hydrating and refreshing"
    ]
  }
];
