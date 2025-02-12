const BookingRequest = ({ center }) => {
    const [isRequested, setIsRequested] = useState(false);
  
    const handleRequest = () => {
      // Simulate API call to send request
      setTimeout(() => {
        setIsRequested(true);
      }, 1000);
    };
  
    return (
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Book Service</h2>
        {center ? (
          <div>
            <p>Requesting service from: {center.name}</p>
            <button
              onClick={handleRequest}
              className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
            >
              {isRequested ? "Request Sent" : "Send Request"}
            </button>
          </div>
        ) : (
          <p>No available service centers nearby.</p>
        )}
      </div>
    );
  };
  
  export default BookingRequest;