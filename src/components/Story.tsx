import React from 'react';

const Story = () => {
  const historyText = "Now in its sixth generation of family ownership, Priest Station has a long and interesting history. Originally a miner's supply store, it was purchased by Margaret & Alexander Kirkwood in 1853. A few years later, Alexander passed away and left Margaret a young widow. She received 36 marriage proposals and chose Wm. Priest, Yosemite's first Park Commissioner and an engineer responsible for the Big Oak Flat Road (now Hwy 120) as well as Tioga Pass. Under the Priest's ownership, the property became a stagecoach stop, and 22-building hotel complex known for its hospitality, accommodations and table.\n\nIn 1926, a fire destroyed everything except the well, which still stands today and is the only structure remaining from the 1800s. A few years after the 1926 fire, a new house was built for the next generation of family owners, gradually adding four cabins in the 1940s. This house stood near the roadside and had a front parlor where the public could be served. In 1969 the property was sold and run by various non-family owners who made changes to the property, including the conversion of one cabin into a restaurant after the 1920s front house burned down in the 1980s. Priest Station was re-acquired in 2007 by the Anker Family, the 4th, 5th and 6th generation descendants of the original Priest Family founders.";

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-cream-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
            Over 170 years of Sierra Nevada hospitality, from the California gold rush to today's 
            adventurers seeking the magic of Yosemite.
          </p>
        </div>

        {/* Quote */}
        <div className="bg-cream-100 rounded-2xl p-8 md:p-12 mb-16 shadow-lg">
          <blockquote className="text-center">
            <p className="font-playfair text-2xl md:text-3xl text-redwood-700 italic mb-6 leading-relaxed">
              "Mouthwateringly Great."
            </p>
            <cite className="text-redwood-500 font-medium">
              — The San Francisco Chronicle
            </cite>
          </blockquote>
        </div>

        {/* History */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-redwood-800 mb-4">
                A Brief History
              </h3>
              <p className="text-redwood-600 leading-relaxed whitespace-pre-line">
                {historyText}
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img 
              src="https://prieststation.com/wp-content/uploads/cabins-1940s-300x188.jpg"
              alt="Historic photo of Priest Station cabins in the 1940s"
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
            <p className="text-center text-sm text-redwood-500 mt-4 italic">
              1940s, after Joe Anker built four cabins. These cabins still stand today. The first (on the left) has been remodeled and enlarged, and is the current site of our restaurant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;