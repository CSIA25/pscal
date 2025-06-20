import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Camera } from 'lucide-react';

const Yosemite = () => {
  const attractions = [
    {
      name: 'El Capitan',
      distance: '45 minutes',
      description: 'World-famous granite monolith and rock climbing destination',
      icon: '🏔️'
    },
    {
      name: 'Half Dome',
      distance: '1 hour',
      description: 'Iconic granite dome visible from Glacier Point',
      icon: '⛰️'
    },
    {
      name: 'Yosemite Falls',
      distance: '50 minutes',
      description: 'North America\'s tallest waterfall at 2,425 feet',
      icon: '💧'
    },
    {
      name: 'Mariposa Grove',
      distance: '1.5 hours',
      description: 'Ancient giant sequoia trees, some over 2,000 years old',
      icon: '🌲'
    },
    {
      name: 'Tuolumne Meadows',
      distance: '30 minutes',
      description: 'Alpine meadows and pristine wilderness (seasonal)',
      icon: '🌸'
    },
    {
      name: 'Hetch Hetchy',
      distance: '1 hour',
      description: 'Stunning reservoir and less crowded hiking trails',
      icon: '🏞️'
    }
  ];

  const tips = [
    'Stop for provisions and fuel - we\'re your last full-service stop before the park',
    'Check road conditions, especially Highway 120 in winter months',
    'Our locals know the best times to visit popular attractions',
    'Grab a trail lunch to go - perfect for your Yosemite adventure'
  ];

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1518991669955-4c73a84a6204?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Yosemite Valley with El Capitan and Bridalveil Fall',
      label: 'Yosemite Valley'
    },
    {
      src: 'https://images.unsplash.com/photo-1543599468-0752a1b1875c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Majestic Yosemite Falls',
      label: 'Waterfalls'
    },
    {
      src: 'https://images.unsplash.com/photo-1616012439542-7801b635359a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Giant Sequoia trees in Mariposa Grove',
      label: 'Giant Sequoias'
    },
    {
      src: 'https://images.unsplash.com/photo-1532983321943-8e4a95a41c24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Scenic drive on Tioga Road in Yosemite',
      label: 'High Country'
    }
  ];

  return (
    <section id="yosemite" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            Your Gateway to Yosemite
          </h2>
          <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Perfectly positioned on Highway 120, Priest Station is your ideal base camp 
            for exploring the wonders of Yosemite National Park.
          </p>
        </div>

        {/* Location Highlight */}
        <div className="bg-gradient-to-r from-sage-500 to-sage-600 rounded-2xl p-8 md:p-12 mb-16 text-center shadow-xl">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-cream-50 mr-3" />
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cream-50">
              Highway 120 - Big Oak Flat Road
            </h3>
          </div>
          <p className="text-cream-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Located at mile marker 15 on the historic Big Oak Flat Road, 
            we're your last chance for hearty food and comfortable lodging before entering Yosemite Valley.
          </p>
        </div>

        {/* Yosemite Photo Gallery */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-redwood-800 text-center mb-12">
            Inspiration for Your Adventure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.src})` }}
                  aria-label={image.alt}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="font-playfair text-xl font-bold text-cream-50">{image.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="mb-16">
          <h3 className="font-playfair text-3xl font-bold text-redwood-800 text-center mb-12">
            Yosemite Attractions from Priest Station
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((attraction, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{attraction.icon}</div>
                  <h4 className="font-playfair text-xl font-bold text-redwood-800 mb-2">
                    {attraction.name}
                  </h4>
                  <p className="text-redwood-500 font-semibold mb-3">
                    {attraction.distance}
                  </p>
                  <p className="text-redwood-600 text-sm leading-relaxed">
                    {attraction.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="bg-redwood-50 rounded-xl p-8">
          <h3 className="font-playfair text-3xl font-bold text-redwood-800 text-center mb-8">
            A Local's Advice For Your Trip
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start">
                <span className="bg-redwood-500 text-cream-50 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-redwood-700">
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yosemite;