
import React from 'react';
import { Facebook, Instagram, Twitter, Star } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-bold serif tracking-tight text-white leading-none">
              Porterhouse
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-red-700 font-semibold mt-1">
              Steakhouse
            </span>
          </div>

          <div className="flex flex-col items-center md:items-start group cursor-default">
            <div className="flex space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={14} className="fill-yellow-600 text-yellow-600" />
              ))}
              <span className="text-[10px] text-zinc-400 ml-2 font-bold uppercase tracking-widest">5.0 / 5.0</span>
            </div>
            <p className="text-[11px] italic text-zinc-500 mb-4 max-w-[200px]">"We just love this place!"</p>
            <div className="flex space-x-8">
              <a href="#" className="text-zinc-500 hover:text-red-700 transition-colors" title="Instagram"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/PorterhouseSteakhouse" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-700 transition-colors" title="Facebook"><Facebook size={24} /></a>
              <a href="https://x.com/Porterhouse_Win" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-red-700 transition-colors" title="X (Twitter)"><Twitter size={24} /></a>
            </div>
          </div>

          <div className="text-sm font-medium tracking-widest uppercase text-zinc-500 flex space-x-8">
            <button onClick={onPrivacyClick} className="hover:text-zinc-100 transition-colors uppercase">Privacy</button>
            <button onClick={onTermsClick} className="hover:text-zinc-100 transition-colors uppercase">Terms</button>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Copyright &copy; 2025 Porterhouse Steakhouse. All Rights Reserved.
          </p>
          <p className="text-zinc-700 text-[10px] tracking-widest uppercase">
            Handcrafted for Winchester Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
