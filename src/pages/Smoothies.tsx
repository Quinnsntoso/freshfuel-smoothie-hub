import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Layout from "../components/Layout";
import SmoothieCarousel from "../components/smoothies/SmoothieCarousel";
import SmoothieDetail from "../components/smoothies/SmoothieDetail";
import { smoothies } from "../data/smoothies";
import { SmoothieData } from "../types/smoothie";

const Smoothies = () => {
  const [selectedSmoothie, setSelectedSmoothie] = useState<SmoothieData | null>(null);
  
  // Set initial smoothie when component mounts
  useEffect(() => {
    if (smoothies.length > 0) {
      setSelectedSmoothie(smoothies[0]);
    }
  }, []);
  
  return (
    <Layout>
      <section className="min-h-screen">
        <div className="bg-gradient-to-b from-white to-gray-100 py-8">
          <div className="container-custom">
            <div className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Signature Smoothies</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fuel Your Day, Fresh Every Way with our handcrafted smoothies made from premium ingredients
              </p>
            </div>
          </div>
          
          <SmoothieCarousel 
            smoothies={smoothies}
            onSelect={setSelectedSmoothie}
          />
        </div>
        
        {selectedSmoothie && (
          <SmoothieDetail 
            smoothie={selectedSmoothie}
          />
        )}
        
        <div className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Health Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-green-100 text-green-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </span>
                  Nutrient-Rich
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our smoothies are packed with vitamins, minerals, and antioxidants to support overall health and wellbeing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  </span>
                  Boost Energy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get a natural energy boost from our perfectly balanced blend of fruits, nuts, and superfoods.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-blue-100 text-blue-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6c.67 0 1.19.58 1.07 1.24l-.99 5.45A1 1 0 0 0 7.07 18h9.86a1 1 0 0 0 .99-.82l.99-5.45c.12-.66-.4-1.24-1.07-1.24h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                    </svg>
                  </span>
                  Support Immunity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Packed with antioxidants and vitamins to strengthen your body's natural defense system daily.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-purple-100 text-purple-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </span>
                  Aid Digestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The fiber content in our smoothies supports healthy digestion and helps maintain gut health.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-cyan-100 text-cyan-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M12 2v20M2 12h20"></path>
                    </svg>
                  </span>
                  Hydrate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stay hydrated with our refreshing smoothies that provide both hydration and essential nutrients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="bg-red-100 text-red-800 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path>
                      <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path>
                      <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path>
                      <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path>
                      <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path>
                      <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
                      <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path>
                      <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>
                    </svg>
                  </span>
                  Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Post-workout blends with protein and electrolytes help rebuild and recharge tired muscles faster.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our WhatsApp Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Did you know Freshfuel has a <span className="font-bold" style={{ color: "#030260" }}>WhatsApp Community</span>? Join our club now to enjoy <span className="font-bold" style={{ color: "#a91a30" }}>exclusive smoothie deals</span> and stay <span className="font-bold" style={{ color: "#a91a30" }}>up to date</span> with Freshfuel!
            </p>
            <a href="/support/community" className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Join Our Community
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Smoothies;
