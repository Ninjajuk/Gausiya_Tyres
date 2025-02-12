import { useState } from "react";

const LocationDetector = ({setLocation}) => {

  const [error, setError] = useState("");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
            const newLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              };
              setLocation(newLocation); // Update the location in the parent component
        },
        (err) => {
          setError("Unable to retrieve your location.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="w-full p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Detect Your Location</h2>
      <button
        onClick={getLocation}
        className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        Detect Location
      </button>
      {location.latitude && (
        <p className="mt-4">
          Your location: {location.latitude}, {location.longitude}
        </p>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default LocationDetector;