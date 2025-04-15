import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-smg-blue text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold">SMG</span>
              <span className="ml-2 text-lg font-light">Charge Grid</span>
            </Link>
            <p className="text-sm text-white/80 mb-6">
              Leading the way in innovative EV charging solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services/installation" className="text-white/80 hover:text-white transition-colors">Installation</Link></li>
              <li><Link to="/services/maintenance" className="text-white/80 hover:text-white transition-colors">Maintenance</Link></li>
              <li><Link to="/services/support" className="text-white/80 hover:text-white transition-colors">Technical Support</Link></li>
              <li><Link to="/services/fleet" className="text-white/80 hover:text-white transition-colors">Fleet Solutions</Link></li>
              <li><Link to="/services/network" className="text-white/80 hover:text-white transition-colors">Charging Network</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
                <span className="text-white/80">
                  123 Energy Way, Electric City, EC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0" />
                <span className="text-white/80">info@smgchargegrid.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © {currentYear} SMG Charge Grid. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;