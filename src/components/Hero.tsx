import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(140, 96, 86, 0.3), rgba(140, 96, 86, 0.4)), url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-cream-50 mb-6 leading-tight">
            Just One Hour from Yosemite
          </h1>
          <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-cream-100 mb-8 font-light">
            Six Generations of Welcome
          </h2>
          <p className="text-lg md:text-xl text-cream-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Since 1853, Priest Station has been a beacon for travelers, families, and explorers on Highway 120. 
            Experience authentic Sierra Nevada hospitality where history meets comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-redwood-500 hover:bg-redwood-600 text-cream-50 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-redwood-700 px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('cabins')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Stay With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="h-6 w-6 text-cream-200 cursor-pointer" 
          onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
};

export default Hero;