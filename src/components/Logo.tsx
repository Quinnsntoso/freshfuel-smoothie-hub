
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Logo = () => {
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

  return (
    <Link to="/" className="block">
      <div className="w-32">
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
