import Image from 'next/image';
import { Gift, Sparkles, Snowflake, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="mb-0 flex flex-col items-center p-0 m-0">
        <div className="w-20 mt-2 mb-0 p-0 m-0">
          <Image
            src="/logo.png"
            alt="Wingstop Logo"
            width={176}
            height={176}
            className="w-full h-auto object-contain drop-shadow-xl block p-0 m-0"
          />
        </div>

        <div className="relative mb-6 mt-6 animate-float">
          <div className="relative inline-block">
            <Image
              src="/card.png"
              alt="Ranch Money Wingstop Card"
              width={288}
              height={435}
              className="w-56 h-auto mx-auto drop-shadow-2xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-radial from-accent/20 to-transparent blur-3xl -z-10"></div>
          </div>
        </div>

        <h1 className="text-lg md:text-xl font-bold mb-1.5 px-2 relative [text-shadow:none]">
          <Star className="w-2.5 h-2.5 text-accent absolute -top-0.5 left-3 animate-pulse" />
          <span className="text-black">Unlock</span>{' '}
          <span className="inline-flex items-center gap-1" style={{ color: '#c8131e', textShadow: 'none' }}>
            Raising Cane's Rewards
          </span>
        </h1>

        <p className="text-xs md:text-sm text-black mb-2 font-medium px-2 relative [text-shadow:none]">
          Here's how to claim your{' '}
          <span className="font-bold !w-[148px] !h-[17px]" style={{ color: '#c8131e', textShadow: 'none' }}>
            $500 Gift Card
          </span>
        </p>
      </div>
    </div>
  );
};

export default HeroSection;