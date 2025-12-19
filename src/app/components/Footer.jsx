import Link from "next/link";
import { Car, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return(
        <footer className="bg-primary text-primary-foreground">
            <div className="container-premium py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                    <div className="p-2 bg-accent rounded-xl">
                        <Car className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold">
                        Makassar<span className="text-accent">Rent</span>
                    </span>
                    </div>
                    <p className="text-sm text-primary-foreground/80 leading-relaxed">
                    Premium car rental service in Makassar. Trusted, professional, and ready to serve your transportation needs.
                    </p>
                    <div className="flex gap-4">
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-3">
                    <li>
                        <Link href="/cars" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                        Car Fleet
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonials" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                        Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                        Contact
                        </Link>
                    </li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Our Services</h3>
                    <ul className="space-y-3">
                    <li className="text-sm text-primary-foreground/80">Self Drive Rental</li>
                    <li className="text-sm text-primary-foreground/80">With Driver</li>
                    <li className="text-sm text-primary-foreground/80">Wedding Car</li>
                    <li className="text-sm text-primary-foreground/80">Airport Transfer</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-primary-foreground/80">Jl. Poros Bandara Baru, Baji Mangngai, Kec. Mandai, Kabupaten Maros, Sulawesi Selatan 90552</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm text-primary-foreground/80">08979698378</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-accent shrink-0" />
                        <span className="text-sm text-primary-foreground/80">syahrulchalu123@gmail.com</span>
                    </li>
                    </ul>
                </div>
                </div>

                <div className="mt-12 pt-8 border-t border-primary-foreground/10">
                <p className="text-center text-sm text-primary-foreground/70">
                    © {new Date().getFullYear()} MakassarRent. All rights reserved. | Premium Car Rental Makassar
                </p>
                </div>
            </div>
        </footer>
    );
}