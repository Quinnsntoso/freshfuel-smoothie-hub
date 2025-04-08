
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  const location = useLocation();
  
  // Determine if we're on a page with a dark background
  const isDarkBackground = () => {
    const darkBackgroundRoutes = ['/blogs'];
    return darkBackgroundRoutes.includes(location.pathname);
  };
  
  // Set navigation background and text colors based on the page background
  const navClasses = isDarkBackground()
    ? "py-4 px-6 md:px-8 flex items-center justify-between bg-freshfuel-muteBlack text-white"
    : "py-4 px-6 md:px-8 flex items-center justify-between bg-white";
    
  const linkClasses = isDarkBackground()
    ? "nav-link font-heading text-white hover:text-freshfuel-pearGreen"
    : "nav-link font-heading text-freshfuel-muteBlack hover:text-white";

  return (
    <nav className={navClasses}>
      <div className="flex items-center">
        <Logo className="my-auto" />
      </div>
      <div className="flex items-center gap-4">
        <Link to="/about" className={linkClasses}>About Us</Link>
        <Link to="/smoothies" className={linkClasses}>Our Smoothies</Link>
        <Link to="/blogs" className={linkClasses}>Blogs</Link>
        <Link to="/support" className={linkClasses}>Support</Link>
      </div>
    </nav>
  );
};

export default Navigation;
