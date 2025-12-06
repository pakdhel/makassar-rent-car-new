import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    const values = [
        {
          icon: Shield,
          title: "Trust & Safety",
          description: "All our vehicles are fully insured and regularly maintained to ensure your safety",
        },
        {
          icon: Award,
          title: "Professional Service",
          description: "Our experienced team is committed to providing the best service for every customer",
        },
        {
          icon: Users,
          title: "Customer Focused",
          description: "Your satisfaction is our priority. We listen and adapt to your needs",
        },
        {
          icon: Clock,
          title: "24/7 Support",
          description: "We're always ready to assist you anytime, anywhere in Makassar",
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="min-h-screen pt-32 pb-20">
            <div className="container-premium">
                {/* Header */}
                <div className="text-center mb-16 space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold">
                    About <span className="text-accent">MakassarRent</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Your trusted partner for premium car rental services in Makassar
                </p>
                </div>
        
                {/* Story Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-4xl font-bold">Our Story</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        MakassarRent was founded with a simple mission: to provide the best car rental experience 
                        in Makassar. We understand that transportation is crucial for your business, vacation, 
                        or special events.
                    </p>
                    <p>
                        With years of experience in the car rental industry, we've built a reputation for 
                        reliability, professionalism, and customer satisfaction. Our fleet consists of 
                        well-maintained vehicles ranging from economy cars to luxury SUVs.
                    </p>
                    <p>
                        We're proud to have served thousands of satisfied customers, from local residents 
                        to tourists exploring the beautiful city of Makassar and South Sulawesi.
                    </p>
                    </div>
                </div>
                <div className="relative animate-scale-in">
                    <img
                    src="/placeholder.svg"
                    alt="About MakassarRent"
                    className="rounded-3xl shadow-premium-lg w-full"
                    />
                </div>
                </div>
        
                {/* Values */}
                <div className="mb-24">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Values</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    The principles that guide everything we do
                    </p>
                </div>
        
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                    <Card 
                        key={index}
                        className="card-premium p-8 text-center space-y-4 animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="inline-flex p-4 bg-accent/10 rounded-2xl">
                        <value.icon className="w-8 h-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                        </p>
                    </Card>
                    ))}
                </div>
                </div>
        
                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-8 bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-primary-foreground">
                <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">500+</div>
                    <div className="text-primary-foreground/80">Happy Customers</div>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">50+</div>
                    <div className="text-primary-foreground/80">Quality Vehicles</div>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">5+</div>
                    <div className="text-primary-foreground/80">Years Experience</div>
                </div>
                <div className="text-center space-y-2">
                    <div className="text-5xl font-bold">4.9</div>
                    <div className="text-primary-foreground/80">Average Rating</div>
                </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
      );
}