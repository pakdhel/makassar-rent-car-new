"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Fuel } from "lucide-react";


export default function CarCard({ car, handleBooking, style }) {
    return (
        <Card
            key={car.id}
            className="card-premium p-0 overflow-hidden group cursor-pointer scale-in"
            style={style}
        >
            {/* --- Bagian Gambar & Info Atas --- */}
            <div className="relative overflow-hidden">
                <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Price Tag (Kanan Atas) */}
                <div className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {car.price}/day
                </div>
                
                {/* Category Tag (Kiri Atas) */}
                {car.category && (
                    <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-xs font-medium shadow-md">
                        {car.category}
                    </div>
                )}
            </div>
            
            {/* --- Bagian Detail & Aksi --- */}
            <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">
                    {car.name}
                </h3>
                
                {/* Ikon Detail (Kapasitas, Transmisi, Bahan Bakar) */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                    
                    {/* 1. Kapasitas */}
                    <div className="flex flex-col items-center gap-2">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-xs text-muted-foreground">{car.capacity}</span>
                    </div>
                    
                    {/* 2. Transmisi */}
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-5 h-5 text-accent" />
                        <span className="text-xs text-muted-foreground">{car.transmission}</span>
                    </div>
                    
                    {/* 3. Bahan Bakar */}
                    {car.fuel && (
                        <div className="flex flex-col items-center gap-2">
                            <Fuel className="w-5 h-5 text-accent" />
                            <span className="text-xs text-muted-foreground">{car.fuel}</span>
                        </div>
                    )}
                </div>
                
                {/* Tombol Booking */}
                <Button 
                    variant="accent" 
                    className="w-full"
                    onClick={() => handleBooking(car.name)}
                >
                    Book Now
                </Button>
            </div>
        </Card>
    );
}