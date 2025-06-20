import React, { useRef, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Cabins from '@/components/Cabins';
import Yosemite from '@/components/Yosemite';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const menuSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // This flag prevents the scroll from re-triggering while an animation is in progress.
    let isAnimating = false;
    const animationDuration = 1000; // ms

    const triggerScroll = (event?: WheelEvent) => {
      // If we are already animating, prevent further actions.
      if (isAnimating) {
        event?.preventDefault();
        return;
      }
      
      isAnimating = true;
      event?.preventDefault(); // Prevent the user's native scroll.

      menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

      // After the animation duration, reset the flag to allow triggering again.
      setTimeout(() => {
        isAnimating = false;
      }, animationDuration);
    };
    
    const handleWheel = (event: WheelEvent) => {
      // Trigger if the user is anywhere within the hero section (100vh) and scrolls down.
      if (window.scrollY < window.innerHeight && event.deltaY > 0) {
        triggerScroll(event);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      if (isAnimating) return;
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isAnimating) return;
      const touchEndY = event.touches[0].clientY;

      // Trigger if user is in the hero section and swipes up (scrolls down).
      if (window.scrollY < window.innerHeight && touchStartY > touchEndY + 5) {
        triggerScroll();
      }
    };
    
    // Add listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Cleanup function to remove listeners when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu ref={menuSectionRef} />
      <Story />
      <Cabins />
      <Yosemite />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;