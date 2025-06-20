import React, { useRef, useEffect, useState, createRef, forwardRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

// --- CHAPTER DATA ---
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
    colorClass: "bg-cream-100"
  },
  {
    quote: "A Yosemite institution... the view makes this stop one-of-a-kind.",
    source: "The Washington Post",
    colorClass: "bg-sage-200"
  },
  {
    quote: "Offers sweeping views of the surrounding foothills... we ate hearty breakfast burritos.",
    source: "Los Angeles Times",
    colorClass: "bg-redwood-200"
  },
  {
    quote: "A recommended stop on State Route 120 if you are coming in from San Francisco.",
    source: "Conrad Anker, Outside Online",
    colorClass: "bg-sage-100"
  },
];


// --- Reusable Chapter Component ---
const Chapter = forwardRef<HTMLDivElement, { year: string; title: string; text: string; imageUrl: string; index: number }>(({ year, title, text, imageUrl, index }, ref) => {
  const localRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: localRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const isOdd = index % 2 !== 0;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={localRef} className="absolute inset-0">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>
      <div className={`relative z-10 w-11/12 md:w-full max-w-xl px-4 md:px-0 flex ${isOdd ? 'md:justify-start' : 'md:justify-end'}`}>
        <motion.div
          className="bg-cream-50/90 backdrop-blur-sm text-redwood-900 p-8 md:p-12 rounded-xl shadow-2xl w-full md:w-10/12"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={itemVariants} className="font-playfair text-2xl text-redwood-600 mb-2">{year}</motion.p>
          <motion.h3 variants={itemVariants} className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">{title}</motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-redwood-800 leading-relaxed">{text}</motion.p>
        </motion.div>
      </div>
    </div>
  );
});


// --- Main Story Component ---
const Story = () => {
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef(storyChapters.map(() => createRef<HTMLDivElement>()));
  const isThrottled = useRef(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      let mostVisibleIndex = -1;
      let maxVisibleHeight = 0;

      chapterRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            mostVisibleIndex = index;
          }
        }
      });
      if(mostVisibleIndex !== -1) {
          currentIndex.current = mostVisibleIndex;
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const storyBounds = storyContainerRef.current?.getBoundingClientRect();
      if (!storyBounds) return;

      const isInsideStoryView = storyBounds.top <= 0 && storyBounds.bottom > window.innerHeight;
      
      if (!isInsideStoryView) return;

      const direction = event.deltaY > 0 ? 1 : -1;

      if ((direction === 1 && currentIndex.current === storyChapters.length - 1) || (direction === -1 && currentIndex.current === 0)) {
        return;
      }

      if (isThrottled.current) {
        event.preventDefault();
        return;
      }
      
      event.preventDefault();
      isThrottled.current = true;

      const nextIndex = currentIndex.current + direction;
      
      if (chapterRefs.current[nextIndex]?.current) {
        chapterRefs.current[nextIndex].current.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        isThrottled.current = false;
      }, 1000); 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const testimonialContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const testimonialItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section ref={storyContainerRef} id="story" className="bg-redwood-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-cream-100 mb-6"
          >
            A Journey Through Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xl text-cream-200 max-w-3xl mx-auto leading-relaxed"
          >
            Witness over 170 years of Sierra Nevada history unfold, from a Gold Rush outpost to your modern-day Yosemite gateway.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        {storyChapters.map((chapter, index) => (
          <Chapter ref={chapterRefs.current[index]} key={chapter.year} {...chapter} index={index} />
        ))}
      </div>

      <div className="bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
            variants={testimonialContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={testimonialItemVariants} className="flex flex-col h-full text-center">
                <Card className={`rounded-2xl p-8 shadow-xl flex-grow flex items-center justify-center ${testimonial.colorClass}`}>
                  <CardContent className="p-0">
                    <blockquote className="flex flex-col justify-center h-full">
                      <p className="font-playfair text-xl md:text-2xl text-redwood-800 italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                  </CardContent>
                </Card>
                <cite className="text-redwood-600 font-medium not-italic mt-4 px-2">
                  — {testimonial.source}
                </cite>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;