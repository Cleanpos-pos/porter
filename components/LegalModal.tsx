
import React from 'react';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'terms';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const content = {
        privacy: {
            title: "Cookie & Privacy Policy",
            icon: <Shield className="text-red-700" size={24} />,
            sections: [
                {
                    h: "Our Philosophy",
                    p: "At Porterhouse Steakhouse, your privacy is handled with as much care as our dry-aged cuts. We are committed to transparency in how we collect and use your data."
                },
                {
                    h: "Information Collection",
                    p: "We only collect data necessary to provide you with the highest level of hospitality. This includes reservation details, contact information for communication, and digital cookies to improve our website experience."
                },
                {
                    h: "Use of Cookies",
                    p: "Our website uses cookies to remember your preferences and analyze traffic. This helps us ensure that our digital presence is as tailored and seamless as our table service."
                },
                {
                    h: "Third-Party Services",
                    p: "We may use trusted third-party services for reservations and analytics. Your data is never sold—it is only used to facilitate your visits to Porterhouse Steakhouse."
                }
            ]
        },
        terms: {
            title: "Terms & Conditions",
            icon: <FileText className="text-red-700" size={24} />,
            sections: [
                {
                    h: "Reservations",
                    p: "Table reservations are subject to availability. We recommend booking in advance, especially for weekend dining and larger groups."
                },
                {
                    h: "Cancellations & No-Shows",
                    p: "We require at least 24 hours' notice for any cancellations or significant changes to guest numbers. For groups of 6 or more, a card authorization or deposit may be required. In the event of a no-show or late cancellation (less than 6 hours' notice), we reserve the right to charge a fee of £20 per person to the card provided."
                },
                {
                    h: "Dining Experience",
                    p: "To ensure every guest enjoys the Porterhouse atmosphere, we request that guests arrive on time for their reservation. Tables are typically allocated for 2 hours during peak periods."
                },
                {
                    h: "Gift Vouchers",
                    p: "Vouchers are valid for 12 months from the date of purchase and must be presented at the time of dining. They cannot be exchanged for cash."
                }
            ]
        }
    };

    const current = content[type];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#0a0a0a]/90 backdrop-blur-sm animate-fadeIn">
            <div className="bg-[#121212] border border-zinc-800 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl">
                <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
                    <div className="flex items-center space-x-4">
                        <div className="p-2 bg-red-900/10 rounded-lg">{current.icon}</div>
                        <h2 className="text-xl serif text-white tracking-widest uppercase">{current.title}</h2>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                    {current.sections.map((s, i) => (
                        <div key={i} className="space-y-3">
                            <h3 className="text-red-700 text-xs font-black uppercase tracking-[0.3em]">{s.h}</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed font-light">{s.p}</p>
                        </div>
                    ))}

                    <div className="pt-8 border-t border-zinc-900">
                        <p className="text-[10px] text-zinc-600 uppercase tracking-widest text-center">
                            Last Updated: January 2026 | Porterhouse Steakhouse
                        </p>
                    </div>
                </div>

                <div className="p-6 border-t border-zinc-800 bg-zinc-900/50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-10 py-3 bg-red-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
                    >
                        Close Policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
