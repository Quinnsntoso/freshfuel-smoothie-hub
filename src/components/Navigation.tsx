
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 md:px-8 flex items-center justify-between bg-white">
      <Logo />
      <div className="flex items-center gap-4">
        <Link to="/about" className="nav-link font-heading">About Us</Link>
        <Link to="/smoothies" className="nav-link font-heading">Our Smoothies</Link>
        <Link to="/blogs" className="nav-link font-heading">Blogs</Link>
        <Link to="/support" className="nav-link font-heading">Support</Link>
      </div>
    </nav>
  );
};

export default Navigation;
