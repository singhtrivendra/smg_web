import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";
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
}

const Navigation = ({ logoPath }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-2 px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            {logoPath ? (
              <div className="flex items-center">
                <img src={logoPath} alt="SMG Logo" className="h-14 w-auto" />
                <span className="ml-2 text-2xl font-bold text-smg-blue"></span>
              </div>
            ) : (
              <>
                <span className="text-2xl font-bold text-smg-blue">SMG</span>
                <span className="ml-2 text-lg">Charge Grid</span>
              </>
            )}
          </Link>
        </div>

        {/* Desktop Navigation using Radix UI */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="font-medium hover:text-smg-blue px-4 py-2 block">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-48">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/products" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">All Products</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/products/residential" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Residential Chargers</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link to="/products/commercial" className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium">Commercial Stations</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/solutions" className="font-medium hover:text-smg-blue px-4 py-2 block">
                  Solutions
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/about" className="font-medium hover:text-smg-blue px-4 py-2 block">
                  About Us
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/contact" className="font-medium hover:text-smg-blue px-4 py-2 block">
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
            
            {/* Mobile Products Submenu */}
            <div className="flex flex-col">
              <button 
                className="font-medium py-2 text-left flex items-center justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  const submenu = e.currentTarget.nextElementSibling;
                  if (submenu) {
                    submenu.classList.toggle('hidden');
                  }
                }}
              >
                Products
                <svg 
                  className="h-4 w-4 transform transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="hidden pl-4 border-l border-gray-200 mt-1">
                <Link to="/products" className="block py-2" onClick={toggleMenu}>All Products</Link>
                <Link to="/products/residential" className="block py-2" onClick={toggleMenu}>Residential Chargers</Link>
                <Link to="/products/commercial" className="block py-2" onClick={toggleMenu}>Commercial Stations</Link>
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
    </header>
  );
};

export default Navigation;