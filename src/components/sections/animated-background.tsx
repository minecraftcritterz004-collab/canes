import React from 'react';
import { Star, Sparkles, Heart, Gift, ShoppingCart, ShoppingBag, Tag, CreditCard, Package } from 'lucide-react';

const AnimatedBackground = () => {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <Heart className="absolute top-20 left-10 w-12 h-12 text-[#f96304] animate-rotate-slow" />
        <Star className="absolute top-40 left-20 w-8 h-8 text-[#f96304] animate-float-spin" />
        <Sparkles className="absolute top-32 right-16 w-10 h-10 text-[#f96304] animate-twinkle" />
        <Gift className="absolute bottom-40 left-16 w-10 h-10 text-[#f96304] animate-rotate-reverse" />
        <Star className="absolute bottom-60 right-20 w-12 h-12 text-[#f96304] animate-float-gentle" />
        <Heart className="absolute top-1/2 left-8 w-8 h-8 text-[#f96304] animate-rotate-slow" />
        <Sparkles className="absolute top-1/3 right-12 w-8 h-8 text-[#f96304] animate-float-spin" />
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
        <ShoppingCart className="absolute top-24 left-12 w-20 h-20 text-[#f96304] animate-float-gentle" />
        <ShoppingBag className="absolute top-32 right-16 w-16 h-16 text-[#f96304] animate-float-gentle" />
        <Tag className="absolute top-1/3 left-20 w-14 h-14 text-[#f96304] animate-float-gentle" />
        <CreditCard className="absolute top-1/2 right-24 w-16 h-16 text-[#f96304] animate-float-gentle" />
        <Package className="absolute bottom-40 left-16 w-20 h-20 text-[#f96304] animate-float-gentle" />
        <ShoppingCart className="absolute bottom-32 right-20 w-16 h-16 text-[#f96304] animate-float-gentle" />
      </div>
    </>
  );
};

export default AnimatedBackground;