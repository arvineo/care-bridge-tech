
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">CareSanctum</h3>
            <p className="text-gray-300 text-sm">
              Empowering seniors with technology-driven care solutions for a better quality of life.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/tech" className="hover:text-white">Technology</a></li>
              <li><a href="/services" className="hover:text-white">Care Services</a></li>
              <li><a href="/plans" className="hover:text-white">Plans</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700" />
        
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>&copy; 2025 CareSanctum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
