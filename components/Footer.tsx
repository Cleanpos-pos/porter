
import React from 'react';
import { Facebook, Instagram, Twitter, Star } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onDisclaimerClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyClick, onTermsClick, onDisclaimerClick }) => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl md:text-4xl font-display tracking-[0.05em] sm:tracking-[0.08em] text-white leading-none" style={{ fontWeight: 200 }}>
              PORTERHOUSE
            </span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white font-semibold mt-1">
              Winchester's Premiere Steakhouse
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
            <div className="flex space-x-8 items-center">
              <a href="#" className="text-zinc-500 hover:text-gold transition-colors" title="Instagram"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/PorterhouseSteakhouse" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold transition-colors" title="Facebook"><Facebook size={24} /></a>
              <a href="https://x.com/Porterhouse_Win" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold transition-colors" title="X (Twitter)"><Twitter size={24} /></a>
              <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186300-d787977-Reviews-The_Porterhouse-Winchester_Hampshire_England.html" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold transition-colors" title="TripAdvisor">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 4c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm-4.5 4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zM12 15c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-sm font-medium tracking-widest uppercase text-zinc-500 flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <button onClick={onPrivacyClick} className="hover:text-zinc-100 transition-colors uppercase">Privacy</button>
            <button onClick={onTermsClick} className="hover:text-zinc-100 transition-colors uppercase">Terms</button>
            <button onClick={onDisclaimerClick} className="hover:text-zinc-100 transition-colors uppercase">Disclaimer</button>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            2026 Copyright &copy; 2025 Porterhouse Steakhouse. All Rights Reserved.
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
