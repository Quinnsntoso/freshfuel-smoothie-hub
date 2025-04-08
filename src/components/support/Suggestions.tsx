
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Suggestions = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestionType, setSuggestionType] = useState("feedback");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you!",
        description: "Your suggestion has been submitted successfully.",
      });
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setSuggestionType("feedback");
      setMessage("");
    }, 1500);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Submit Your Suggestions</h2>
      
      <p className="mb-6">
        We value your input! Whether you have feedback on our current offerings, suggestions for new smoothie flavors, or ideas for where we should open our next location, we'd love to hear from you.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
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
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="suggestionType" className="block text-sm font-medium mb-1">
            Suggestion Type
          </label>
          <select
            id="suggestionType"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={suggestionType}
            onChange={(e) => setSuggestionType(e.target.value)}
            required
          >
            <option value="feedback">General Feedback</option>
            <option value="menu">New Menu Suggestion</option>
            <option value="location">New Location Suggestion</option>
            <option value="improvement">Service Improvement</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your Suggestion
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Please share your thoughts..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="py-2 px-6 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Suggestion"}
        </button>
      </form>
    </div>
  );
};

export default Suggestions;
