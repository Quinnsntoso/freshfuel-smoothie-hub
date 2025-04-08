
import { useState } from "react";
import Layout from "../components/Layout";
import ContactInfo from "../components/support/ContactInfo";
import WhatsAppCommunity from "../components/support/WhatsAppCommunity";
import Suggestions from "../components/support/Suggestions";

const tabs = [
  { id: "contact", label: "Contact Information" },
  { id: "community", label: "WhatsApp Community" },
  { id: "suggestions", label: "Submit Suggestions" }
];

const Support = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-freshfuel-pink/20">
        <div className="container-custom py-16">
          <h1 className="text-5xl font-bold mb-12 text-center">Support</h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? "bg-freshfuel-warmBeige text-white" 
                      : "bg-white border border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {activeTab === "contact" && <ContactInfo />}
              {activeTab === "community" && <WhatsAppCommunity />}
              {activeTab === "suggestions" && <Suggestions />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
