
import { SmoothieData } from "../../types/smoothie";

interface SmoothieSlideProps {
  smoothie: SmoothieData;
  onClick?: () => void;
}

const SmoothieSlide = ({ smoothie, onClick }: SmoothieSlideProps) => {
  // Function to get the appropriate gradient based on smoothie name
  const getGradientStyle = () => {
    switch (smoothie.name) {
      case "BEAUTY BURST":
        return "linear-gradient(135deg, #fefcf5, rgba(252, 167, 177, 0.7), #fca7b1, rgba(252, 167, 177, 0.7), #fefcf5)";
      case "ACTIVE FUEL":
        return "linear-gradient(135deg, #fefcf5, rgba(255, 215, 152, 0.7), #f6c16c, rgba(246, 193, 108, 0.7), #fefcf5)";
      case "ENERGY BLAST":
        return "linear-gradient(135deg, #fefcf5, rgba(255, 215, 152, 0.7), #f6c16c, rgba(246, 193, 108, 0.7), #fefcf5)";
      case "TROPICAL IMMUNE":
        return "linear-gradient(135deg, #fefcf5, rgba(248, 151, 93, 0.7), #f8975d, rgba(248, 151, 93, 0.7), #fefcf5)";
      case "SUNRISE OATS":
        return "linear-gradient(135deg, #fefcf5, rgba(189, 200, 140, 0.7), #bdc88c, rgba(189, 200, 140, 0.7), #fefcf5)";
      default:
        // Fallback to the original background color if needed
        return `linear-gradient(to bottom, white, ${smoothie.bgColor})`;
    }
  };

  // Function to determine if an ingredient should be highlighted and with which color
  const getIngredientStyle = (ingredient: string) => {
    const highlightMap: Record<string, string> = {
      "BEAUTY BURST": {
        ingredient: "Collagen",
        color: "#fca7b1", // Pink
        textColor: "#ffffff"
      },
      "ACTIVE FUEL": {
        ingredient: "Peanut Butter", // No "Active Charcoal" in ingredients, using available ingredient
        color: "#c9c9c9", // Gray
        textColor: "#000000"
      },
      "ENERGY BLAST": {
        ingredient: "Electrolyte Powder",
        color: "#ffd485", // Yellow
        textColor: "#000000"
      },
      "TROPICAL IMMUNE": {
        ingredient: "Vitamin C Powder",
        color: "#ffc1a1", // Orange
        textColor: "#000000"
      },
      "SUNRISE OATS": {
        ingredient: "Green Spirulina",
        color: "#c8e0a0", // Light green
        textColor: "#000000"
      }
    };

    const highlight = highlightMap[smoothie.name];
    
    if (highlight && ingredient.includes(highlight.ingredient)) {
      return {
        backgroundColor: highlight.color,
        color: highlight.textColor,
        borderColor: highlight.color,
        fontWeight: 'bold'
      };
    }
    return {};
  };

  return (
    <div 
      className="carousel-slide h-full w-full flex-shrink-0 cursor-pointer"
      style={{ 
        background: getGradientStyle()
      }}
      onClick={onClick}
    >
      <div className="container-custom h-full flex flex-col items-center justify-center pt-10">
        <p className="text-xl mb-2">Freshfuel <em className="font-semibold italic">Signature</em> Smoothies</p>
        <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-md">{smoothie.name}</h2>
        
        {smoothie.isBestSeller && (
          <div className="relative mb-4">
            <div className="bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full rotate-[-5deg]">
              best seller!
            </div>
          </div>
        )}
        
        <div className="mb-4">
          <div className="smoothie-button">
            {smoothie.tagline}
          </div>
        </div>

        <div className="relative w-64 md:w-80 mb-4 z-10">
          <img 
            src={smoothie.image} 
            alt={smoothie.name} 
            className="w-full h-auto object-contain"
            style={{ maxHeight: '300px' }}
          />
          
          <div className="absolute inset-0 -z-10 flex flex-wrap justify-around items-center">
            {smoothie.ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="ingredient-tag m-2"
                style={getIngredientStyle(ingredient)}
              >
                {ingredient}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothieSlide;
