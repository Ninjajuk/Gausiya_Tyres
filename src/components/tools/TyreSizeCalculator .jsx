import { useState } from "react";

const TyreSizeCalculator = () => {
    const [width, setWidth] = useState("");
    const [aspectRatio, setAspectRatio] = useState("");
    const [diameter, setDiameter] = useState("");
    const [result, setResult] = useState("");
  
    const calculateSize = () => {
      if (width && aspectRatio && diameter) {
        const size = `${width}/${aspectRatio}R${diameter}`;
        setResult(`Your tyre size is: ${size}`);
      } else {
        setResult("Please fill all fields.");
      }
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Tyre Size Calculator</h2>
        <div className="space-y-4">
          <input
            type="number"
            placeholder="Width (mm)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Aspect Ratio (%)"
            value={aspectRatio}
            onChange={(e) => setAspectRatio(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Diameter (inches)"
            value={diameter}
            onChange={(e) => setDiameter(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={calculateSize}
            className="px-4 py-2 bg-primary hover:bg-hoverPrimary text-white rounded cursor-pointer"
          >
            Calculate
          </button>
          {result && <p className="mt-4 text-lg">{result}</p>}
        </div>
      </div>
    );
  };
  
  export default TyreSizeCalculator;