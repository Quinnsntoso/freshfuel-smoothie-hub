
import Layout from "../components/Layout";
import SmoothieCarousel from "../components/smoothies/SmoothieCarousel";
import { smoothies } from "../data/smoothies";

const Smoothies = () => {
  return (
    <Layout>
      <section className="min-h-screen">
        <SmoothieCarousel smoothies={smoothies} />
        
        <div className="container-custom py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Health Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Nutrient-Rich</h3>
              <p>
                Our smoothies are packed with vitamins, minerals, and antioxidants to support overall health and wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Boost Energy</h3>
              <p>
                Get a natural energy boost from our perfectly balanced blend of fruits, vegetables, and superfoods.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Support Immunity</h3>
              <p>
                Strengthen your immune system with our vitamin-rich smoothies designed to keep you healthy year-round.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Aid Digestion</h3>
              <p>
                The fiber content in our smoothies supports healthy digestion and helps maintain gut health.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Hydrate</h3>
              <p>
                Stay hydrated with our refreshing smoothies that provide both hydration and essential nutrients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Recovery</h3>
              <p>
                Perfect for post-workout recovery, our protein-rich options help repair and build muscles.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="/support/community" className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Join Our Community
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Smoothies;
