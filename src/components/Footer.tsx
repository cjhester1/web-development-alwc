import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Church Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">AL</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl">Abundant Life Worship</span>
                  <span className="text-primary-foreground/80 text-sm">Transforming Lives Through Faith</span>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 mb-6 leading-relaxed max-w-md">
                We are a community of believers committed to growing in faith, 
                serving others, and experiencing God's abundant life together.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/90">123 Faith Street</p>
                    <p className="text-primary-foreground/90">Hope City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-primary-foreground/90 hover:text-accent transition-smooth"
                  >
                    (123) 456-7890
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                  <a 
                    href="mailto:info@abundantlifeworship.org" 
                    className="text-primary-foreground/90 hover:text-accent transition-smooth"
                  >
                    info@abundantlifeworship.org
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/about" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/connect" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    How to Connect
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/ministries" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    Ministries
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/events" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resources" 
                    className="text-primary-foreground/80 hover:text-accent transition-smooth block"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Times & Social */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Connect With Us</h4>
              
              {/* Service Times */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="font-medium">Service Times</span>
                </div>
                <div className="text-primary-foreground/80 space-y-1 ml-7">
                  <p>Sunday: 10:00 AM</p>
                  <p>Wednesday: 7:00 PM</p>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h5 className="font-medium mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground"
                  >
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 Abundant Life Worship. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-primary-foreground/70 hover:text-accent transition-smooth"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-primary-foreground/70 hover:text-accent transition-smooth"
              >
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