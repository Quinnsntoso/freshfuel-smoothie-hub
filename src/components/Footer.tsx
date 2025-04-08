
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { Instagram } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  
  // Determine if we're on a page with a dark background
  const isDarkBackground = () => {
    const darkBackgroundRoutes = ['/blogs'];
    return darkBackgroundRoutes.includes(location.pathname);
  };
  
  // Set footer background and text colors based on the page background
  const footerClasses = isDarkBackground()
    ? "bg-freshfuel-muteBlack text-white py-12 border-t border-gray-800"
    : "bg-white py-12 border-t";
    
  const headingClasses = isDarkBackground()
    ? "text-lg font-heading font-semibold mb-4 text-white"
    : "text-lg font-heading font-semibold mb-4 text-freshfuel-muteBlack";
    
  const linkClasses = isDarkBackground()
    ? "text-gray-300 hover:text-freshfuel-pearGreen"
    : "text-freshfuel-muteBlack hover:text-freshfuel-pomegranate";

  return (
    <footer className={footerClasses}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className={`mt-4 text-sm ${isDarkBackground() ? 'text-gray-300' : 'text-freshfuel-muteBlack'} font-body`}>
              Fuel your day, Fresh every way!
            </p>
          </div>
          
          <div>
            <h3 className={headingClasses}>Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className={linkClasses}>About Us</Link></li>
              <li><Link to="/smoothies" className={linkClasses}>Our Smoothies</Link></li>
              <li><Link to="/blogs" className={linkClasses}>Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={headingClasses}>Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support/contact" className={linkClasses}>Contact Us</Link></li>
              <li><Link to="/support/community" className={linkClasses}>WhatsApp Community</Link></li>
              <li><Link to="/support/suggestions" className={linkClasses}>Submit Suggestions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={headingClasses}>Connect With Us</h3>
            <p className={isDarkBackground() ? 'text-gray-300 mb-2' : 'text-freshfuel-muteBlack mb-2'}>Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/drinkfreshfuel/" className={linkClasses} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </span>
              </a>
              <a href="https://www.tiktok.com/@drinkfreshfuel" className={linkClasses} target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <svg 
                    className="mr-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M9 12.2L11 14.75L16.5 9" />
                    <path d="M12 2a9.96 9.96 0 0 0-7 2.93 10 10 0 0 0 11.83 16 10 10 0 0 0 5.17-5.66 9.95 9.95 0 0 0-1.1-9.2A10 10 0 0 0 12 2Z" />
                  </svg>
                  TikTok
                </span>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`border-t ${isDarkBackground() ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-8 text-center text-sm ${isDarkBackground() ? 'text-gray-300' : 'text-freshfuel-muteBlack'}`}>
          <p>&copy; {new Date().getFullYear()} Freshfuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
