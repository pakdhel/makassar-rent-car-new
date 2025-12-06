"use client"

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
    Users, 
    Clock
  } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

export default function FeaturedCars() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    const handleBooking = (carName) => {
        setSelectedCar(carName);
        setIsBookingOpen(true);
    };

    const featuredCars = [
        {
          id: 1,
          name: "Toyota Avanza",
          image: "/placeholder.svg",
          capacity: "7 Seats",
          transmission: "Manual",
          price: "350K",
        },
        {
          id: 2,
          name: "Honda Brio",
          image: "/placeholder.svg",
          capacity: "5 Seats",
          transmission: "Automatic",
          price: "300K",
        },
        {
          id: 3,
          name: "Toyota Innova",
          image: "/placeholder.svg",
          capacity: "7 Seats",
          transmission: "Automatic",
          price: "500K",
        },
    ];

    return(
        <>
            <BookingModal 
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
                carName={selectedCar}
            />

            <section className="section-spacing bg-muted/30">
            <div className="container-premium">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Featured Cars</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our selection of premium vehicles
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {featuredCars.map((car, index) => (
                <Card 
                    key={car.id} 
                    className="card-premium p-0 overflow-hidden group"
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="relative overflow-hidden">
                    <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {car.price}/day
                    </div>
                    </div>
                    <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {car.capacity}
                        </div>
                        <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {car.transmission}
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