import React from "react";
import { Wrench, Clock, Tag } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="w-full text-center space-y-8 py-4 px-2 lg:px-[5rem]">
      <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 border border-gray-300 rounded-lg shadow-lg">
        <div className="p-4 space-y-2 rounded-lg shadow-md hover:shadow-2xl border border-gray-300 flex flex-col items-center">
          <Wrench className="w-10 h-10 text-blue-500" />
          <h3 className="text-xl font-semibold">Expert Service</h3>
          <p className="text-muted-foreground text-center">
            Professional technicians with years of experience
          </p>
        </div>
        <div className="p-4 space-y-2 rounded-lg shadow-md hover:shadow-2xl border border-gray-300 flex flex-col items-center">
          <Clock className="w-10 h-10 text-green-500" />
          <h3 className="text-xl font-semibold">Quick Turnaround</h3>
          <p className="text-muted-foreground text-center">
            Most services completed within an hour
          </p>
        </div>
        <div className="p-4 space-y-2 rounded-lg shadow-md hover:shadow-2xl border border-gray-300 flex flex-col items-center">
          <Tag className="w-10 h-10 text-yellow-500" />
          <h3 className="text-xl font-semibold">Best Price</h3>
          <p className="text-muted-foreground text-center">
            Competitive pricing with seasonal discounts
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
