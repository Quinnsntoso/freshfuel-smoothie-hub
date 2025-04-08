
import { SmoothieData } from "../../types/smoothie";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SmoothieDetailProps {
  smoothie: SmoothieData;
  onClose?: () => void; // Making this optional
}

const SmoothieDetail = ({ smoothie, onClose }: SmoothieDetailProps) => {
  // Get color for special ingredients based on smoothie type
  const getIngredientStyle = (ingredient: string) => {
    const highlightMap: Record<string, {color: string, bgColor: string, textColor: string}> = {
      "Collagen": {
        color: "#a91a30", // Beauty Burst
        bgColor: "#a91a30",
        textColor: "#ffffff"
      },
      "Active Charcoal": {
        color: "#030260", // Active Fuel
        bgColor: "#030260",
        textColor: "#ffffff"
      },
      "Electrolyte Powder": {
        color: "#f9b703", // Energy Blast
        bgColor: "#f9b703",
        textColor: "#ffffff"
      },
      "Vitamin C Powder": {
        color: "#f8975d", // Tropical Immune
        bgColor: "#f8975d", 
        textColor: "#ffffff"
      },
      "Green Spirulina": {
        color: "#bdc88c", // Sunrise Oats
        bgColor: "#bdc88c",
        textColor: "#ffffff"
      }
    };
    
    // Find if this ingredient contains a key from our highlight map
    for (const [key, style] of Object.entries(highlightMap)) {
      if (ingredient.includes(key)) {
        return {
          backgroundColor: style.bgColor,
          color: style.textColor,
          borderColor: style.color,
          borderWidth: '2px',
        };
      }
    }
    return {};
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Smoothie Details</h2>
          {/* Removed the close button that was here */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-center justify-center">
            <div 
              className="rounded-2xl p-10 w-full max-w-sm flex items-center justify-center"
              style={{ backgroundColor: smoothie.bgColor + '50' }} // Using opacity for a lighter bg
            >
              <img 
                src={smoothie.image} 
                alt={smoothie.name}
                className="w-80 h-auto object-contain"
              />
            </div>
            
            {smoothie.isBestSeller && (
              <div className="mt-4">
                <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  BEST SELLER
                </span>
              </div>
            )}
          </div>
          
          <div>
            <h3 className="text-4xl font-bold mb-2">{smoothie.name}</h3>
            <p className="text-lg font-medium text-gray-600 mb-6">{smoothie.tagline}</p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2">Description</h4>
              <p className="text-gray-600">{smoothie.description}</p>
            </div>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-2">Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {smoothie.ingredients.map((ingredient, index) => (
                  <span 
                    key={index}
                    className="bg-white border border-black px-3 py-1 rounded-full text-sm"
                    style={getIngredientStyle(ingredient)}
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Health Benefits</h4>
              <ul className="space-y-2">
                {smoothie.healthBenefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmoothieDetail;
