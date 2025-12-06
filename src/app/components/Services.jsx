import { Card } from "@/components/ui/card";
import {
    Users,
    Key,
    Heart,
    Plane
  } from "lucide-react";

export default function Services() {
    const services = [
        {
          icon: Key,
          title: "Self Drive",
          description: "Drive yourself with complete freedom and flexibility",
        },
        {
          icon: Users,
          title: "With Driver",
          description: "Relax while our professional driver takes you anywhere",
        },
        {
          icon: Heart,
          title: "Wedding Car",
          description: "Elegant wedding cars for your special day",
        },
        {
          icon: Plane,
          title: "Airport Pickup",
          description: "Convenient airport transfer service 24/7",
        },
    ];

    return(
        <section className="section-spacing bg-muted/30">
        <div className="container-premium fade-in">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible rental options to suit your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="card-premium p-8 text-center space-y-4 hover:border-accent hover:border-2 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-primary/5 rounded-2xl">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
}