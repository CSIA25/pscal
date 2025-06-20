import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

// --- Reusable Chapter Component ---
// This component encapsulates the entire visual structure for one chapter.
const Chapter = ({ year, title, text, imageUrl, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] // Animate while the component is in view
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);

  // Determines alignment for desktop
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className="relative h-[80vh] md:h-screen w-full flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for contrast */}
      </motion.div>

      {/* Content Card */}
      <div className={`relative z-10 w-11/12 md:w-full max-w-xl px-4 md:px-0 flex ${isOdd ? 'md:justify-start' : 'md:justify-end'}`}>
         <div className="bg-cream-50/90 backdrop-blur-sm text-redwood-900 p-8 md:p-12 rounded-xl shadow-2xl w-full md:w-10/12">
            <p className="font-playfair text-2xl text-redwood-600 mb-2">{year}</p>
            <h3 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
                {title}
            </h3>
            <p className="text-lg text-redwood-800 leading-relaxed">
                {text}
            </p>
         </div>
      </div>
    </motion.div>
  );
};

// --- Main Story Component ---
const Story = () => {
  return (
    <section id="story" className="bg-redwood-900 text-cream-50"> {/* A dark base for a cinematic feel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* --- INTRO SECTION --- */}
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

      {/* --- TIMELINE --- */}
      {/* We no longer need a complex container, we just map the chapters */}
      <div className="relative">
          {storyChapters.map((chapter, index) => (
            <Chapter key={chapter.year} {...chapter} index={index} />
          ))}
      </div>

      {/* --- QUOTE / OUTRO SECTION --- */}
      <div className="bg-cream-50"> {/* Switch back to a light theme to transition out */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-cream-100 rounded-2xl p-8 md:p-12 shadow-xl">
              <blockquote className="text-center">
                <p className="font-playfair text-2xl md:text-3xl text-redwood-700 italic mb-6 leading-relaxed">
                  "Mouthwateringly Great!"
                </p>
                <cite className="text-redwood-500 font-medium not-italic">
                  — The San Francisco Chronicle
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;