"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import BookingModal from "./BookingModal";

export default function HeroSection() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return(
        <>
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
                <div className="absolute inset-0" />
                <div className="container-premium relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in">
                    <div className="inline-block">
                        <span className="text-sm font-semibold text-accent px-4 py-2 bg-accent/10 rounded-full">
                        #1 Car Rental in Makassar
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                        Premium Car Rental
                        <span className="block text-accent mt-2">Makassar</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                        Experience the best car rental service in Makassar. Professional, trusted, and ready to serve your transportation needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button 
                        variant="hero" 
                        size="xl"
                        onClick={() => setIsBookingOpen(true)}
                        >
                        Book Now
                        </Button>
                        <Button variant="outline" size="xl" asChild>
                        <Link href="/cars">View Cars</Link>
                        </Button>
                    </div>
                    <div className="flex items-center gap-8 pt-4">
                        <div>
                        <div className="text-3xl font-bold text-primary">500+</div>
                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div>
                        <div className="text-3xl font-bold text-primary">50+</div>
                        <div className="text-sm text-muted-foreground">Quality Cars</div>
                        </div>
                        <div className="w-px h-12 bg-border" />
                        <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-3xl font-bold text-primary">4.9</span>
                        <span className="text-sm text-muted-foreground ml-1">Rating</span>
                        </div>
                    </div>
                    </div>
                    <div className="relative animate-scale-in hidden md:block">
                    <div className="absolute inset-0 bg-linear-to-tr from-accent/20 to-transparent rounded-3xl" />
                    <img
                        src="/placeholder.svg"
                        alt="Premium Car"
                        className="relative z-10 w-full h-auto rounded-3xl shadow-premium-lg"
                    />
                    </div>
                </div>
                </div>
            </section>
            <BookingModal 
                isOpen={isBookingOpen}
                onClose={() => setIsBookingOpen(false)}
            />
        </>
    );
}