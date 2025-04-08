
import { X } from "lucide-react";
import { SmoothieData } from "../../types/smoothie";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SmoothieDetailProps {
  smoothie: SmoothieData;
  onClose: () => void;
}

const SmoothieDetail = ({ smoothie, onClose }: SmoothieDetailProps) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Smoothie Details</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            aria-label="Close details"
          >
            <X size={24} />
          </Button>
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
                    className="bg-white border-2 border-black px-3 py-1 rounded-full text-sm"
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
