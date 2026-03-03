
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
import LegalModal from './components/LegalModal';
import CookieConsent from './components/CookieConsent';
import GiftCard from './components/GiftCard';
import Blog from './components/Blog';
import BlogPostDetail, { BlogPost } from './components/BlogPostDetail';
import Gallery from './components/Gallery';

export type View = 'home' | 'menu' | 'about' | 'contact' | 'gift-card' | 'blog' | 'gallery';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'disclaimer' }>({
    isOpen: false,
    type: 'privacy'
  });
  const [scrolled, setScrolled] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const openReservation = () => {
    setIsModalOpen(true);
  };
  const closeReservation = () => setIsModalOpen(false);

  const openLegal = (type: 'privacy' | 'terms' | 'disclaimer') => setLegalModal({ isOpen: true, type });
  const closeLegal = () => setLegalModal({ ...legalModal, isOpen: false });

  const renderView = () => {
    switch (currentView) {
      case 'menu':
        return <div className="pt-20"><Menu /></div>;
      case 'about':
        return <div className="pt-20"><About isFullPage /></div>;
      case 'contact':
        return <div className="pt-20"><Contact isFullPage /></div>;
      case 'gift-card':
        return <div className="pt-20"><GiftCard /></div>;
      case 'blog':
        if (selectedPost) {
          return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
        }
        return <div className="pt-20"><Blog onPostClick={setSelectedPost} /></div>;
      case 'gallery':
        return <div className="pt-20"><Gallery /></div>;
      default:
        return (
          <>
            <Hero onBookClick={openReservation} />
            <About />
            <Menu />
            <Gallery />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-gold-dark selection:text-white">
      <Navbar
        scrolled={scrolled || currentView !== 'home'}
        currentView={currentView}
        onViewChange={(view) => {
          setCurrentView(view);
          setSelectedPost(null);
        }}
        onBookClick={openReservation}
      />

      <main className="animate-fadeIn">
        {renderView()}
      </main>

      <Footer
        onPrivacyClick={() => openLegal('privacy')}
        onTermsClick={() => openLegal('terms')}
        onDisclaimerClick={() => openLegal('disclaimer')}
      />

      <ReservationModal isOpen={isModalOpen} onClose={closeReservation} />
      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegal}
        type={legalModal.type}
      />
      <CookieConsent
        onTermsClick={() => openLegal('terms')}
        onPrivacyClick={() => openLegal('privacy')}
      />
    </div>
  );
};

export default App;
