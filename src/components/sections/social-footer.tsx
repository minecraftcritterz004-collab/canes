import { Linkedin, Facebook, Instagram } from 'lucide-react';

const SocialFooter = () => {
  return (
    <>
      <div className="flex justify-center gap-1.5 mb-2">
        <a
          href="https://ph.linkedin.com/company/the-home-depot"
          aria-label="LinkedIn"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: '#f96304', borderColor: '#f96304' }}>

          <Linkedin className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.facebook.com/HomeDepot"
          aria-label="Facebook"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: '#f96304', borderColor: '#f96304' }}>

          <Facebook className="w-3 h-3 text-foreground" />
        </a>
        <a
          href="https://www.instagram.com/homedepot/"
          aria-label="Instagram"
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-xl border"
            style={{ backgroundColor: '#f96304', borderColor: '#f96304' }}>

          <Instagram className="text-foreground !w-3 !h-3" />
        </a>
      </div>
      <footer className="text-black text-[9px]">
        <p className="!text-center !m-0 !p-0">© 2026</p>
        <p className="!text-center">All rights reserved</p>
      </footer>
    </>);

};

export default SocialFooter;