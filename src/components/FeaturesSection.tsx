import React from "react";
import { Zap, Shield, Smartphone, Clock, Leaf, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-white" />,
    title: "Rapid Charging",
    description: "Our stations deliver up to 150kW DC fast charging for quick top-ups on the go."
  },
  {
    icon: <Shield className="h-8 w-8 text-white" />,
    title: "Safety First",
    description: "Built with advanced safety features, meeting the highest industry standards."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-white" />,
    title: "Smart Connectivity",
    description: "Control and monitor your charging session remotely via our intuitive app."
  },
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    title: "24/7 Availability",
    description: "Access our charging network anytime, with real-time status updates."
  },
  {
    icon: <Leaf className="h-8 w-8 text-white" />,
    title: "Eco-Friendly",
    description: "Renewable energy integration with our charging infrastructure."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-white" />,
    title: "Reliability",
    description: "99% uptime guarantee with predictive maintenance technology."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 relative bg-gradient-to-b from-smg-blue/10 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-smg-blue-light/10 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-smg-blue-light/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="h-1 w-10 bg-smg-blue rounded-full mr-2"></span>
            <span className="uppercase text-sm font-medium tracking-wider text-smg-blue">Features</span>
            <span className="h-1 w-10 bg-smg-blue rounded-full ml-2"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smg-blue">
            Smart Charging Features
          </h2>
          <p className="text-gray-600">
            Designed with your convenience, safety, and efficiency in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "relative overflow-hidden group rounded-xl",
                "transition-all duration-300 hover:shadow-xl",
                "flex flex-col h-full bg-white shadow-md"
              )}
            >
              <div className="flex items-start p-6">
                <div className="bg-smg-blue p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-smg-blue">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-smg-blue to-smg-blue-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
