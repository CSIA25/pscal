import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- CHAPTER DATA ---
// Using the high-quality stock images you provided.
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

// This reusable component now contains the responsive text block
const ChapterContent = ({ year, title, text }) => {
  return (
    <div className="w-full max-w-2xl text-center">
      <p className="font-playfair text-xl sm:text-2xl text-cream-200">{year}</p>
      <h3 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 my-2 sm:my-4 leading-tight">
        {title}
      </h3>
      <p className="text-base sm:text-lg md:text-xl text-cream-100 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

// Reusable component for the image with the Ken Burns effect
const StoryImage = ({ imageUrl }) => (
    <motion.div
        className="absolute inset-0 h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1.2 }}
        viewport={{ amount: "all" }}
        transition={{ duration: 30, ease: 'linear' }}
    />
);

const Story = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end end']
    });

    return (
        <section id="story" className="bg-cream-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <h2 className="font-playfair text-4xl md:text-5xl font-bold text-redwood-800 mb-6">
                        A Journey Through Time
                    </h2>
                    <p className="text-xl text-redwood-600 max-w-3xl mx-auto leading-relaxed">
                        Scroll to witness over 170 years of Sierra Nevada history unfold, from a Gold Rush outpost to your modern-day Yosemite gateway.
                    </p>
                </div>
            </div>

            <div ref={containerRef} className="relative h-[300vh] w-full">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* The base layer, always visible underneath to prevent flashing */}
                    <StoryImage imageUrl={storyChapters[0].imageUrl} />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    {/* The subsequent image layers that fade in on top */}
                    {storyChapters.slice(1).map((chapter, index) => {
                        const chapterStartsAt = (index + 0.5) / storyChapters.length;
                        const chapterEndsAt = (index + 1.5) / storyChapters.length;
                        const opacity = useTransform(scrollYProgress, [chapterStartsAt, chapterEndsAt], [0, 1]);
                        return (
                            <motion.div key={chapter.year} className="absolute inset-0" style={{ opacity }}>
                                <StoryImage imageUrl={chapter.imageUrl} />
                                <div className="absolute inset-0 bg-black/40" />
                            </motion.div>
                        );
                    })}

                    {/* The Text content, now structured for responsiveness */}
                    <div className="absolute inset-0">
                        {storyChapters.map((chapter, index) => {
                            const chapterStartsAt = index / storyChapters.length;
                            const chapterEndsAt = (index + 1) / storyChapters.length;
                            const progress = useTransform(scrollYProgress, [chapterStartsAt, chapterEndsAt], [0, 1]);
                            const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
                            const y = useTransform(progress, [0, 0.2], ["1rem", "0rem"]);
                            
                            return (
                              <motion.div
                                key={chapter.year}
                                style={{ opacity, y }}
                                className="absolute inset-0 flex items-center justify-center p-8" // Padding is INSIDE the animated container
                              >
                                <ChapterContent {...chapter} />
                              </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="bg-cream-100 rounded-2xl p-8 md:p-12 shadow-lg">
                    <blockquote className="text-center">
                        <p className="font-playfair text-2xl md:text-3xl text-redwood-700 italic mb-6 leading-relaxed">
                        "Mouthwateringly Great!"
                        </p>
                        <cite className="text-redwood-500 font-medium">
                        — The San Francisco Chronicle
                        </cite>
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default Story;