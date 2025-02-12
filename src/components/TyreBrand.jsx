import { useState } from "react";

const tyrebrands = [
  { name: "Apollo", logo: "https://via.placeholder.com/50" },
  { name: "Ceat", logo: "https://via.placeholder.com/50" },
  { name: "Bridgestone", logo: "https://via.placeholder.com/50" },
  { name: "Dunlop", logo: "https://via.placeholder.com/50" },
  { name: "JK Tyre", logo: "https://via.placeholder.com/50" },
  { name: "MRF", logo: "https://via.placeholder.com/50" },
  { name: "Firestone", logo: "https://via.placeholder.com/50" },
  { name: "Radar", logo: "https://via.placeholder.com/50" },
  { name: "Kenda", logo: "https://via.placeholder.com/50" },
  { name: "Maxxis", logo: "https://via.placeholder.com/50" },
  { name: "Goodyear", logo: "https://via.placeholder.com/50" },
  { name: "Hankook", logo: "https://via.placeholder.com/50" }
];

const TyreBrand = () => {
  const [activeTab, setActiveTab] = useState("New");
  const tabs = ["New", "Old", "Resole"];

  return (
    <>    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
    <h2 className="text-xl font-semibold mb-4 text-primary">Explore Tyres by Brand</h2>

    {/* Tabs */}
    <div className="flex border-b border-gray-300">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 text-sm font-medium transition-all duration-200 ${activeTab === tab
              ? "border-b-2 border-primary text-black font-semibold"
              : "text-gray-500 hover:text-gray-700"
            }`}
          onClick={() => setActiveTab(tab)}
          aria-label={`Select ${tab} tyres`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Brands Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4">
      {tyrebrands.map((brand) => (
        <div
          key={brand.name}
          className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200"
        >
          <img src={brand.logo} alt={brand.name} className="w-16 h-16 mb-2 object-contain" />
          <span className="text-sm font-medium">{brand.name}</span>
        </div>
      ))}
    </div>

    {/* View All Button */}
    <div className="mt-6 flex ">
      <button className="text-primary font-semibold flex items-center justify-center hover:underline">
        {/* View All Brands <span className="ml-1">⬇</span> */}
      </button>
    </div>
  </div>
  </>

  );
};
export default TyreBrand;