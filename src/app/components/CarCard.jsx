"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Fuel, Cog } from "lucide-react";
import Image from "next/image";


export default function CarCard({ car, handleBooking, style }) {
    return (
        
        <Card
            key={car.id}
            className="card-premium p-0 overflow-hidden group scale-in"
            style={style}
            >
            <div className="grid grid-cols-[40%_60%] md:grid-cols-1 items-center">
                
                {/* LEFT: IMAGE */}
                <div className="relative overflow-hidden h-28 sm:h-32 md:h-48">
                <Image
                    src={car.image}
                    alt={car.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />

                {car.category && (
                    <div className="absolute top-2 left-2 bg-card px-2 py-1 rounded-full text-[10px] font-medium shadow-md">
                    {car.category}
                    </div>
                )}
                </div>

                {/* RIGHT: DETAILS */}
                <div className="p-3 sm:p-4 md:p-6 space-y-2 md:space-y-3 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-base md:text-2xl font-semibold md:font-black group-hover:text-accent transition-colors leading-tight">
                    {car.name}
                    </h3>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3 py-2 md:py-4 border-border">
                    <div className="flex flex-col items-center gap-1">
                        <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        <span className="text-sm md:text-base text-muted-foreground">
                        {car.capacity}
                        </span>
                    </div>

                    <div className="flex flex-col items-center gap-1">
                        <Cog className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        <span className="text-sm md:text-base text-muted-foreground">
                        {car.transmission}
                        </span>
                    </div>

                    {car.fuel && (
                        <div className="flex flex-col items-center gap-1">
                        <Fuel className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                        <span className="text-sm md:text-base text-muted-foreground">
                            {car.fuel}
                        </span>
                        </div>
                    )}
                    </div>
                </div>

                <Button
                    variant="accent"
                    className="w-full text-sm md:text-base"
                    onClick={() => handleBooking(car.name)}
                >
                    Book Now
                </Button>
                </div>

            </div>
        </Card>


    );
}