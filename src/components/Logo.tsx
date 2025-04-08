
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type LogoProps = {
  size?: "default" | "large";
};

const Logo = ({ size = "default" }: LogoProps) => {
  const location = useLocation();
  
  // Determine which logo to use based on current route
  const useDarkBackground = () => {
    // Routes with darker backgrounds that need white logo
    const darkBackgroundRoutes = ['/blogs']; 
    return darkBackgroundRoutes.includes(location.pathname);
  };
  
  // Use white logo for dark backgrounds, black logo for light backgrounds
  const logoSrc = useDarkBackground() 
    ? "/lovable-uploads/65512d21-fe5b-46df-baca-eb3356cd0498.png" // White version on dark background
    : "/lovable-uploads/65512d21-fe5b-46df-baca-eb3356cd0498.png"; // Same logo for both backgrounds

  // Determine width class based on size prop
  const widthClass = size === "large" ? "w-48" : "w-32";

  return (
    <Link to="/" className="block">
      <div className={widthClass}>
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
