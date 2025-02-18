const ServiceHighlights = () => {
    return (
      <div className="bg-white py-6 px-2 lg:px-[5rem]">
        <div className=" ">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center rounded-md shadow-md border border-gray-300 p-4 hover:shadow-2xl">
              <img src="https://www.tyremarket.com/images/products/Products_tn/ALNAC_4G_tn.webp" alt="Tyre Repair" className="mx-auto h-20 w-20" />
              <h3 className="text-xl font-semibold mt-4">Tyre Repair</h3>
              <p className="text-gray-600">Quick and reliable tyre repair services.</p>
            </div>
            <div className="text-center rounded-md shadow-md border border-gray-300 p-4 hover:shadow-2xl">
              <img src="https://www.goodyear.eu/en_gb/consumer/learn/what-is-wheel-alignment/_jcr_content/root/container/container_123038152/container_13022/container_733685331/image.coreimg.png/1621862271957/camber.png" alt="Wheel Alignment" className="mx-auto h-20 w-20" />
              <h3 className="text-xl font-semibold mt-4">Wheel Alignment</h3>
              <p className="text-gray-600">Precision wheel alignment for a smooth ride.</p>
            </div>
            <div className="text-center rounded-md shadow-md border border-gray-300 p-4 hover:shadow-2xl">
              <img src="https://trimg.cardekho.com/model/200x200/ApolloAmarGold.jpg" alt="Tyre Replacement" className="mx-auto h-20 w-20" />
              <h3 className="text-xl font-semibold mt-4">Tyre Replacement</h3>
              <p className="text-gray-600">High-quality tyres for all vehicle types.</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceHighlights;