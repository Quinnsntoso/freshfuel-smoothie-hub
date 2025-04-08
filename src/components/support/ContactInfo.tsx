
import { Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

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
                <a href="mailto:hello@freshfuel.com" className="text-blue-600 hover:underline">
                  hello@freshfuel.com
                </a>
              </div>
            </li>
            
            <li className="flex items-start">
              <Phone className="mr-3 h-5 w-5 text-freshfuel-gray shrink-0" />
              <div>
                <p className="font-medium">WhatsApp Business</p>
                <a href="https://wa.me/123456789" className="text-blue-600 hover:underline">
                  +1 (234) 567-8900
                </a>
              </div>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-4">Business Hours</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span>8:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 4:00 PM</span>
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
                <a href="https://instagram.com/freshfuel" className="text-blue-600 hover:underline">
                  @freshfuel
                </a>
              </div>
            </li>
            
            <li className="flex items-center">
              <Facebook className="mr-3 h-5 w-5 text-freshfuel-gray" />
              <div>
                <p className="font-medium">Facebook</p>
                <a href="https://facebook.com/freshfuel" className="text-blue-600 hover:underline">
                  @freshfuelofficial
                </a>
              </div>
            </li>
            
            <li className="flex items-center">
              <Twitter className="mr-3 h-5 w-5 text-freshfuel-gray" />
              <div>
                <p className="font-medium">Twitter</p>
                <a href="https://twitter.com/freshfuel" className="text-blue-600 hover:underline">
                  @freshfuel
                </a>
              </div>
            </li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-4">Store Locations</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-medium">Downtown</p>
              <p>123 Main Street, Suite 101</p>
              <p>City, State 12345</p>
            </li>
            <li>
              <p className="font-medium">Westside</p>
              <p>456 West Avenue, Unit B</p>
              <p>City, State 12345</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
