import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-freshfuel-white to-freshfuel-pearGreen/30">
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-freshfuel-muteBlack mb-8">
                Fresh. Nutritious. <br/> Delicious.
              </h1>
              <p className="text-xl md:text-2xl text-freshfuel-muteBlack mb-12">
                Fuel Your Day, Fresh Every Way
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <Link 
                  to="/smoothies" 
                  className="px-8 py-3 bg-freshfuel-pomegranate text-white font-heading rounded-full text-lg font-medium hover:bg-freshfuel-pomegranate/90 transition-colors"
                >
                  Explore Our Smoothies
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-3 bg-white border-2 border-freshfuel-muteBlack text-freshfuel-muteBlack font-heading rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-heading font-bold mb-12 text-center text-freshfuel-muteBlack">
              Why Choose Freshfuel?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-freshfuel-lightGrey p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-3 text-freshfuel-muteBlack">Fresh Ingredients</h3>
                <p className="text-freshfuel-muteBlack">
                  We source the freshest fruits, vegetables, and superfoods for maximum nutrition and flavor.
                </p>
              </div>
              
              <div className="bg-freshfuel-lightGrey p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-3 text-freshfuel-muteBlack">Health Benefits</h3>
                <p className="text-freshfuel-muteBlack">
                  Each smoothie is designed with specific health benefits in mind, from energy boosts to immune support.
                </p>
              </div>
              
              <div className="bg-freshfuel-lightGrey p-6 rounded-lg">
                <h3 className="text-xl font-heading font-semibold mb-3 text-freshfuel-muteBlack">Sustainability</h3>
                <p className="text-freshfuel-muteBlack">
                  We're committed to eco-friendly practices, from our sourcing to our packaging choices.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-heading font-bold mb-6 text-freshfuel-muteBlack">Join Our Community</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-freshfuel-muteBlack">
              Stay updated on our latest offerings, health tips, and exclusive promotions.
            </p>
            <Link 
              to="/support/community" 
              className="px-8 py-3 bg-freshfuel-pearGreen text-white font-heading rounded-full text-lg font-medium hover:bg-freshfuel-pearGreen/90 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
