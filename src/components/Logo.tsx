
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type LogoProps = {
  size?: "default" | "large";
  className?: string; // Add className prop for custom positioning
};

const Logo = ({ size = "default", className = "" }: LogoProps) => {
  const location = useLocation();
  
  // Determine which logo to use based on current route
  const useDarkBackground = () => {
    // Routes with darker backgrounds that need white logo
    const darkBackgroundRoutes = ['/blogs']; 
    return darkBackgroundRoutes.includes(location.pathname);
  };
  
  // Use white logo for dark backgrounds, black logo for light backgrounds
  const logoSrc = useDarkBackground() 
    ? "/lovable-uploads/49a4d497-2afe-4152-a0b8-4afd0081383f.png" // New logo for both backgrounds
    : "/lovable-uploads/49a4d497-2afe-4152-a0b8-4afd0081383f.png"; // Same logo for both backgrounds

  // Determine width class based on size prop - increased sizes
  const widthClass = size === "large" ? "w-48" : "w-36";

  return (
    <Link to="/" className={`block ${className}`}>
      <div className={`${widthClass}`}>
        <img 
          src={logoSrc}
          alt="Freshfuel Logo" 
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
