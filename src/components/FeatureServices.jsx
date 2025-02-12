import React from "react";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Luxury Wedding Buses",
      image: "https://buscdn.cardekho.com/in/eka/12m/eka-12m-92416.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Premium Catering",
      image: "https://new.caterninja.com/ninja-buffy/header/Frame%20770.webp",
      rating: 4,
    },
    {
      id: 3,
      title: "Elegant Pandals",
      image: "https://images.pexels.com/photos/169203/pexels-photo-169203.jpeg",
      rating: 5,
    },
  ];

  return (
    <section className="py-2 bg-gray-50 lg:px-[5rem]">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">Featured Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-4  px-4">
        {services.map((service) => (
            <div key={service.id} className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-lg  overflow-hidden">
                <div className="flex-1">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 ">{service.title}</h3>
                    {/* <div className="text-yellow-500">
                        {"⭐".repeat(service.rating)}
                    </div> */}
                    <div className="mt-auto w-full">
                        <button className="mt-2 w-full text-secondary font-semibold px-4 py-2 ring-1 ring-gray-300  rounded-md shadow-md hover:bg-primary hover:text-white cursor-pointer">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedServices;