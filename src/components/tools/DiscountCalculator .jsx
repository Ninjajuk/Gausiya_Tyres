import { useState } from "react";

const DiscountCalculator = () => {
    const [total, setTotal] = useState("");
    const [discount, setDiscount] = useState("");
    const [finalPrice, setFinalPrice] = useState("");
  
    const calculateDiscount = () => {
      if (total && discount) {
        const final = total - (total * discount) / 100;
        setFinalPrice(`Final Price: $${final}`);
      } else {
        setFinalPrice("Please fill all fields.");
      }
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Discount Calculator</h2>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Total Price"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Discount (%)"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={calculateDiscount}
            className="px-4 py-2 bg-primary hover:bg-hoverPrimary cursor-pointer text-white rounded"
          >
            Calculate
          </button>
          {finalPrice && <p className="mt-4 text-lg">{finalPrice}</p>}
        </div>
      </div>
    );
  };
  
  export default DiscountCalculator;