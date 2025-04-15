import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface NavigationProps {
  logoPath?: string;
  children?: React.ReactNode;
  className?: string;
}

const Navigation = ({ logoPath, children, className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm ${className || ''}`}>
      <div className="container mx-auto flex justify-between items-center py-2 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            {logoPath ? (
              <div className="flex items-center">
                <img src={logoPath} alt="SMG Logo" className="h-12 w-auto" />
                <span className="ml-2 text-2xl font-bold text-smg-blue">SMG</span>
              </div>
            ) : (
              <>
                <span className="text-2xl font-bold text-smg-blue">SMG</span>
                <span className="ml-2 text-lg">Charge Grid</span>
              </>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-6">
              <NavigationMenuItem>
                <Link to="/" className="font-medium hover:text-smg-blue">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium hover:text-smg-blue">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-4 w-[500px]">
                    <div>
                      <h3 className="font-medium mb-3 text-lg">Hardware</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/products" className="block text-sm hover:text-smg-blue">
                            All Chargers
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/residential" className="block text-sm hover:text-smg-blue">
                            Residential Chargers
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/commercial" className="block text-sm hover:text-smg-blue">
                            Commercial Stations
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3 text-lg">Software</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Link to="/products/management" className="block text-sm hover:text-smg-blue">
                            Charge Management
                          </Link>
                          <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">COMING SOON</span>
                        </li>
                        <li>
                          <Link to="/products/app" className="block text-sm hover:text-smg-blue">
                            SMG Charge App
                          </Link>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3 text-lg">Services</h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/services/energy" className="block text-sm hover:text-smg-blue">
                            Energy As A Service (EaaS)
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <Link to="/services/battery" className="block text-sm hover:text-smg-blue">
                            Battery As A Service (BaaS)
                          </Link>
                          <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">COMING SOON</span>
                        </li>
                        <li>
                          <Link to="/services/rfid" className="block text-sm hover:text-smg-blue">
                            RFID Card
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/solutions" className="font-medium hover:text-smg-blue">
                  Solutions
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="font-medium hover:text-smg-blue">
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="font-medium hover:text-smg-blue">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3 ml-4">
          <Button variant="outline" className="flex items-center gap-2 px-4">
            <MapPin className="h-4 w-4" />
            Find Stations
          </Button>
          <Button className="bg-smg-blue hover:bg-smg-blue/90 px-4">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t py-4">
          <div className="container mx-auto flex flex-col gap-4 px-6">
            <Link to="/" className="font-medium py-2" onClick={toggleMenu}>Home</Link>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button 
                className="font-medium py-2 w-full text-left flex items-center justify-between"
                onClick={(e) => {
                  const submenu = document.getElementById("mobile-products-menu");
                  if (submenu) {
                    submenu.classList.toggle("hidden");
                  }
                }}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <div id="mobile-products-menu" className="hidden pl-4 border-l border-gray-200 mt-1">
                <div className="mb-3">
                  <h4 className="font-medium text-sm text-gray-600 mb-1">Hardware</h4>
                  <Link to="/products" className="block text-sm py-1" onClick={toggleMenu}>All Chargers</Link>
                  <Link to="/products/residential" className="block text-sm py-1" onClick={toggleMenu}>Residential Chargers</Link>
                  <Link to="/products/commercial" className="block text-sm py-1" onClick={toggleMenu}>Commercial Stations</Link>
                </div>
                
                <div className="mb-3">
                  <h4 className="font-medium text-sm text-gray-600 mb-1">Software</h4>
                  <div className="flex items-center">
                    <Link to="/products/management" className="block text-sm py-1" onClick={toggleMenu}>Charge Management</Link>
                    <span className="ml-2 text-xs bg-gray-100 px-1 py-0.5 rounded text-gray-600">COMING SOON</span>
                  </div>
                  <Link to="/products/app" className="block text-sm py-1" onClick={toggleMenu}>SMG Charge App</Link>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm text-gray-600 mb-1">Services</h4>
                  <Link to="/services/energy" className="block text-sm py-1" onClick={toggleMenu}>Energy As A Service (EaaS)</Link>
                  <div className="flex items-center">
                    <Link to="/services/battery" className="block text-sm py-1" onClick={toggleMenu}>Battery As A Service (BaaS)</Link>
                    <span className="ml-2 text-xs bg-gray-100 px-1 py-0.5 rounded text-gray-600">COMING SOON</span>
                  </div>
                  <Link to="/services/rfid" className="block text-sm py-1" onClick={toggleMenu}>RFID Card</Link>
                </div>
              </div>
            </div>
            
            <Link to="/solutions" className="font-medium py-2" onClick={toggleMenu}>Solutions</Link>
            <Link to="/about" className="font-medium py-2" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="font-medium py-2" onClick={toggleMenu}>Contact</Link>
            
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="flex items-center justify-center gap-2 w-full px-4">
                <MapPin className="h-4 w-4" />
                Find Stations
              </Button>
              <Button className="bg-smg-blue hover:bg-smg-blue/90 w-full px-4">
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      )}
      
      {children}
    </header>
  );
};

export default Navigation;