const PickupConfirmation = ({ isRequested }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
  
    const simulateConfirmation = () => {
      // Simulate confirmation from the service center
      setTimeout(() => {
        setIsConfirmed(true);
      }, 2000);
    };
  
    return (
      <div className="p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Pickup Confirmation</h2>
        {isRequested && (
          <div>
            <p>Waiting for service center confirmation...</p>
            <button
              onClick={simulateConfirmation}
              className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
            >
              Simulate Confirmation
            </button>
            {isConfirmed && (
              <p className="mt-4 text-green-600">
                Your request has been confirmed! A technician will arrive shortly.
              </p>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default PickupConfirmation;