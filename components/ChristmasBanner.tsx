
import React from 'react';
import { Sparkles } from 'lucide-react';

export const CHRISTMAS_MENU_URL = '/christmas-party-menu-winchester/';

const Bauble = ({ className, fill }: { className: string; fill: string }) => (
  <svg className={className} viewBox="0 0 80 150" aria-hidden="true">
    <line x1="40" y1="0" x2="40" y2="56" stroke="#D4AF37" strokeWidth="1.5" />
    <rect x="33" y="54" width="14" height="10" rx="2" fill="#D4AF37" />
    <circle cx="40" cy="100" r="38" fill={fill} />
    <circle cx="40" cy="100" r="38" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
    <path d="M6 92 Q40 110 74 92" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
    <ellipse cx="27" cy="82" rx="7" ry="11" fill="#fff" opacity="0.15" />
  </svg>
);

const ChristmasBanner: React.FC = () => {
  return (
    <section aria-label="Christmas Party Menu 2026" className="relative bg-[#080808] px-6 py-16">
      <div className="relative max-w-6xl mx-auto overflow-hidden border border-gold-dark/60 bg-gradient-to-br from-[#3a0a12] via-[#14090b] to-[#0a0a0a] shadow-[0_0_60px_rgba(153,101,21,0.25)]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        <Bauble className="hidden md:block absolute top-0 left-10 w-14" fill="#7a1220" />
        <Bauble className="hidden md:block absolute top-0 right-10 w-12" fill="#996515" />

        <div className="relative px-6 py-14 md:px-28 md:py-16 text-center">
          <p className="flex items-center justify-center gap-3 text-gold uppercase tracking-[0.5em] text-[10px] font-black mb-5">
            <Sparkles size={14} />
            Now Taking Pre-Orders
            <Sparkles size={14} />
          </p>
          <h2 className="text-4xl md:text-6xl serif text-white mb-5">Christmas Party Menu 2026</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-sm md:text-base font-light leading-relaxed mb-8">
            Starter, main and dessert with char-grilled steaks, turkey roulade and Christmas pudding with brandy sauce.
          </p>

          <div className="inline-flex items-baseline gap-3 mb-8">
            <span className="serif text-5xl md:text-6xl font-bold text-gold">£37.95</span>
            <span className="text-[10px] text-zinc-300 uppercase tracking-[0.3em] font-bold">per person</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CHRISTMAS_MENU_URL}
              className="px-10 py-4 bg-gold-dark hover:bg-gold text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all"
            >
              View the Christmas Menu
            </a>
            <a
              href="tel:+441962810532"
              className="px-10 py-4 border border-gold-dark/60 text-gold hover:bg-gold-dark/20 text-[10px] font-black uppercase tracking-[0.3em] transition-all"
            >
              Call 01962 810532
            </a>
          </div>

          <p className="text-[10px] text-zinc-400 uppercase tracking-[0.25em] mt-8">
            Pre-orders only · Sunday to Thursday all day · Friday &amp; Saturday lunchtime only
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChristmasBanner;
