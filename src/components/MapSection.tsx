
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation } from "lucide-react";

// Mock data for charging stations
const mockStations = [
  {
    id: 1,
    name: "Downtown EV Hub",
    address: "123 Main St, City Center",
    available: 3,
    total: 4,
    type: "DC Fast Charger"
  },
  {
    id: 2,
    name: "Greenfield Shopping Mall",
    address: "456 Commerce Blvd, Greenfield",
    available: 1,
    total: 6,
    type: "Level 2 Charger"
  },
  {
    id: 3,
    name: "Westside Community Center",
    address: "789 Park Ave, Westside",
    available: 2,
    total: 2,
    type: "DC Fast Charger"
  }
];

const MapSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <section className="section bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smg-blue">
            Find Charging Stations Near You
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Locate SMG charging stations nationwide through our interactive map.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="lg:w-1/3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Search location..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="space-y-3 h-[350px] overflow-y-auto pr-2 border-r border-gray-100">
              {mockStations.map((station) => (
                <div 
                  key={station.id}
                  className="bg-white border rounded-lg p-3 hover:border-smg-blue hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm md:text-base">{station.name}</h3>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">{station.address}</p>
                      <p className="text-xs text-gray-400 mt-1">{station.type}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                        {station.available}/{station.total} Available
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 p-1">
                      <MapPin className="h-3 w-3" />
                      View on map
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1 p-1">
                      <Navigation className="h-3 w-3" />
                      Get directions
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 h-[400px] rounded-xl overflow-hidden relative bg-gray-100 border border-gray-200">
            {/* For demo purposes, showing a placeholder map */}
            <div className="absolute inset-0 bg-smg-blue-light/10 geo-pattern"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-3 text-center p-6">
              <MapPin className="h-10 w-10 text-smg-blue" />
              <h3 className="text-lg font-semibold">Interactive Map</h3>
              <p className="text-sm text-gray-600 max-w-md">
                In a production environment, this would be an interactive map showing all SMG charging stations.
                You could zoom, search, and click stations to see details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;