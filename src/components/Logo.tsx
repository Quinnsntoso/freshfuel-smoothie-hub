
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block">
      <div className="w-32">
        <img 
          src="/lovable-uploads/aee1f540-a79d-48d7-93f8-25ad664698e4.png" 
          alt="Freshfuel Logo" 
          className="w-full h-auto"
        />
      </div>
    </Link>
  );
};

export default Logo;
