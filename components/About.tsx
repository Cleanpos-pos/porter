
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Target, Heart } from 'lucide-react';

interface AboutProps {
  isFullPage?: boolean;
}

const aboutImages = ['/gallery/k1.jpeg', '/gallery/K2.jpeg', '/gallery/lamb-rack-wine.jpg'];

const About: React.FC<AboutProps> = ({ isFullPage = false }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % aboutImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      <section className={`py-24 ${isFullPage ? 'md:py-32' : 'md:py-40'} px-6`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 lg:gap-32 items-start">
          <div className="relative order-2 md:order-1">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold-dark/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-[500px] border border-zinc-800 shadow-2xl overflow-hidden">
              {aboutImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt="Porterhouse Steakhouse Signature Dish"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 grayscale-[10%] hover:grayscale-0 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="mt-6 bg-zinc-900 border border-zinc-800 flex items-center justify-center p-8 shadow-2xl">
              <p className="serif italic text-zinc-500 text-center leading-relaxed">
                "Simple, honest, and better than anyone else."
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-8 md:pt-4">
            <div className="space-y-2">
              <h3 className="text-gold uppercase tracking-widest text-sm font-bold">Our Heritage</h3>
              <h2 className="text-4xl md:text-6xl serif text-white leading-tight">Our Philosophy</h2>
            </div>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl serif italic text-zinc-100 leading-relaxed">
                "Porterhouse Steakhouse is not about variety. It's not about being all things to all people. It's about doing something simple and doing it better than anyone else."
              </p>
              <p className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-gold-dark serif border-l-4 border-gold-dark pl-8 py-4">
                That something is Beef.
              </p>
              <p className="text-zinc-400 leading-loose text-lg font-light">
                We source only the finest grass-fed beef, aged to perfection and grilled over intense heat to lock in flavor. Every cut is a testament to our dedication to quality and traditional butchery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {isFullPage && (
        <>
          <section className="py-24 bg-[#0d0d0d] border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gold-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="text-gold" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">Quality Guaranteed</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Every piece of meat is inspected by our master butcher to ensure it meets our exacting standards for marbling and age.
                  </p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gold-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="text-gold" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">Expert Sourcing</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    We partner with select local farms that share our commitment to natural rearing and sustainable practices.
                  </p>
                </div>
                <div className="space-y-4 text-center">
                  <div className="w-16 h-16 bg-gold-dark/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="text-gold" size={32} />
                  </div>
                  <h4 className="text-xl serif text-white uppercase tracking-widest">A Passion for Beef</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Beef isn't just an item on our menu; it's our obsession. We believe in letting the quality of the product speak for itself.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 px-6 bg-[#0a0a0a]">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl serif text-white">The Porterhouse Story</h2>
                <div className="w-20 h-1 bg-gold-dark mx-auto"></div>
              </div>
              <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  Porterhouse Steakhouse began with a simple observation: Winchester was missing a true temple to beef. We didn't want a generic bistro or a fusion experiment. We wanted a place where the steak was the star, treated with the reverence it deserves.
                </p>
                <p>
                  Our journey took us to farms across Hampshire and beyond, searching for the perfect grass-fed cattle. We experimented with aging techniques until we found the "sweet spot" of 28 to 35 days, where tenderness and flavor reach their peak.
                </p>
                <p>
                  Today, located next to the historic Theatre Royal, Porterhouse Steakhouse stands as a beacon for those who appreciate the finer things in life—exceptional meat, fine wine, and a rustic-modern atmosphere that feels both timeless and current.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default About;
