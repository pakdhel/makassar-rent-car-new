"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Car, Moon, Sun } from "lucide-react";
import { Switch } from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Cars", path: "/cars" },
        { name: "About", path: "/about" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact", path: "/contact" },
      ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-md">
          <div className="container-premium">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="p-2 bg-accent rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-primary">
                  Makassar<span className="text-accent">Rent</span>
                </span>
              </Link>
    
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50">
                  <Sun className="w-4 h-4 text-muted-foreground" />
                  <Switch
                    checked={theme === "dark"}
                    onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                  />
                  <Moon className="w-4 h-4 text-muted-foreground" />
                </div>
                <Button variant="accent" size="default">
                  Book Now
                </Button>
              </div>
    
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
    
            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden py-6 space-y-4 animate-fade-in">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm font-medium text-foreground">Dark Mode</span>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-muted-foreground" />
                    <Switch
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    <Moon className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
                <Button variant="accent" size="default" className="w-full">
                  Book Now
                </Button>
              </div>
            )}
          </div>
        </nav>
      );
}