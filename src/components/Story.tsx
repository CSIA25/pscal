import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// --- CHAPTER DATA (No changes needed) ---
const storyChapters = [
  {
    year: "1853",
    title: "A Miner's Supply Store",
    text: "Originally a miner's supply store, Priest Station was purchased by Margaret & Alexander Kirkwood, becoming a crucial outpost during the California Gold Rush.",
    imageUrl: "https://images.unsplash.com/photo-1578593139775-971441c3c518"
  },
  {
    year: "1860s",
    title: "The Stagecoach Stop",
    text: "Following Alexander's passing, Margaret Priest transformed the property into a renowned 22-building hotel complex and stagecoach stop, famous for its hospitality.",
    imageUrl: "https://images.unsplash.com/photo-1576673195329-95e1bf281038"
  },
  {
    year: "1926",
    title: "Resilience Through Fire",
    text: "A devastating fire destroyed the complex, but the original well survived. The family rebuilt, adding four cabins in the 1940s—one of which is now our restaurant.",
    imageUrl: "https://images.unsplash.com/photo-1575997759612-45b92f9326c2"
  },
  {
    year: "2007",
    title: "A Legacy Reclaimed",
    text: "After being run by various non-family owners, Priest Station was re-acquired by the Anker family—the 4th, 5th, and 6th generation descendants—ensuring the 170-year legacy of hospitality continues.",
    imageUrl: "https://images.unsplash.com/photo-1578402382615-8c856f41452e"
  }
];

// --- TESTIMONIALS DATA ---
const testimonials = [
  {
    quote: "Mouthwateringly Great!",
    source: "The San Francisco Chronicle",
  },
  {
    quote: "A Yosemite institution... the view makes this stop one-of-a-kind.",
    source: "The Washington Post",
  },
  {
    quote: "Offers sweeping views of the surrounding foothills... we ate hearty breakfast burritos.",
    source: "Los Angeles Times",
  },
  {
    quote: "A recommended stop on State Route 120 if you are coming in from San Francisco.",
    source: "Conrad Anker, Outside Online",
  },
];

// --- Reusable Chapter Component ---
const Chapter = ({ year, title, text, imageUrl, index }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const isOdd = index % 2 !== 0;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut", 
        staggerChildren: 0.2,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div ref={ref} className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className={`relative z-10 w-11/12 md:w-full max-w-xl px-4 md:px-0 flex ${isOdd ? 'md:justify-start' : 'md:justify-end'}`}>
         <motion.div 
            className="bg-cream-50/90 backdrop-blur-sm text-redwood-900 p-8 md:p-12 rounded-xl shadow-2xl w-full md:w-10/12"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
         >
            <motion.p variants={itemVariants} className="font-playfair text-2xl text-redwood-600 mb-2">{year}</motion.p>
            <motion.h3 variants={itemVariants} className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</motion.h3>
            <motion.p variants={itemVariants} className="text-lg text-redwood-800 leading-relaxed">{text}</motion.p>
         </motion.div>
      </div>
    </div>
  );
};

// --- Main Story Component ---
const Story = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="story" className="bg-redwood-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6"
          >
            A Journey Through Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed"
          >
            Witness over 170 years of Sierra Nevada history unfold, from a Gold Rush outpost to your modern-day Yosemite gateway.
          </motion.p>
        </div>
      </div>

      <div className="relative">
          {storyChapters.map((chapter, index) => (
            <Chapter key={chapter.year} {...chapter} index={index} />
          ))}
      </div>

      <div className="bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-cream-100 rounded-2xl p-8 shadow-xl h-full">
                  <CardContent className="flex flex-col justify-center text-center h-full p-0">
                    <blockquote className="flex flex-col justify-center h-full">
                      <p className="font-playfair text-xl md:text-2xl text-redwood-700 italic mb-6 leading-relaxed flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <cite className="text-redwood-500 font-medium not-italic">
                        — {testimonial.source}
                      </cite>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;