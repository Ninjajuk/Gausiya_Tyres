import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample tyre data
const tyreData = [
  {
    id: 1,
    brand: "Michelin",
    model: "Pilot Sport 4",
    price: "$150",
    features: ["High grip", "Wet performance", "Durable"],
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    brand: "Bridgestone",
    model: "Potenza RE-71R",
    price: "$130",
    features: ["Track performance", "Precision handling", "Lightweight"],
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    brand: "Pirelli",
    model: "P Zero",
    price: "$140",
    features: ["Sporty design", "All-season", "Comfortable"],
    image: "https://via.placeholder.com/100",
  },
];

const TyreComparisonTool = () => {
  const [selectedTyres, setSelectedTyres] = useState([]);

  const handleSelectTyre = (tyre) => {
    if (selectedTyres.some((t) => t.id === tyre.id)) {
      setSelectedTyres(selectedTyres.filter((t) => t.id !== tyre.id));
    } else {
      if (selectedTyres.length < 2) {
        setSelectedTyres([...selectedTyres, tyre]);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 ">
      <h1 className="text-3xl font-bold text-center mb-8">Tyre Comparison Tool</h1>

      {/* Tyre Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tyreData.map((tyre) => (
          <motion.div
            key={tyre.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-6 border rounded-lg shadow-md cursor-pointer ${
              selectedTyres.some((t) => t.id === tyre.id)
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 bg-white"
            }`}
            onClick={() => handleSelectTyre(tyre)}
          >
            <img src={tyre.image} alt={tyre.brand} className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">{tyre.brand}</h2>
            <p className="text-gray-600 text-center">{tyre.model}</p>
            <p className="text-lg font-bold text-center mt-2">{tyre.price}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedTyres.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">Comparison</h2>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Feature</th>
                {selectedTyres.map((tyre) => (
                  <th key={tyre.id} className="py-2">
                    {tyre.brand} {tyre.model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 font-semibold">Price</td>
                {selectedTyres.map((tyre) => (
                  <td key={tyre.id} className="py-2">
                    {tyre.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-2 font-semibold">Features</td>
                {selectedTyres.map((tyre) => (
                  <td key={tyre.id} className="py-2">
                    <ul className="list-disc list-inside">
                      {tyre.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </motion.div>
      )}
    </div>
  );
};

export default TyreComparisonTool;