import { Button } from "@/components/ui/button";
import { ArrowRight, BatteryCharging } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-smg-blue-light/10 to-white -z-10 geo-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh] pt-8 md:pt-0">
          <div className="w-full md:w-1/2 space-y-5 md:pr-8">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="bg-smg-blue/10 text-smg-blue px-3 py-1 rounded-full text-sm font-medium">
                Sustainable Energy Solutions
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-smg-blue animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            Smart Charging for a Smarter EV Era                </h1>
            
            <p className="text-base md:text-lg text-gray-600 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
              SMG Charge Grid provides cutting-edge charging infrastructure solutions for a sustainable world. Join us in the electric revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-0.5 animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
              <Button className="bg-smg-blue hover:bg-smg-blue/90 text-white px-6 py-5 flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-6 py-5 flex items-center gap-2">
                View Solutions
              </Button>
            </div>
            
            <div className="pt-6 grid grid-cols-3 gap-4 md:gap-8 border-t mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.9s' }}>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-smg-blue">500+</h3>
                <p className="text-gray-600 text-xs md:text-sm">Stations Deployed</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-smg-blue">24/7</h3>
                <p className="text-gray-600 text-xs md:text-sm">Customer Support</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-smg-blue">99%</h3>
                <p className="text-gray-600 text-xs md:text-sm">Uptime Guarantee</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-smg-blue-light to-smg-green rounded-2xl blur opacity-30 animate-pulse-slow"></div>
              <img 
                src="/images/8b0eb310-a3fb-4980-81b3-92bad948a93d.png" 
                alt="SMG Charge Grid Station" 
                className="relative rounded-2xl max-h-[500px] w-auto object-contain"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg">
                <BatteryCharging className="h-5 w-5 text-smg-green" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,154.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;