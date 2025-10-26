import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Bombay Bistro</h3>
            <p className="text-sm opacity-90 mb-4">
              Experience authentic Indian cuisine crafted with traditional recipes and
              the finest ingredients.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-accent transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-accent transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Spice Street, Food District, City 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@bombaybistro.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4 opacity-90">
              Subscribe to get special offers and updates
            </p>
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-card text-foreground"
              />
              <Button variant="default" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Bombay Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
