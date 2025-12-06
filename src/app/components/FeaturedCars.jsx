"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
    Users, 
    Clock,
    Fuel
  } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";
import { carData } from "@/data/carsData";
import CarCard from "./CarCard";

export default function FeaturedCars() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    const handleBooking = (carName) => {
        setSelectedCar(carName);
        setIsBookingOpen(true);
    };

    const featuredCars = carData.filter(car => car.isFeatured === true).slice(0, 3);

    return(
        <>
            <BookingModal 
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                carName={selectedCar}
            />

            <section className="section-spacing bg-muted/30">
            <div className="container-premium fade-in">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Featured Cars</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our selection of premium vehicles
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {featuredCars.map((car, index) => (
                    <CarCard key={car.id} car={car} handleBooking={handleBooking} style={{ animationDelay: `${index * 50}ms` }} />
                ))}
            </div>

            <div className="text-center mt-12">
                <Button variant="outline" size="lg" asChild>
                <Link href="/cars">View All Cars</Link>
                </Button>
            </div>
            </div>
        </section>
        </>
    );
}