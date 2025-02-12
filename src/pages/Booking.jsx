import React, { useState } from "react";
import CopyRightFooter from "../components/footer/CopyRightFooter";
import Navbar from "../components/Navbar";
import TyrePickupForm from "../components/form/TyrePickupForm";
import BookingFlow from "../services/booking";

const Booking = () => {


    return (
        <section className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 bg-gray-50 px-4 lg:px-[5rem] py-10 flex justify-center items-center">
            <TyrePickupForm />
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <TyrePickupForm />
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"> 
                        <BookingFlow />
                    </div>
                </div> */}
            </main>
            <CopyRightFooter />
        </section>
    );
};

export default Booking;
