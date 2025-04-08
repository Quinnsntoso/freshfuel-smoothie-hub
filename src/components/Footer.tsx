
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-gray-600">
              Providing healthy and delicious smoothies to fuel your day.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link to="/smoothies" className="text-gray-600 hover:text-black">Our Smoothies</Link></li>
              <li><Link to="/blogs" className="text-gray-600 hover:text-black">Blogs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support/contact" className="text-gray-600 hover:text-black">Contact Us</Link></li>
              <li><Link to="/support/community" className="text-gray-600 hover:text-black">WhatsApp Community</Link></li>
              <li><Link to="/support/suggestions" className="text-gray-600 hover:text-black">Submit Suggestions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-2">Follow us on social media</p>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-600">
                Instagram
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                Facebook
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Freshfuel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
