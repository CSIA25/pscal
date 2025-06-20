import React from 'react';
import { MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-redwood-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-6 w-6 text-cream-200" />
              <div className="flex flex-col">
                <span className="font-playfair font-bold text-xl text-cream-50">
                  Priest Station
                </span>
                <span className="text-sm text-cream-200 -mt-1">
                  Since 1853
                </span>
              </div>
            </div>
            <p className="text-cream-200 leading-relaxed">
              Six generations of Sierra Nevada hospitality, welcoming travelers 
              on their journey to Yosemite and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-cream-50 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#menu" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Menu
              </a>
              <a href="#story" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Our Story
              </a>
              <a href="#reviews" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Guest Reviews
              </a>
              <a href="#cabins" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Cabin Stays
              </a>
              <a href="#yosemite" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Explore Yosemite
              </a>
              <a href="#contact" className="block text-cream-200 hover:text-cream-50 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-bold text-cream-50 mb-4">
              Visit Us
            </h3>
            <div className="space-y-2 text-cream-200">
              <p>16756 Old Priest Grade<br />Big Oak Flat, CA 95305</p>
              <p>(209) 962-7825</p>
              <p>info@prieststation.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-redwood-700 mt-8 pt-8 text-center">
          <p className="text-cream-200">
            © 2025 Priest Station Cafe. All rights reserved. | A family legacy since 1853
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;