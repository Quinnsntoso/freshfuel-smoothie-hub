
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-3xl font-bold tracking-tight">
      <div className="flex items-center">
        <span className="font-black">FRESH</span>
        <span className="text-freshfuel-gray">FUEL</span>
      </div>
    </Link>
  );
};

export default Logo;
