"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Clock, Fuel } from "lucide-react";
import BookingModal from "../components/BookingModal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cars() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    const cars = [
        {
            id: 1,
            name: "Toyota Avanza",
            image: "/placeholder.svg",
            capacity: "7 Seats",
            transmission: "Manual",
            fuel: "Bensin",
            price: "350K",
            category: "MPV",
        },
        {
            id: 2,
            name: "Honda Brio",
            image: "/placeholder.svg",
            capacity: "5 Seats",
            transmission: "Automatic",
            fuel: "Bensin",
            price: "300K",
            category: "Hatchback",
        },
        {
            id: 3,
            name: "Toyota Innova",
            image: "/placeholder.svg",
            capacity: "7 Seats",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "500K",
            category: "MPV",
        },
        {
            id: 4,
            name: "Suzuki Ertiga",
            image: "/placeholder.svg",
            capacity: "7 Seats",
            transmission: "Manual",
            fuel: "Bensin",
            price: "400K",
            category: "MPV",
        },
        {
            id: 5,
            name: "Toyota Fortuner",
            image: "/placeholder.svg",
            capacity: "7 Seats",
            transmission: "Automatic",
            fuel: "Diesel",
            price: "800K",
            category: "SUV",
        },
        {
            id: 6,
            name: "Honda Jazz",
            image: "/placeholder.svg",
            capacity: "5 Seats",
            transmission: "Automatic",
            fuel: "Bensin",
            price: "350K",
            category: "Hatchback",
        },
    ];

    const handleBooking = (carName) => {
        setSelectedCar(carName);
        setIsBookingOpen(true);
    };

    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
            <div className="container-premium">
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
                    <Card 
                    key={car.id}
                    className="card-premium p-0 overflow-hidden group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                    >
                    <div className="relative overflow-hidden">
                        <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {car.price}/day
                        </div>
                        <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-xs font-medium">
                        {car.category}
                        </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                        <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                        {car.name}
                        </h3>
                        
                        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                        <div className="flex flex-col items-center gap-2">
                            <Users className="w-5 h-5 text-accent" />
                            <span className="text-xs text-muted-foreground">{car.capacity}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Clock className="w-5 h-5 text-accent" />
                            <span className="text-xs text-muted-foreground">{car.transmission}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Fuel className="w-5 h-5 text-accent" />
                            <span className="text-xs text-muted-foreground">{car.fuel}</span>
                        </div>
                        </div>
        
                        <Button 
                        variant="accent" 
                        className="w-full"
                        onClick={() => handleBooking(car.name)}
                        >
                        Book Now
                        </Button>
                    </div>
                    </Card>
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