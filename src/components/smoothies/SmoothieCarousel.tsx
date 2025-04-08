
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SmoothieData } from "../../types/smoothie";
import SmoothieSlide from "./SmoothieSlide";
import { Button } from "@/components/ui/button";

interface SmoothieCarouselProps {
  smoothies: SmoothieData[];
  onSelect?: (smoothie: SmoothieData) => void;
}

const SmoothieCarousel = ({ smoothies, onSelect }: SmoothieCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to notify parent component whenever the current slide changes
  useEffect(() => {
    if (onSelect && smoothies.length > 0) {
      onSelect(smoothies[currentIndex]);
    }
  }, [currentIndex, smoothies, onSelect]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === smoothies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? smoothies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container h-[550px] md:h-[650px] relative overflow-hidden">
      <div 
        className="carousel-slides h-full flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${smoothies.length * 100}%`
        }}
      >
        {smoothies.map((smoothie) => (
          <SmoothieSlide 
            key={smoothie.id} 
            smoothie={smoothie} 
          />
        ))}
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {smoothies.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <Button 
        variant="outline"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
        onClick={prevSlide}
        aria-label="Previous smoothie"
      >
        <ChevronLeft size={24} />
      </Button>
      
      <Button 
        variant="outline"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
        onClick={nextSlide}
        aria-label="Next smoothie"
      >
        <ChevronRight size={24} />
      </Button>

      {/* Add debug information */}
      <div className="absolute top-2 right-2 text-xs text-black bg-white/70 px-2 py-1 rounded">
        Slide: {currentIndex + 1}/{smoothies.length}
      </div>
    </div>
  );
};

export default SmoothieCarousel;
