"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Fuel } from "lucide-react";
import Image from "next/image";


export default function CarCard({ car, handleBooking, style }) {
    return (
        <Card
            key={car.id}
            className="card-premium p-0 overflow-hidden group cursor-pointer scale-in"
            style={style}
        >
            {/* --- Bagian Gambar & Info Atas --- */}
            <div className="relative overflow-hidden">
                <Image
                    src={car.image}
                    alt={car.name}
                    width={500}
                    height={500}
                    className="w-full h-40 sm:h-64 object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {/* Price Tag */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {car.price}/day
                </div>

                {/* Category */}
                {car.category && (
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-card px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium shadow-md">
                        {car.category}
                    </div>
                )}
            </div>

            {/* --- Bagian Detail & Aksi --- */}
            <div className="p-4 sm:p-6 space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-2xl font-medium md:font-black group-hover:text-accent transition-colors leading-tight">
                    {car.name}
                </h3>

                {/* Detail Icons */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 py-2 sm:py-4 md:border-y sm:border-y border-border">
                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <Users className="w-3 h-3 md:w-5 md:h-5 text-accent" />
                        <span className="text-[8px] sm:text-xs text-muted-foreground">{car.capacity}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                        <Clock className="w-3 h-3 md:w-5 md:h-5 text-accent" />
                        <span className="text-[8px] sm:text-xs text-muted-foreground">{car.transmission}</span>
                    </div>

                    {car.fuel && (
                        <div className="flex flex-col items-center gap-1 sm:gap-2">
                            <Fuel className="w-3 h-3 md:w-5 md:h-5 text-accent" />
                            <span className="text-[8px] sm:text-xs text-muted-foreground">{car.fuel}</span>
                        </div>
                    )}
                </div>

                <Button 
                    variant="accent"
                    className="w-full text-sm sm:text-base py-4 sm:py-6"
                    onClick={() => handleBooking(car.name)}
                >
                    Book Now
                </Button>
            </div>
        </Card>
    );
}