
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Check if script already exists to avoid duplication
      const existingScript = document.querySelector('script[src="https://booking.resdiary.com/bundles/WidgetV2Loader.js"]');

      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://booking.resdiary.com/bundles/WidgetV2Loader.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script exists, we might need to trigger re-initialization if the widget doesn't auto-load
        // Usually these loaders check for the existence of rd-widget-frame on DOM mutation or periodically
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4">
      <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-[#121212] border border-zinc-800 w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col">
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

        <div className="flex-1 p-8 overflow-y-auto min-h-[500px] bg-white">
          <div id="rd-widget-frame" style={{ maxWidth: '600px', margin: 'auto' }}></div>
          <input id="rdwidgeturl" name="rdwidgeturl" value="https://booking.resdiary.com/widget/Standard/PorterhouseSteakhouse/4797?includeJquery=false" type="hidden" />
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;
