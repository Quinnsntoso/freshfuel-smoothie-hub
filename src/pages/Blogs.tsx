
import { useState } from "react";
import Layout from "../components/Layout";

// Blog categories
const categories = ["All", "Press Releases", "Behind the Scenes", "Marketing Campaigns", "Healthy Lifestyle"];

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Grand Opening: Freshfuel's New Downtown Location",
    excerpt: "Join us for the grand opening of our newest location in the heart of downtown. Special promotions, free samples, and more!",
    image: "https://images.unsplash.com/photo-1615887693525-5270d46f1b9b?auto=format&fit=crop&q=80&w=500",
    category: "Press Releases",
    date: "April 5, 2023"
  },
  {
    id: 2,
    title: "Meet Our Smoothie Artisans: The Team Behind Your Favorite Drinks",
    excerpt: "Get to know our passionate team members who craft each smoothie with care and expertise.",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=500",
    category: "Behind the Scenes",
    date: "March 22, 2023"
  },
  {
    id: 3,
    title: "Summer Smoothie Challenge: 7 Days, 7 Smoothies",
    excerpt: "Take our summer challenge and try a different nutritious smoothie every day for a week!",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&q=80&w=500",
    category: "Marketing Campaigns",
    date: "June 1, 2023"
  },
  {
    id: 4,
    title: "The Power of Antioxidants: Why They Matter for Your Health",
    excerpt: "Learn about the incredible health benefits of antioxidants and which smoothies pack the biggest antioxidant punch.",
    image: "https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=500",
    category: "Healthy Lifestyle",
    date: "February 15, 2023"
  },
  {
    id: 5,
    title: "Freshfuel Partners with Local Organic Farmers",
    excerpt: "We're excited to announce our new partnership with local organic farmers to bring you the freshest ingredients.",
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=500",
    category: "Press Releases",
    date: "May 10, 2023"
  },
  {
    id: 6,
    title: "Morning Routine: How to Start Your Day with Energy",
    excerpt: "Discover the perfect morning routine that includes a nutritious smoothie to power your day.",
    image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=500",
    category: "Healthy Lifestyle",
    date: "April 18, 2023"
  }
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-freshfuel-orange/20">
        <div className="container-custom py-16">
          <h1 className="text-5xl font-bold mb-12 text-center">Freshfuel Blog</h1>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? "bg-black text-white" 
                    : "bg-white border border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{post.date}</span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-black font-medium hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center gap-1">
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                Previous
              </button>
              <button className="px-3 py-1 bg-black text-white rounded">
                1
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                2
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                3
              </button>
              <button className="px-3 py-1 bg-white border border-gray-300 rounded hover:bg-gray-100">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
