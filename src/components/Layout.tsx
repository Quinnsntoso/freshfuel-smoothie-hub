
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Determine if we're on a page with a dark background
  const isDarkBackground = () => {
    const darkBackgroundRoutes = ['/blogs'];
    return darkBackgroundRoutes.includes(location.pathname);
  };
  
  // Set main background color based on the page
  const mainClasses = isDarkBackground()
    ? "flex-grow bg-freshfuel-muteBlack text-white"
    : "flex-grow";

  return (
    <div className={`flex flex-col min-h-screen font-body ${isDarkBackground() ? 'bg-freshfuel-muteBlack text-white' : 'bg-white'}`}>
      <Navigation />
      <main className={mainClasses}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
