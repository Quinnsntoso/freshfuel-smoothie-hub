
import { Mail, Phone, Instagram } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Reach Out to Us</h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <Mail className="mr-3 h-5 w-5 text-freshfuel-gray shrink-0" />
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:freshfuel25@gmail.com" className="text-blue-600 hover:underline">
                  freshfuel25@gmail.com
                </a>
              </div>
            </li>
            
            <li className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-freshfuel-gray shrink-0" />
              <div>
                <p className="font-medium">WhatsApp Business</p>
                <a href="https://wa.me/6288245472468" className="text-blue-600 hover:underline">
                  +62 882-4547-2468
                </a>
              </div>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Social Media</h3>
          
          <ul className="space-y-4">
            <li className="flex items-center">
              <Instagram className="mr-3 h-5 w-5 text-freshfuel-gray" />
              <div>
                <p className="font-medium">Instagram</p>
                <a href="https://instagram.com/drinkfreshfuel" className="text-blue-600 hover:underline">
                  @drinkfreshfuel
                </a>
              </div>
            </li>
            
            <li className="flex items-center">
              <svg 
                className="mr-3 h-5 w-5 text-freshfuel-gray"
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
              <div>
                <p className="font-medium">TikTok</p>
                <a href="https://tiktok.com/@drinkfreshfuel" className="text-blue-600 hover:underline">
                  @drinkfreshfuel
                </a>
              </div>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-4">Based In</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">BSD City</p>
              <p>BSD City, South Tangerang</p>
              <p>Indonesia</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
