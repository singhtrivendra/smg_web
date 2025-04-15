
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "SMG FlexCharger",
    image: "/images/87cae673-4bec-4339-a4ca-c102ae4966c6.png",
    description: "Portable charging solution with smart connectivity and rapid charging capabilities.",
    features: ["Wall-mountable", "Smart connectivity", "7.4kW - 22kW", "Type 2 connector"]
  },
  {
    id: 2,
    name: "SMG PowerStation",
    image: "/images/8b0eb310-a3fb-4980-81b3-92bad948a93d.png",
    description: "Dual-port commercial charging station for businesses and public spaces.",
    features: ["Dual charging ports", "Up to 150kW", "Payment system", "LCD display"]
  }
];

const ProductsSection = () => {
  return (
    <section className="section bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-smg-blue">
            Our Charging Solutions
          </h2>
          <p className="text-gray-600">
            Discover our range of charging products designed for residential, commercial, and public settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card 
              key={product.id} 
              className="overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <div className="h-64 overflow-hidden bg-white flex items-center justify-center p-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="object-contain h-full w-auto max-w-full transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-6">
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-smg-blue mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-smg-blue hover:bg-smg-blue/90">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
