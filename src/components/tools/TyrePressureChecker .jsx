import { useState } from "react";

const TyrePressureChecker = () => {
    const [vehicleType, setVehicleType] = useState("");
    const [pressure, setPressure] = useState("");
  
    const checkPressure = () => {
      if (vehicleType === "car") {
        setPressure("Recommended pressure: 32-35 PSI");
      } else if (vehicleType === "bike") {
        setPressure("Recommended pressure: 28-32 PSI");
      } else {
        setPressure("Please select a vehicle type.");
      }
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-2xl border border-gray-300">
        <h2 className="text-2xl font-semibold mb-4">Tyre Pressure Checker</h2>
        <div className="space-y-4">
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
          </select>
          <button
            onClick={checkPressure}
            className="px-4 py-2 bg-primary hover:bg-hoverPrimary cursor-pointer text-white rounded"
          >
            Check Pressure
          </button>
          {pressure && <p className="mt-4 text-lg">{pressure}</p>}
        </div>
      </div>
    );
  };
  
  export default TyrePressureChecker;