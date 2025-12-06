"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CallToAction() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    
    return(
        <section className="section-spacing">
        <div className="container-premium fade-in">
          <Card className="card-premium p-12 md:p-16 text-center space-y-6 bg-linear-to-br from-primary to-secondary text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Book your car now and experience premium car rental service in Makassar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => setIsBookingOpen(true)}
              >
                Book via WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-primary-foreground text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>        
    )
}