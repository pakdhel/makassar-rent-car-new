"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    const contactInfo = [
        {
          icon: Phone,
          title: "Phone",
          detail: "+62 812-3456-7890",
          link: "tel:+6281234567890",
        },
        {
          icon: MessageCircle,
          title: "WhatsApp",
          detail: "+62 812-3456-7890",
          link: "https://wa.me/6281234567890",
        },
        {
          icon: Mail,
          title: "Email",
          detail: "info@makassarrent.com",
          link: "mailto:info@makassarrent.com",
        },
        {
          icon: MapPin,
          title: "Address",
          detail: "Jl. Contoh No.123, Makassar, Sulawesi Selatan",
          link: "https://maps.google.com",
        },
    ];
    
    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
                <div className="container-premium fade-in">
                    {/* Header */}
                    <div className="text-center mb-16 space-y-4 animate-fade-in">
                        <h1 className="text-5xl md:text-6xl font-bold">
                        Get In <span className="text-accent">Touch</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have questions? We're here to help. Contact us through any channel below
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, index) => (
                        <Card 
                            key={index}
                            className="card-premium p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300 fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="inline-flex p-4 bg-accent/10 rounded-2xl">
                            <item.icon className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                            >
                            {item.detail}
                            </a>
                        </Card>
                        ))}
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Operating Hours */}
                        <Card className="card-premium p-8 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-accent/10 rounded-xl">
                            <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-2xl font-bold">Operating Hours</h2>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-border">
                            <span className="font-medium">Monday - Friday</span>
                            <span className="text-muted-foreground">08:00 - 20:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-border">
                            <span className="font-medium">Saturday</span>
                            <span className="text-muted-foreground">08:00 - 18:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-border">
                            <span className="font-medium">Sunday</span>
                            <span className="text-muted-foreground">09:00 - 17:00</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                            <span className="font-medium">Emergency Service</span>
                            <span className="text-accent font-semibold">24/7 Available</span>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Button 
                            variant="accent" 
                            size="lg" 
                            className="w-full"
                            onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                            >
                            <MessageCircle className="mr-2 w-5 h-5" />
                            Chat on WhatsApp
                            </Button>
                        </div>
                        </Card>

                        {/* Map */}
                        <Card className="card-premium p-0 overflow-hidden h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127056.08729654!2d119.3378!3d-5.1477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee329d96c4671%3A0x3030bfbcaf770b0!2sMakassar%2C%20Makassar%20City%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="MakassarRent Location"
                        />
                        </Card>
                    </div>

                    {/* FAQ Quick Links */}
                    <div className="mt-16 bg-muted/50 rounded-3xl p-12 text-center space-y-6">
                        <h2 className="text-3xl font-bold">Need Quick Answers?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Check out our most frequently asked questions or reach out directly via WhatsApp for instant support
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button 
                                variant="accent" 
                                size="lg"
                                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                            >
                                Quick Support via WhatsApp
                            </Button>
                            <Button variant="outline" size="lg">
                                Browse FAQ
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}