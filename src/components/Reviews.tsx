import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviewData = [
  {
    name: 'Johnathan Davies',
    source: 'Google',
    rating: 5,
    text: "Cute and quaint, Priest Station Cafe is a welcome site after a drive from the Bay. We both had burgers, their specialty. The neighboring table ordered the salad and I was envious. Enough salad to easily be shared, looked fresh and delicious. Generous mug of coffee with refills. Friendly staff.",
  },
  {
    name: 'Lauren Fleming',
    source: 'Google',
    rating: 5,
    text: "The food here was amazing and came out quick! The patio view is gorgeous! Laurie was our server, she was so sweet and kind! Definitely a great dining experience and hope we can visit again soon!",
  },
  {
    name: 'Emily T.',
    source: 'Google',
    rating: 5,
    text: 'Stayed at the Getaway Ranch House and it was the perfect base for our Yosemite trip. The house is stunning and spacious. Having the cafe just down the road was a huge plus. Highly recommend!',
  },
  {
    name: 'Christine Alvarez',
    source: 'Yelp',
    rating: 4,
    text: 'Talk about service with a smile! This spot is a true gem! The staff was friendly and kind. The food was amazing. The portions were great. Everything tasted homemade.',
  },
  {
    name: 'Kirstin Johnson',
    source: 'Google',
    rating: 5,
    text: 'Iconic locale with fresh toppings for brisket, burgers, portobello etc. loved the peppercorn sauce and the Peace Roses. Perfect pit stop and lovely weather for the outdoor seating. Inside seating is a very limited small space. Bathrooms are in adjacent building clean and basic.',
  },
  {
    name: 'William G.',
    source: 'Yelp',
    rating: 5,
    text: 'We recently stopped on our way to Yosemite. I have always been intrigued by the location but did not know what to expect. This place is awesome, the menu is diverse, the burgers and home made chips are awesome.the staff is friendly and helpful. The view from the outdoor deck is nice. It is our new must stop cafe.',
  },
];

// Combine the reviews with themselves to create a seamless loop
const marqueeReviews = [...reviewData, ...reviewData];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-sage-50 to-sage-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6"
          >
            From Our Guests
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed"
          >
            Hear what fellow travelers and locals are saying about their experience at Priest Station.
          </motion.p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-sage-100 via-transparent to-sage-100" />
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeReviews.map((review, index) => (
              <div key={index} className="w-[380px] flex-shrink-0 px-4">
                <Card className="h-full flex flex-col bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 border-redwood-100/50">
                  <CardContent className="p-8 flex flex-col flex-grow">
                    <Quote className="w-8 h-8 text-redwood-300 mb-4" />
                    <p className="text-redwood-700 italic leading-relaxed flex-grow mb-6">
                      "{review.text}"
                    </p>
                    <div className="border-t border-redwood-100 pt-6 mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-playfair font-bold text-lg text-redwood-800">{review.name}</p>
                          <p className="text-sm text-redwood-500">via {review.source}</p>
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-yellow-300/70'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;