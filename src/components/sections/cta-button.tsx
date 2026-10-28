import { Star } from "lucide-react";

const CtaButton = () => {
  return (
    <>
      <a
        href="/go"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9 text-white font-bold text-xs rounded-lg shadow-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgb(0 70 190)] mb-1.5 w-full md:w-auto relative !border !mx-0 !py-2 !rounded-[18px] !px-2.5"
          style={{ backgroundColor: '#cb161c', borderColor: '#cb161c' }}
        target="_blank"
        rel="noopener noreferrer">
        <Star
          className="w-2.5 h-2.5 mr-1 text-white animate-pulse"
          fill="currentColor" />

        START REVIEW
        <Star
          className="w-2.5 h-2.5 ml-1 text-white animate-pulse"
          fill="currentColor" />
      </a>
      <p className="text-black text-[9px] italic mb-2">
        (Instant approval · No purchase required)
      </p>
    </>);

};

export default CtaButton;
