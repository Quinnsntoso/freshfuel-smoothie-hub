
import { useState } from "react";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppCommunity = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've joined our WhatsApp community!",
      });
      setIsSubmitting(false);
      setName("");
      setPhoneNumber("");
      setAgreedToTerms(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Join Our WhatsApp Community</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <p className="mb-4">
            Join our exclusive WhatsApp community to receive:
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center">
              <span className="bg-green-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-green-600" />
              </span>
              Weekly promotions and discounts
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-green-600" />
              </span>
              Early access to new menu items
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-green-600" />
              </span>
              Event announcements and newsletters
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-green-600" />
              </span>
              Healthy lifestyle tips and recipes
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 p-1 rounded-full mr-2">
                <Check className="h-4 w-4 text-green-600" />
              </span>
              Special birthday treats
            </li>
          </ul>
          
          <p className="text-sm text-gray-600">
            Don't worry, we respect your privacy and won't spam you. You can unsubscribe at any time.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                WhatsApp Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="+1 (234) 567-8900"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="mt-1"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                I agree to receive promotional messages and updates from Freshfuel via WhatsApp. I understand I can unsubscribe at any time.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Joining..." : "Join Community"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppCommunity;
