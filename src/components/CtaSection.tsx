
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Building, Home } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="section bg-gray-50 relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geo-pattern opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold text-smg-blue mb-4">
                  Ready to Join the Electric Revolution?
                </h2>
                <p className="text-gray-600 mb-6">
                  Whether you're a homeowner, business, or municipality, we have tailored solutions to meet your EV charging needs. Contact our team to learn more.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-smg-blue hover:bg-smg-blue/90 flex items-center gap-2">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
              <div className="md:w-2/5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-smg-blue-light/20 p-2 rounded">
                      <Home className="h-5 w-5 text-smg-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Residential Solutions</h3>
                      <p className="text-sm text-gray-500">
                        Home charging stations for everyday convenience
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-smg-blue-light/20 p-2 rounded">
                      <Building className="h-5 w-5 text-smg-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Solutions</h3>
                      <p className="text-sm text-gray-500">
                        Commercial charging for employees and customers
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-smg-blue-light/20 p-2 rounded">
                      <Lightbulb className="h-5 w-5 text-smg-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Custom Deployments</h3>
                      <p className="text-sm text-gray-500">
                        Tailored solutions for unique requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
