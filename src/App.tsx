
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Smoothies from "./pages/Smoothies";
import Blogs from "./pages/Blogs";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import WhatsAppCommunity from "./components/support/WhatsAppCommunity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/smoothies" element={<Smoothies />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/community" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
