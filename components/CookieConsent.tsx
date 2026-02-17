import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
    onTermsClick: () => void;
    onPrivacyClick: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onTermsClick, onPrivacyClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[200] animate-fadeIn">
            <div className="bg-[#121212]/95 backdrop-blur-xl border border-zinc-800 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-dark group-hover:bg-gold transition-colors duration-500"></div>

                <div className="flex items-start gap-4">
                    <div className="bg-gold-dark/10 p-2 rounded-lg shrink-0">
                        <Cookie className="text-gold" size={24} />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h4 className="text-white font-serif text-lg tracking-wide">Cookie Consent</h4>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="text-zinc-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <p className="text-zinc-400 text-xs leading-relaxed">
                            We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
                            <button onClick={onTermsClick} className="text-gold hover:underline font-bold">Terms</button> and{' '}
                            <button onClick={onPrivacyClick} className="text-gold hover:underline font-bold">Cookie Policy</button>.
                        </p>

                        <div className="flex gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 py-3 bg-gold-dark hover:bg-gold text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                            >
                                Accept All
                            </button>
                            <button
                                onClick={() => setIsVisible(false)}
                                className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-[10px] font-black uppercase tracking-[0.2em] transition-all border border-zinc-800"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
};

export default CookieConsent;
