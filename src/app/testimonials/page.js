import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          name: "Budi Santoso",
          role: "Business Traveler",
          rating: 5,
          text: "Excellent service! The car was clean, well-maintained, and the booking process was super easy. Highly recommended for anyone visiting Makassar.",
          date: "2 weeks ago",
        },
        {
          id: 2,
          name: "Siti Rahmawati",
          role: "Wedding Customer",
          rating: 5,
          text: "We rented a wedding car for our special day. The car was beautiful and the driver was very professional. Thank you MakassarRent for making our day perfect!",
          date: "1 month ago",
        },
        {
          id: 3,
          name: "Ahmad Wijaya",
          role: "Tourist",
          rating: 5,
          text: "Great experience renting from MakassarRent. The self-drive option was perfect for our family vacation. The car was in excellent condition.",
          date: "3 weeks ago",
        }
      ];
    
      return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 fade-in">
                <h1 className="text-5xl md:text-6xl font-bold">
                    Customer <span className="text-accent">Reviews</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    See what our customers say about their experience with MakassarRent
                </p>
                </div>
        
                {/* Stats */}
                {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="card-premium p-8 text-center space-y-2 fade-in" style={{ animationDelay: '10ms' }}>
                    <div className="text-5xl font-bold text-accent">4.9</div>
                    <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                    </div>
                    <div className="text-muted-foreground">Average Rating</div>
                </Card>
        
                <Card className="card-premium p-8 text-center space-y-2 fade-in" style={{ animationDelay: '60ms' }}>
                    <div className="text-5xl font-bold text-accent">500+</div>
                    <div className="text-muted-foreground">Happy Customers</div>
                </Card>
        
                <Card className="card-premium p-8 text-center space-y-2 fade-in" style={{ animationDelay: '150ms' }}>
                    <div className="text-5xl font-bold text-accent">98%</div>
                    <div className="text-muted-foreground">Satisfaction Rate</div>
                </Card>
                </div> */}
        
                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card 
                    key={testimonial.id}
                    className="card-premium p-8 space-y-6 fade-in hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                    >
                    <div className="flex justify-between items-start">
                        <div className="p-3 bg-accent/10 rounded-xl">
                        <Quote className="w-6 h-6 text-accent" />
                        </div>
                        <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                        </div>
                    </div>
        
                    <p className="text-muted-foreground leading-relaxed">
                        "{testimonial.text}"
                    </p>
        
                    <div className="pt-4 border-t border-border">
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground mt-2">{testimonial.date}</div>
                    </div>
                    </Card>
                ))}
                </div>
        
                {/* CTA Section */}
                <div className="mt-20 text-center space-y-6 p-12 bg-linear-to-br from-primary to-secondary rounded-3xl text-primary-foreground">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Experience Our Service?
                </h2>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                    Join hundreds of satisfied customers and book your car rental today
                </p>
                </div>
            </div>
            </div>
            <Footer />
        </div>
      );
}