import { Card } from "@/components/ui/card";
import { 
    Shield, 
    Car, 
    DollarSign,
    UserCheck
  } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
          icon: Shield,
          title: "Trusted & Professional",
          description: "Experienced team with professional service and complete insurance coverage",
        },
        {
          icon: Car,
          title: "Complete Fleet",
          description: "Various car options from economy to luxury to suit your needs",
        },
        {
          icon: DollarSign,
          title: "Transparent Pricing",
          description: "Clear pricing with no hidden fees, what you see is what you pay",
        },
        {
          icon: UserCheck,
          title: "Driver Available",
          description: "Professional drivers ready to take you anywhere in Makassar",
        },
    ];

    return(
        <section className="section-spacing">
        <div className="container-premium fade-in">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the best car rental experience in Makassar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="card-premium p-8 text-center space-y-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-2xl">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
}