

import React, { useEffect } from 'react';
import { X, Calendar, Clock, MapPin } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 md:px-6">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-md animate-fadeIn transition-all duration-500"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#121212] border border-zinc-800 w-full max-w-5xl h-[95vh] md:h-[90vh] shadow-[0_0_100px_rgba(153,101,21,0.2)] overflow-hidden flex flex-col md:flex-row animate-scaleIn">
        {/* Decorative Sidebar (Visible on Desktop) */}
        <div className="hidden lg:flex w-72 bg-[#0a0a0a] border-r border-zinc-900 flex-col justify-between p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

          <div className="relative z-10 space-y-12">
            <div className="space-y-2">
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-black">Porterhouse</span>
              <h2 className="text-3xl serif text-white leading-tight">Private Reservation</h2>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Calendar className="text-gold-dark mt-1 shrink-0" size={18} />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Availability</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Booking recommended 48hrs in advance.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-gold-dark mt-1 shrink-0" size={18} />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Opening Hours</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Mon - Sun<br />12:00 PM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-gold-dark mt-1 shrink-0" size={18} />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Location</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">Jewry St, Winchester</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-10 border-t border-zinc-900">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">Winchester's Premiere Steakhouse</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="flex items-center justify-between p-4 md:p-6 border-b border-zinc-200 bg-[#fafafa]">
            <div className="lg:hidden">
              <h3 className="text-gold uppercase tracking-widest text-[10px] font-black">Reserve</h3>
              <h2 className="text-xl serif text-zinc-900">Book Your Table</h2>
            </div>
            <div className="hidden lg:block">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Secure your experience below</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors border border-transparent hover:border-zinc-200"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <div style={{ margin: '0 auto', height: '100%' }}>
              <iframe
                id="rd-widget-frame"
                style={{ width: '100%', height: '100%', minHeight: '710px' }}
                src="https://booking.resdiary.com/widget/Standard/PorterhouseSteakhouse/4797"
                frameBorder="0"
                allow="payment *"
                title="Porterhouse Steakhouse Booking Widget"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;

