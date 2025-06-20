import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: 'Location',
      content: '16756 Old Priest Grade\nBig Oak Flat, CA 95305',
      icon: '📍'
    },
    {
      title: 'Phone',
      content: '(209) 962-7825',
      icon: '📞'
    },
    {
      title: 'Email',
      content: 'info@prieststation.com',
      icon: '📧'
    }
  ];

  const hours = [
    { day: 'Breakfast', time: '8:00 AM - 11:00 AM' },
    { day: 'Lunch & Dinner', time: '11:00 AM - 8:00 PM' },
  ];

  return (
    <section id="contact" className="py-20 bg-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Find us on Highway 120, where the Sierra Nevada mountains meet warm hospitality. 
            We're here to make your journey memorable.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <div className="grid gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <span className="text-2xl mr-4">{info.icon}</span>
                      <div>
                        <h3 className="font-playfair text-xl font-bold text-redwood-800 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-redwood-600 whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hours */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-redwood-800 flex items-center">
                  <span className="text-2xl mr-3">⏰</span>
                  Hours of Operation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-redwood-700 font-medium">
                        {schedule.day}
                      </span>
                      <span className="text-redwood-600">
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-sage-200">
                  <p className="text-sm text-redwood-500 italic">
                    Hours are subject to change. Please call ahead to confirm.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map Embed */}
          <div className="flex flex-col gap-4">
            <Card className="bg-white shadow-lg overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.834166258079!2d-120.2752064!3d37.8138369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090d65b511ae74f%3A0x1c667141a95e167f!2sPriest%20Station%20Caf%C3%A9!5e0!3m2!1sen!2sus!4v1714500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[450px] lg:min-h-full"
                title="Google Map of Priest Station Cafe"
              ></iframe>
            </Card>
            <Button
              className="w-full bg-redwood-500 hover:bg-redwood-600 text-cream-50"
              onClick={() => {
                window.open('https://www.google.com/maps/place/Priest+Station+Caf%C3%A9/@37.8138369,-120.2752064,17z/data=!3m1!4b1!4m6!3m5!1s0x8090d65b511ae74f:0x1c667141a95e167f!8m2!3d37.8138369!4d-120.2726315!16s%2Fg%2F1thcslb3?entry=ttu', '_blank');
              }}
            >
              Get Directions on Google Maps
            </Button>
          </div>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="mt-16">
          <h3 className="font-playfair text-3xl font-bold text-redwood-800 text-center mb-12">
            Stories from the Road
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((imageNumber) => (
              <a
                key={imageNumber}
                href="https://instagram.com/priest.station.cafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square block rounded-lg overflow-hidden group shadow-lg"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('/${imageNumber}.jpg')` }}
                />
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              onClick={() => {
                window.open('https://instagram.com/priest.station.cafe/', '_blank');
              }}
            >
              Follow @priest.station.cafe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;