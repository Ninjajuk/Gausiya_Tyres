import React, { useState } from 'react'
import LocationDetector from '../../services/booking/LocationDetector ';

const TyrePickupForm = () => {
    const [tyreSize, setTyreSize] = useState("");
    const [location, setLocation] = useState({ latitude: null, longitude: null });
  
    const [vehicleType, setVehicleType] = useState("");
    const [loadingLocation, setLoadingLocation] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Vehicle Type:", vehicleType, "Tyre Size:", tyreSize, "Pickup Location:", location);
    };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-4">Book Your Tyres for Repair</h1>

    {/* Booking Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Vehicle Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Vehicle Type</label>
        <select
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          required
        >
          <option value="" disabled>Select vehicle type</option>
          <option value="2-wheeler">2-Wheeler (Bike, Scooter)</option>
          <option value="4-wheeler">4-Wheeler (Car, SUV)</option>
          <option value="6+ wheeler">6+ Wheeler (Truck, Bus)</option>
          <option value="heavy-equipment">Heavy Equipment (Cranes, Construction)</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Tyre Size Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Tyre Size</label>
        <input
          type="text"
          value={tyreSize}
          onChange={(e) => setTyreSize(e.target.value)}
          placeholder="Enter tyre size"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          required
        />
      </div>

      {/* Pickup Location with "Get Location" Button */}
      <div className=''>
        <label className="block text-sm font-medium text-gray-700">Pickup Location</label>
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 shadow-sm">
          <LocationDetector setLocation={setLocation}/>
        </div>
        <p className="text-xs text-gray-500 mt-1">We need your location to find the nearest mechanic.</p>
      </div>


      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-primary-dark transition duration-200 cursor-pointer"
      >
        Search
      </button>
    </form>
  </div>
  )
}

export default TyrePickupForm