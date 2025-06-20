import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BedDouble, Users, Bath, Star } from 'lucide-react';

const Cabins = () => {
  return (
    <section id="cabins" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            The Getaway Ranch House
          </h2>
          <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Your ultimate basecamp for Yosemite adventures. A luxury villa born from our family's 175-year legacy, perfect for families and groups.
          </p>
        </div>

        {/* Featured Ranch House */}
        <Card className="bg-white overflow-hidden shadow-xl mb-16 transition-shadow duration-300 md:flex">
          <div
            className="md:w-1/2 h-64 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url('https://i.ibb.co/xSzTVfCS/image.png')` }}
          ></div>
          <div className="md:w-1/2 flex flex-col">
            <CardHeader>
              <p className="text-sm font-semibold text-redwood-500 uppercase tracking-wider">New & Featured</p>
              <CardTitle className="font-playfair text-3xl text-redwood-800 mt-1">
                The Getaway Ranch House
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-redwood-600 mb-6 leading-relaxed">
                Born from our family's 175-year legacy, this luxury villa is a stunning blend of multicultural architecture, just 50 minutes from El Capitan. Unwind by the pool, greet the ranch cows, or visit the famed Priest Station Cafe below.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6 text-redwood-700">
                <div className="flex items-center"><Users className="mr-2 h-5 w-5 text-sage-600" /> 12 Guests</div>
                <div className="flex items-center"><BedDouble className="mr-2 h-5 w-5 text-sage-600" /> 4 Bedrooms</div>
                <div className="flex items-center"><Bath className="mr-2 h-5 w-5 text-sage-600" /> 3 Baths</div>
                <div className="flex items-center"><Star className="mr-2 h-5 w-5 text-yellow-500 fill-yellow-500" /> Private Pool</div>
              </div>
              <div className="mt-auto">
                <Button 
                  className="w-full bg-redwood-500 hover:bg-redwood-600 text-cream-50"
                  onClick={() => window.open('https://www.airbnb.com/rooms/1440729642146541991?source_impression_id=p3_1750402555_P30WJpT1GjFZkShU', '_blank')}
                >
                  Book on Airbnb
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Cabins;