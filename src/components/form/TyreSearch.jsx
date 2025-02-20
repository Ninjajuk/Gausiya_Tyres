import { useState } from "react";

const TyreSearch = () => {
  const [activeTab, setActiveTab] = useState("Bike Tyres");
  const [searchType, setSearchType] = useState("By Vehicle");

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">Search the Best Tyre</h2>

      {/* Tabs */}
      <div className="flex border-b gap-2">
        {["Car Tyres", "Bike Tyres"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-center ${
              activeTab === tab ? "bg-black text-white" : "bg-gray-200 text-gray-600"
            } rounded-t-lg`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search Type */}
      <div className="flex items-center gap-4 my-4 text-sm">
        {["By Vehicle", "By Size", "By Brand"].map((type) => (
          <label key={type} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="searchType"
              value={type}
              checked={searchType === type}
              onChange={() => setSearchType(type)}
              className="hidden"
            />
            <span
              className={`w-4 h-4 border-2 rounded-full flex items-center justify-center ${
                searchType === type ? "border-orange-500" : "border-gray-400"
              }`}
            >
              {searchType === type && (
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              )}
            </span>
            <span className="ml-2">{type}</span>
          </label>
        ))}
      </div>

      {/* Dropdowns */}
      <select className="w-full p-2 border border-gray-300 rounded mb-2">
        <option>Select Vehicle</option>
      </select>
      <select className="w-full p-2 border border-gray-300 rounded mb-4">
        <option>Select Variant</option>
      </select>

      {/* Search Button */}
      <button className="w-full bg-orange-500 text-white py-2 rounded text-lg font-semibold">
        Search
      </button>

      {/* Advanced Search */}
      <div className="text-right mt-2">
        <a href="#" className="text-gray-500 text-sm">Advanced Search →</a>
      </div>
    </div>
  );
};

export default TyreSearch;
