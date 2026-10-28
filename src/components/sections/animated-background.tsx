import React from 'react';
import { Drumstick, CupSoda, Utensils, Pizza, Sandwich, Cookie, Sparkles } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Drumstick className="absolute top-20 left-10 w-12 h-12 text-[#cb161d] animate-rotate-slow" />
        <CupSoda className="absolute top-40 left-20 w-8 h-8 text-[#cb161d] animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-[#cb161d] animate-twinkle" />
        <Utensils className="absolute bottom-40 left-16 w-10 h-10 text-[#cb161d] animate-rotate-reverse" />
        <Pizza className="absolute bottom-60 right-20 w-12 h-12 text-[#cb161d] animate-float-gentle" />
        <Sandwich className="absolute top-1/2 left-8 w-8 h-8 text-[#cb161d] animate-rotate-slow" />
        <Cookie className="absolute top-1/3 right-12 w-8 h-8 text-[#cb161d] animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <Drumstick className="absolute top-24 left-12 w-20 h-20 text-[#cb161d] animate-float-gentle" />
        <CupSoda className="absolute top-32 right-16 w-16 h-16 text-[#cb161d] animate-float-gentle" />
        <Pizza className="absolute top-1/3 left-20 w-14 h-14 text-[#cb161d] animate-float-gentle" />
        <Utensils className="absolute top-1/2 right-24 w-16 h-16 text-[#cb161d] animate-float-gentle" />
        <Sandwich className="absolute bottom-40 left-16 w-20 h-20 text-[#cb161d] animate-float-gentle" />
        <CupSoda className="absolute bottom-32 right-20 w-16 h-16 text-[#cb161d] animate-float-gentle" />
      </div>
    </>
  );
};

export default AnimatedBackground;