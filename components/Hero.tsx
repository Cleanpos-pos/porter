
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onBookClick: () => void;
}

const heroImages = ['/H1.jpeg', '/h2.jpeg', '/hero-steak.jpg'];

const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images with crossfade */}
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center z-0 scale-105 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>
      ))}

      <div className="relative z-10 text-center max-w-4xl px-6">
        <h2 className="text-gold uppercase tracking-[0.4em] text-sm md:text-base mb-4 font-bold animate-fadeIn">
          Established Excellence
        </h2>
        <h1 className="text-5xl md:text-8xl font-display text-white mb-6 leading-tight tracking-[0.08em]" style={{ fontWeight: 300 }}>
          PORTERHOUSE <br />
          <span className="italic font-normal font-serif text-gold">Steakhouse</span>
        </h1>
        <p className="text-lg md:text-2xl text-white font-light tracking-wide mb-10 max-w-2xl mx-auto">
          Winchester's Premiere Steakhouse
        </p>
        <button
          onClick={onBookClick}
          className="group relative px-10 py-5 bg-gold-dark hover:bg-gold text-white font-bold uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl overflow-hidden"
        >
          <span className="relative z-10">Book A Table</span>
          <div className="absolute inset-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Decorative wood grain overlay subtle texture */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    </section>
  );
};

export default Hero;
