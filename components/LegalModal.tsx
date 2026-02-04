
import React from 'react';
import { X, Shield, FileText, AlertTriangle } from 'lucide-react';

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'privacy' | 'terms' | 'disclaimer';
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
    if (!isOpen) return null;

    const content = {
        privacy: {
            title: "Cookie & Privacy Policy",
            icon: <Shield className="text-gold" size={24} />,
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
            icon: <FileText className="text-gold" size={24} />,
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
        },
        disclaimer: {
            title: "Legal Disclaimer",
            icon: <AlertTriangle className="text-gold" size={24} />,
            sections: [
                {
                    h: "1. Introduction",
                    p: "1.1 This disclaimer shall govern your use of our website https://www.porterhouserestaurant.co.uk. 1.2 By using our website, you accept this disclaimer in full; accordingly, if you disagree with this disclaimer or any part of this disclaimer, you must not use our website. 1.3 Our website uses cookies; by using our website or agreeing to this disclaimer, you consent to our use of cookies in accordance with the terms of our Privacy Policy."
                },
                {
                    h: "2. Credit",
                    p: "2.1 This document was created using a template from SEQ Legal (https://seqlegal.com)."
                },
                {
                    h: "3. Copyright notice",
                    p: "3.1 Copyright (c) 2019 Winchester Steaks Ltd. 3.2 Subject to the express provisions of this disclaimer: (a) we, together with our licensors, own and control all the copyright and other intellectual property rights in our website and the material on our website; and (b) all the copyright and other intellectual property rights in our website and the material on our website are reserved."
                },
                {
                    h: "4. Licence to use website",
                    p: "4.1 You may: (a) view pages from our website in a web browser; (b) download pages from our website for caching in a web browser; and (c) print pages from our website, subject to the other provisions of this disclaimer. 4.2 Except as expressly permitted by Section 4.1 or the other provisions of this disclaimer, you must not download any material from our website or save any such material to your computer. 4.3 You may only use our website for your own personal and business purposes, and you must not use our website for any other purposes. 4.4 Unless you own or control the relevant rights in the material, you must not: (a) republish material from our website (including republication on another website); (b) sell, rent or sub-license material from our website; (c) show any material from our website in public; (d) exploit material from our website for a commercial purpose; or (e) redistribute material from our website. 4.5 We reserve the right to restrict access to areas of our website, or indeed our whole website, at our discretion; you must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website."
                },
                {
                    h: "5. Acceptable use",
                    p: "5.1 You must not: (a) use our website in any way or take any action that causes, or may cause, damage to the website or impairment of the performance, availability or accessibility of the website; (b) use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity; (c) use our website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software; (d) conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent; (e) access or otherwise interact with our website using any robot, spider or other automated means, except for the purpose of search engine indexing; (f) violate the directives set out in the robots.txt file for our website; or (g) use data collected from our website for any direct marketing activity (including without limitation email marketing, SMS marketing, telemarketing and direct mailing). 5.2 You must ensure that all the information you supply to us through our website, or in relation to our website, is true, accurate, current, complete and non-misleading."
                },
                {
                    h: "6. Limited warranties",
                    p: "6.1 We do not warrant or represent: (a) the completeness or accuracy of the information published on our website; (b) that the material on the website is up to date; or (c) that the website or any service on the website will remain available. 6.2 We reserve the right to discontinue or alter any or all of our website services, and to stop publishing our website, at any time in our sole discretion without notice or explanation; and save to the extent expressly provided otherwise in this disclaimer, you will not be entitled to any compensation or other payment upon the discontinuance or alteration of any website services, or if we stop publishing the website. 6.3 To the maximum extent permitted by applicable law and subject to Section 7.1, we exclude all representations and warranties relating to the subject matter of this disclaimer, our website and the use of our website."
                },
                {
                    h: "7. Limitations and exclusions of liability",
                    p: "7.1 Nothing in this disclaimer will: (a) limit or exclude any liability for death or personal injury resulting from negligence; (b) limit or exclude any liability for fraud or fraudulent misrepresentation; (c) limit any liabilities in any way that is not permitted under applicable law; or (d) exclude any liabilities that may not be excluded under applicable law. 7.2 The limitations and exclusions of liability set out in this Section 7 and elsewhere in this disclaimer: (a) are subject to Section 7.1; and (b) govern all liabilities arising under this disclaimer or relating to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty, except to the extent expressly provided otherwise in this disclaimer. 7.3 To the extent that our website and the information and services on our website are provided free of charge, we will not be liable for any loss or damage of any nature. 7.4 We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control. 7.5 We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill. 7.6 We will not be liable to you in respect of any loss or corruption of any data, database or software. 7.7 We will not be liable to you in respect of any special, indirect or consequential loss or damage. 7.8 You accept that we have an interest in limiting the personal liability of our officers and employees and, having regard to that interest, you acknowledge that we are a limited liability entity; you agree that you will not bring any claim personally against our officers or employees in respect of any losses you suffer in connection with the website or this disclaimer."
                },
                {
                    h: "8. Variation",
                    p: "8.1 We may revise this disclaimer from time to time. 8.2 The revised disclaimer shall apply to the use of our website from the time of publication of the revised disclaimer on the website."
                },
                {
                    h: "9. Severability",
                    p: "9.1 If a provision of this disclaimer is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. 9.2 If any unlawful and/or unenforceable provision of this disclaimer would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect."
                },
                {
                    h: "10. Law and jurisdiction",
                    p: "10.1 This disclaimer shall be governed by and construed in accordance with English law. 10.2 Any disputes relating to this disclaimer shall be subject to the non-exclusive jurisdiction of the courts of England."
                },
                {
                    h: "11. Statutory and regulatory disclosures",
                    p: "11.1 Winchester Steaks Ltd VAT number is 333 7158 06."
                },
                {
                    h: "12. Our details",
                    p: "12.1 This website is owned and operated by Winchester Steaks Ltd. 12.2 We are registered in England and Wales under registration number 12137552 and our registered office is at 24 Jewry Street, Winchester, Hampshire, SO23 8SB. 12.3 Our principal place of business is at 24 Jewry Street, Winchester, Hampshire, SO23 8SB. 12.4 You can contact us: (a) by post, to the postal address given above; (b) using our website contact form; (c) by telephone, on the contact number published on our website from time to time; or (d) by email, using the email address published on our website from time to time."
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
                        <div className="p-2 bg-gold-dark/10 rounded-lg">{current.icon}</div>
                        <h2 className="text-xl serif text-white tracking-widest uppercase">{current.title}</h2>
                    </div>
                    <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
                    {current.sections.map((s, i) => (
                        <div key={i} className="space-y-3">
                            <h3 className="text-gold text-xs font-black uppercase tracking-[0.3em]">{s.h}</h3>
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
                        className="px-10 py-3 bg-gold-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors"
                    >
                        Close Policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LegalModal;
