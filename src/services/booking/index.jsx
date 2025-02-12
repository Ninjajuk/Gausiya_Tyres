import { useState } from "react";
import LocationDetector from "./LocationDetector ";
import NearestServiceCenter from "./NearestServiceCenter ";
import BookingRequest from "./BookingRequest ";
import PickupConfirmation from "./PickupConfirmation ";


const BookingFlow = () => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [nearestCenter, setNearestCenter] = useState(null);
    const [isRequested, setIsRequested] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
  
    return (
      <div className="p-6 space-y-6">
        <h1 className="text-4xl font-bold text-center">Tyre Service Booking</h1>
        <LocationDetector setLocation={setLocation} />
        {location.latitude && (
          <>
            <NearestServiceCenter
              userLat={location.latitude}
              userLon={location.longitude}
              setNearestCenter={setNearestCenter}
            />
            {nearestCenter ? (
              <>
                {!isRequested && !isRejected && (
                  <BookingRequest
                    nearestCenter={nearestCenter}
                    setIsRequested={setIsRequested}
                    setIsRejected={setIsRejected}
                  />
                )}
                {isRequested && (
                  <PickupConfirmation
                    isRequested={isRequested}
                    setIsConfirmed={setIsConfirmed}
                    setIsRejected={setIsRejected}
                  />
                )}
                {isRejected && (
                  <div className="p-6 bg-red-100 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Request Rejected</h2>
                    <p className="text-red-600">
                      Sorry, the service center is unable to fulfill your request. Please try
                      another service center.
                    </p>
                    <button
                      onClick={() => {
                        setIsRejected(false);
                        setIsRequested(false);
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded mt-4"
                    >
                      Search Again
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="p-6 bg-yellow-100 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">No Available Service Centers</h2>
                <p className="text-yellow-800">
                  Sorry, there are no available service centers nearby. Please try again
                  later.
                </p>
              </div>
            )}
          </>
        )}
        {isConfirmed && (
          <p className="text-green-600 text-center text-xl">
            Your tyre service has been confirmed! A technician will arrive shortly.
          </p>
        )}
      </div>
    );
  };

export default BookingFlow;