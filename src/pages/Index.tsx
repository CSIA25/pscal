import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Menu from '@/components/Menu';
import Cabins from '@/components/Cabins';
import Yosemite from '@/components/Yosemite';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <Story />
      <Cabins />
      <Yosemite />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;