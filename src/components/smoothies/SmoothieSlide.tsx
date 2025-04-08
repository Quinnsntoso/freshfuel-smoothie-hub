
import { SmoothieData } from "../../types/smoothie";

interface SmoothieSlideProps {
  smoothie: SmoothieData;
}

const SmoothieSlide = ({ smoothie }: SmoothieSlideProps) => {
  return (
    <div 
      className="carousel-slide h-full"
      style={{ 
        background: `linear-gradient(to bottom, white, ${smoothie.bgColor})` 
      }}
    >
      <div className="container-custom h-full flex flex-col items-center justify-center pt-10">
        <p className="text-xl mb-2">Introducing our <em className="font-semibold italic">signature</em> menu</p>
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
            className="w-full h-auto animate-float"
          />
          
          <div className="absolute inset-0 -z-10 flex flex-wrap justify-around items-center">
            {smoothie.ingredients.map((ingredient, index) => (
              <div 
                key={index}
                className="ingredient-tag m-2"
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
