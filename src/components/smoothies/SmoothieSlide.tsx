import { SmoothieData } from "../../types/smoothie";

interface SmoothieSlideProps {
  smoothie: SmoothieData;
}

interface HighlightStyle {
  ingredient: string;
  color: string;
  textColor: string;
}

const SmoothieSlide = ({ smoothie }: SmoothieSlideProps) => {
  const getGradientStyle = () => {
    switch (smoothie.name) {
      case "BEAUTY BURST":
        return "linear-gradient(135deg, #fefcf5, rgba(252, 167, 177, 0.7), #fca7b1, rgba(252, 167, 177, 0.7), #fefcf5)";
      case "ACTIVE FUEL":
        return "linear-gradient(135deg, #fefcf5, rgba(107, 107, 107, 0.7), #6b6b6b, rgba(107, 107, 107, 0.7), #fefcf5)";
      case "ENERGY BLAST":
        return "linear-gradient(135deg, #fefcf5, rgba(255, 215, 152, 0.7), #f6c16c, rgba(246, 193, 108, 0.7), #fefcf5)";
      case "TROPICAL IMMUNE":
        return "linear-gradient(135deg, #fefcf5, rgba(248, 151, 93, 0.7), #f8975d, rgba(248, 151, 93, 0.7), #fefcf5)";
      case "SUNRISE OATS":
        return "linear-gradient(135deg, #fefcf5, rgba(189, 200, 140, 0.7), #bdc88c, rgba(189, 200, 140, 0.7), #fefcf5)";
      default:
        return `linear-gradient(to bottom, white, ${smoothie.bgColor})`;
    }
  };

  const getIngredientStyle = (ingredient: string) => {
    const highlightMap: Record<string, HighlightStyle> = {
      "BEAUTY BURST": {
        ingredient: "Collagen",
        color: "#fca7b1",
        textColor: "#ffffff"
      },
      "ACTIVE FUEL": {
        ingredient: "Active Charcoal",
        color: "#6b6b6b",
        textColor: "#ffffff"
      },
      "ENERGY BLAST": {
        ingredient: "Electrolyte Powder",
        color: "#ffd485",
        textColor: "#000000"
      },
      "TROPICAL IMMUNE": {
        ingredient: "Vitamin C Powder",
        color: "#ffc1a1",
        textColor: "#000000"
      },
      "SUNRISE OATS": {
        ingredient: "Green Spirulina",
        color: "#c8e0a0",
        textColor: "#000000"
      }
    };

    const highlight = highlightMap[smoothie.name];
    if (highlight && ingredient.includes(highlight.ingredient)) {
      return {
        backgroundColor: highlight.color,
        color: highlight.textColor,
        borderColor: highlight.color,
        fontWeight: 'bold' as const
      };
    }
    return {};
  };

  return (
    <div 
      className="carousel-slide h-full w-full flex-shrink-0"
      style={{ background: getGradientStyle() }}
    >
      <div className="container-custom h-full flex flex-col items-center justify-center pt-10 pb-16">
        <p className="text-xl mb-2">
          Freshfuel <em className="font-semibold italic">Signature</em> Smoothies
        </p>
        <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white drop-shadow-md">
          {smoothie.name}
        </h2>

        {smoothie.isBestSeller && (
          <div className="relative mb-4">
            <div className="bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full rotate-[-5deg]">
              best seller!
            </div>
          </div>
        )}

        <div className="mb-4">
          <div className="smoothie-button">{smoothie.tagline}</div>
        </div>

        {/* ✅ Bagian gambar dan ingredients */}
        <div className="relative w-64 md:w-80 mb-4 flex flex-col items-center">
          <img 
            src={smoothie.image} 
            alt={smoothie.name} 
            className="w-full h-auto object-contain"
            style={{ maxHeight: '300px', position: 'relative', zIndex: 0 }}
          />

          <div className="relative z-20 mt-6 flex flex-wrap justify-center gap-2">
            {smoothie.ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="ingredient-tag px-3 py-1 text-xs rounded-full shadow"
                style={{
                  ...getIngredientStyle(ingredient),
                  position: 'relative'
                }}
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
