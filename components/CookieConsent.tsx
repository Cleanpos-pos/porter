
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-32 md:w-[400px] z-[100] animate-fadeIn">
            <div className="bg-[#121212] border border-zinc-800 p-6 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-900"></div>

                <div className="flex items-start space-x-4">
                    <div className="p-3 bg-red-900/10 rounded-lg shrink-0">
                        <Cookie className="text-red-700" size={24} />
                    </div>

                    <div className="flex-1">
                        <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Cookie Privacy</h4>
                        <p className="text-zinc-500 text-[11px] leading-relaxed mb-4">
                            We use refined digital cookies to enhance your journey through the Porterhouse experience.
                            By continuing to explore, you agree to our culinary data use.
                        </p>

                        <div className="flex space-x-3">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-2 bg-red-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
                            >
                                Accept Selection
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="px-6 py-2 border border-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:text-white hover:border-zinc-600 transition-colors"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
