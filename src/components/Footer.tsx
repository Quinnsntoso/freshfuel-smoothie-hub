
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-freshfuel-muteBlack font-body">
              Providing healthy and delicious smoothies to fuel your day.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-freshfuel-muteBlack">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">About Us</Link></li>
              <li><Link to="/smoothies" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">Our Smoothies</Link></li>
              <li><Link to="/blogs" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-freshfuel-muteBlack">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support/contact" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">Contact Us</Link></li>
              <li><Link to="/support/community" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">WhatsApp Community</Link></li>
              <li><Link to="/support/suggestions" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">Submit Suggestions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-freshfuel-muteBlack">Connect With Us</h3>
            <p className="text-freshfuel-muteBlack mb-2">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">
                Instagram
              </a>
              <a href="#" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">
                Facebook
              </a>
              <a href="#" className="text-freshfuel-muteBlack hover:text-freshfuel-pomegranate">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-freshfuel-muteBlack">
          <p>&copy; {new Date().getFullYear()} Freshfuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
