
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
    ? "/lovable-uploads/49e13a68-545c-4567-a5d8-b049e35c3583.png" // White logo
    : "/lovable-uploads/bbf5bb74-ebac-482d-9846-29e57742ceb8.png"; // Black logo

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
