"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BookingModal from "../components/BookingModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { carData } from "@/data/carsData";
import CarCard from "../components/CarCard";

export default function Cars() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    const handleBooking = (carName) => {
        setSelectedCar(carName);
        setIsBookingOpen(true);
    };

    const cars = carData;

    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
            <div className="container-premium fade-in">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Our <span className="text-accent">Car Fleet</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose from our wide selection of quality vehicles for your journey in Makassar
                </p>
                </div>
        
                {/* Cars Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car, index) => (
                        <CarCard 
                            key={car.id}
                            car={car}
                            handleBooking={handleBooking}
                            style={{ animationDelay: `${index * 100}ms` }}
                        />
                ))}
                </div>
        
                {/* Bottom CTA */}
                <div className="mt-20 text-center space-y-6 p-12 bg-muted/50 rounded-3xl">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Didn't Find What You're Looking For?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Contact us directly via WhatsApp and we'll help you find the perfect car for your needs
                </p>
                <Button 
                    variant="accent" 
                    size="lg"
                    onClick={() => setIsBookingOpen(true)}
                >
                    Contact Us on WhatsApp
                </Button>
                </div>
            </div>
        
            <BookingModal 
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                carName={selectedCar}
            />
            </div>
            <Footer />
        </div>
      );
}