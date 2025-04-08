
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SmoothieData } from "../../types/smoothie";
import SmoothieSlide from "./SmoothieSlide";

interface SmoothieCarouselProps {
  smoothies: SmoothieData[];
}

const SmoothieCarousel = ({ smoothies }: SmoothieCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="carousel-container h-[600px] md:h-[700px]">
      <div 
        className="carousel-slides h-full"
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {smoothies.map((smoothie, index) => (
          <SmoothieSlide 
            key={smoothie.id} 
            smoothie={smoothie} 
          />
        ))}
      </div>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
        onClick={prevSlide}
        aria-label="Previous smoothie"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 transition-colors"
        onClick={nextSlide}
        aria-label="Next smoothie"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default SmoothieCarousel;
