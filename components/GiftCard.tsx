
import React from 'react';
import { Gift, CreditCard, ShoppingBag, Info } from 'lucide-react';

const GiftCard: React.FC = () => {
    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-zinc-900/20 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-red-700 uppercase tracking-[0.3em] text-sm font-bold">Exclusive Vouchers</h3>
                                <h2 className="text-5xl md:text-7xl serif text-white leading-tight">
                                    Give the Gift of <span className="text-red-900 italic">Excellence</span>
                                </h2>
                            </div>

                            <p className="text-xl text-zinc-400 leading-relaxed font-light max-w-xl">
                                Share the Porterhouse experience with your loved ones. Our gift vouchers are the perfect way to celebrate any occasion, from birthdays to anniversaries.
                            </p>

                            <div className="bg-zinc-900/50 border border-zinc-800 p-8 space-y-4 backdrop-blur-sm">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-red-900/20 p-3 rounded-full mt-1">
                                        <Info className="text-red-700" size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-white text-lg font-bold uppercase tracking-wider">In-Store Purchase</h4>
                                        <p className="text-zinc-400 leading-relaxed">
                                            Please note that all gift card purchases must be made <span className="text-white font-semibold underline decoration-red-700">in-person at our restaurant</span>. This allows us to provide you with a beautifully presented voucher ready for gifting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-700/50 to-red-900/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Digital Voucher Preview */}
                            <div className="relative bg-[#1a1a1a] aspect-[1.6/1] rounded-xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col items-center justify-center p-12 text-center space-y-4">
                                {/* Texture Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]"></div>

                                <div className="relative z-10 space-y-6">
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-[#c5a059] uppercase leading-none">
                                            Porterhouse
                                        </h3>
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent mt-4"></div>
                                    </div>

                                    <p className="text-3xl md:text-5xl text-white italic serif tracking-wide opacity-90">
                                        Gift Voucher
                                    </p>
                                </div>

                                {/* Decorative border */}
                                <div className="absolute inset-4 border border-zinc-800/50 rounded-lg pointer-events-none"></div>
                                <div className="absolute bottom-8 right-8 opacity-20">
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">SO23 8SB • WINCHESTER</span>
                                </div>
                            </div>

                            {/* Floating Decoration */}
                            <div className="absolute -bottom-6 -right-6 bg-red-900 p-6 shadow-2xl hidden md:block rounded-sm">
                                <Gift className="text-white" size={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-24 bg-[#0d0d0d] border-y border-zinc-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-900/10 rounded-lg flex items-center justify-center mb-6">
                                <CreditCard className="text-red-700" size={24} />
                            </div>
                            <h4 className="text-xl serif text-white uppercase tracking-widest">Flexible Values</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Choose any amount you wish to gift. Our team will assist you in selecting the perfect value for a full dining experience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-900/10 rounded-lg flex items-center justify-center mb-6">
                                <ShoppingBag className="text-red-700" size={24} />
                            </div>
                            <h4 className="text-xl serif text-white uppercase tracking-widest">Premium Packaging</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Every voucher comes in a premium Porterhouse presentation sleeve, making it a truly special physical gift to unwrap.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-red-900/10 rounded-lg flex items-center justify-center mb-6">
                                <Info className="text-red-700" size={24} />
                            </div>
                            <h4 className="text-xl serif text-white uppercase tracking-widest">Terms of Use</h4>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Vouchers are valid for 12 months from the date of purchase and can be used on all food and drinks at Porterhouse Steakhouse.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl serif text-white italic">"The perfect gift for the meat lover in your life."</h2>
                    <p className="text-zinc-500 text-lg uppercase tracking-widest">Visit us today to purchase your voucher</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
                        <div className="text-left md:text-right">
                            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-1">Location</p>
                            <p className="text-white font-bold">24 Jewry St, Winchester SO23 8SB</p>
                        </div>
                        <div className="w-px h-12 bg-zinc-800 hidden md:block"></div>
                        <div className="text-left">
                            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-1">Contact</p>
                            <p className="text-white font-bold">01962 810500</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GiftCard;
