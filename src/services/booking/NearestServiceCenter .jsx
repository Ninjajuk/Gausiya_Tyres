

const serviceCenters = [
    { id: 1, name: "Center A", latitude: 12.9716, longitude: 77.5946, available: true },
    { id: 2, name: "Center B", latitude: 13.0827, longitude: 80.2707, available: false },
    { id: 3, name: "Center C", latitude: 11.0168, longitude: 76.9558, available: true },
    { id: 4, name: "Ajuk", latitude: 28.6162945, longitude: 77.2457090, available: true },
  ];
  
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };
  
  const NearestServiceCenter = ({ userLat, userLon }) => {

    const nearestCenter = serviceCenters
      .filter((center) => center.available)
      .map((center) => ({
        ...center,
        distance: calculateDistance(userLat, userLon, center.latitude, center.longitude),
      }))
      .sort((a, b) => a.distance - b.distance)[0];
  
    return (
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Nearest Service Center</h2>
        {nearestCenter && nearestCenter.distance <= 100  ? (
          <div>
            <p>Name: {nearestCenter.name}</p>
            <p>Distance: {nearestCenter.distance.toFixed(2)} km</p>
          </div>
        ) : (
          <p className="text-red-600 font-semibold">No available service centers nearby.</p>
        )}
      </div>
    );
  };
  
  export default NearestServiceCenter;