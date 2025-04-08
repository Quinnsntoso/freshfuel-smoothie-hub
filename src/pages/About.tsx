import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div 
        className="relative bg-gradient-to-b from-white to-freshfuel-green/30 py-20"
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Freshfuel</h1>
            <p className="text-xl mb-4">
              Freshfuel is an Indonesian smoothie company offering healthy, tasty, and practical options personalized with AI technology.
            </p>
            <p className="text-xl italic mb-8">
              "Fuel Your Day, Fresh Every Way"
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-lg mb-8">
                To become the leading smoothie brand in Indonesia by providing innovative and affordable health solutions.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-lg">
                To deliver high-quality smoothies tailored to customer needs through innovation, education, and technology.
              </p>
            </div>
            
            <div className="mt-16">
              <h2 className="text-3xl font-semibold mb-6">Why Choose Freshfuel?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Fresh Ingredients</h3>
                  <p>
                    We source the freshest fruits, vegetables, and superfoods for maximum nutrition and flavor.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Health Benefits</h3>
                  <p>
                    Each smoothie is designed with specific health benefits in mind, from energy boosts to immune support.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                  <p>
                    We're committed to eco-friendly practices, from our sourcing to our packaging choices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <a href="/smoothies" className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
                Discover Our Smoothies
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
