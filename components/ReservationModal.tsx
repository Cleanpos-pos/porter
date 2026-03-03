
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-[#121212] border border-zinc-800 w-full max-w-4xl h-[90vh] shadow-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-[#0a0a0a]">
          <div>
            <h3 className="text-gold uppercase tracking-widest text-xs font-bold">Reserve</h3>
            <h2 className="text-2xl serif text-white">Book Your Table</h2>
          </div>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 bg-white overflow-hidden">
          <iframe
            src="https://booking.resdiary.com/widget/Standard/PorterhouseSteakhouse/4797?includeJquery=false"
            className="w-full h-full border-0"
            title="Porterhouse Steakhouse Reservation"
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
