import { useState } from "react";

const brands = [
  { name: "Maruti", logo: "https://via.placeholder.com/50" },
  { name: "Tata", logo: "https://via.placeholder.com/50" },
  { name: "Kia", logo: "https://via.placeholder.com/50" },
  { name: "Toyota", logo: "https://via.placeholder.com/50" },
  { name: "Hyundai", logo: "https://via.placeholder.com/50" },
  { name: "Mahindra", logo: "https://via.placeholder.com/50" },
  { name: "Honda", logo: "https://via.placeholder.com/50" },
  { name: "MG", logo: "https://via.placeholder.com/50" },
  { name: "Skoda", logo: "https://via.placeholder.com/50" },
  { name: "Jeep", logo: "https://via.placeholder.com/50" },
  { name: "Renault", logo: "https://via.placeholder.com/50" },
  { name: "Nissan", logo: "https://via.placeholder.com/50" }
];

export default function TyreBrand() {
  const [activeTab, setActiveTab] = useState("Current");
  const tabs = ["Current", "Upcoming", "Expired"];

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-primary">Explore New Tyres by Brand</h2>
      
      {/* Tabs */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab ? "border-b-2 border-orange-500 text-black" : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center border p-4 rounded-lg shadow-sm hover:shadow-md">
            <img src={brand.logo} alt={brand.name} className="w-16 h-16 mb-2" />
            <span className="text-sm font-medium">{brand.name}</span>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-4 text-center">
        <button className="text-orange-500 font-semibold flex items-center justify-center">
          View All Brands <span className="ml-1">⬇</span>
        </button>
      </div>
    </div>
  );
}
