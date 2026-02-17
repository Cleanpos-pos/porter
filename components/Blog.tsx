
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Share2, Clock, Check, AlertCircle } from 'lucide-react';
import { BlogPost } from './BlogPostDetail';
import emailjs from '@emailjs/browser';

/**
 * Blog Component - Standardized Version
 */
export const blogPosts: BlogPost[] = [
    {
        id: 'perfect-sear',
        title: "The Art of the Perfect Sear: Tips from Our Master Chef",
        excerpt: "Discover the secrets behind our legendary steaks. From temperature control to the importance of resting your meat, we reveal it all.",
        date: "January 24, 2026",
        author: "Chef de Cuisine",
        image: "/gallery/signature-dish-1.jpg",
        category: "Masterclass",
        readTime: "5 min read",
        content: (
            <>
                <p>There is nothing quite like the sound of a steak hitting a piping hot grill. But achieving that perfect, caramelised crust while maintaining a tender, juicy interior is an art form that takes years to master. Today, our Master Chef shares the foundational secrets of the Porterhouse sear.</p>
                <div className="my-12 relative h-96 overflow-hidden rounded-lg">
                    <img src="/gallery/signature-dish-1.jpg" alt="Perfectly Seared Filet Mignon" className="w-full h-full object-cover" />
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 text-center">The Chef's Choice: A perfectly seared 10oz Filet Mignon seasoned with sea salt and thyme</p>
                </div>
                <h3 className="text-2xl font-serif text-white mt-8 mb-4">1. Temperature is Everything</h3>
                <p>Never take a steak straight from the fridge to the flame. We temper our cuts for at least 30-40 minutes, allowing the internal temperature to rise. This ensures even cooking and prevents the exterior from burning before the center is ready.</p>
                <h3 className="text-2xl font-serif text-white mt-8 mb-4">2. The Power of Salt</h3>
                <p>We use high-quality sea salt flakes. Salt doesn't just season; it draws out moisture which then creates a concentrated brine that gets reabsorbed, deeply seasoning the muscle fibers.</p>
                <h3 className="text-2xl font-serif text-white mt-8 mb-4">3. The Rest</h3>
                <p>The most important step is the one where you do nothing. Resting a steak for at least half of its cooking time allows the juices to redistribute. Cut too early, and you lose the very essence of the steak.</p>
            </>
        )
    },
    {
        id: 'grass-fed-beef',
        title: "Sourcing the Finest Grass-Fed Beef in Hampshire",
        excerpt: "A deep dive into our partnership with local farmers and why grass-fed makes all the difference in flavor and quality.",
        date: "January 15, 2026",
        author: "The Butcher",
        image: "/gallery/signature-dish-2.jpg",
        category: "Our Heritage",
        readTime: "7 min read",
        content: (
            <>
                <p>At Porterhouse, we believe that exceptional flavor starts long before the kitchen. It starts in the rolling hills of Hampshire, where our cattle graze on nutrient-rich pasture for the duration of their lives.</p>
                <div className="my-12 relative h-96 overflow-hidden rounded-lg">
                    <img src="/gallery/signature-dish-2.jpg" alt="Sliced Sirloin Steak with Red Wine and Greens" className="w-full h-full object-cover" />
                    <p className="text-[10px] uppercase tracking-widest text-zinc-500 mt-2 text-center">Our premium 28-day aged Sirloin, sliced and served with fresh Hampshire micro-greens</p>
                </div>
                <h3 className="text-2xl font-serif text-white mt-8 mb-4">Why Grass-Fed Matters</h3>
                <p>Grass-fed beef isn't just a trend; it's a return to traditional excellence. Cattle raised on natural pasture develop a more complex flavor profile—earthy, nutty, and deeply satisfying—compared to grain-fed alternatives. Furthermore, the health benefits are significant, with higher levels of Omega-3 fatty acids and Vitamin E.</p>
                <h3 className="text-2xl font-serif text-white mt-8 mb-4">Local Partnerships</h3>
                <p>We work exclusively with three select farms within a 30-mile radius of Winchester. This close proximity allows us to monitor every stage of the rearing process and ensures that our environmental footprint is kept to an absolute minimum.</p>
            </>
        )
    },
    {
        id: 'wine-pairing',
        title: "Top 5 Red Wines to Pair with a Porterhouse Steak",
        excerpt: "Elevate your dining experience with our sommelier’s top recommendations for the perfect steak and wine combination.",
        date: "January 08, 2026",
        author: "Head Sommelier",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop",
        category: "Wine & Spirits",
        readTime: "4 min read",
        content: (
            <>
                <p>A great steak deserves an equally great companion. Our cellar is curated to offer the perfect backbone to our premium Hampshire beef. Here are our sommelier's top five picks from our actual wine list.</p>
                <ul className="space-y-6 mt-12">
                    <li className="border-l-2 border-gold-dark pl-6 group/wine transition-all hover:bg-zinc-900/40 py-4">
                        <strong className="text-white block text-2xl font-serif">1. Rutini Altamira Single (Malbec, Argentina)</strong>
                        <p className="mt-2 text-zinc-400 font-light">The ultimate luxury pairing. This Mendoza icon brings immense structure and dark velvet fruits that stand up to our Wagyu Rib Eye with effortless grace.</p>
                    </li>
                    <li className="border-l-2 border-gold-dark pl-6 group/wine transition-all hover:bg-zinc-900/40 py-4">
                        <strong className="text-white block text-2xl font-serif">2. Saint Julien 2016 (Bordeaux, France)</strong>
                        <p className="mt-2 text-zinc-400 font-light">A powerhouse from the left bank. Its firm tannins and graphite notes are the classic choice for a 32oz Porterhouse, cutting through the richness with surgical precision.</p>
                    </li>
                    <li className="border-l-2 border-gold-dark pl-6 group/wine transition-all hover:bg-zinc-900/40 py-4">
                        <strong className="text-white block text-2xl font-serif">3. Cruz Alta Grand Reserve (Malbec, Argentina)</strong>
                        <p className="mt-2 text-zinc-400 font-light">A sommelier favorite. Deeply concentrated with hints of vanilla and tobacco, it provides a warm, smoky embrace for our 28-day aged Rib Eye.</p>
                    </li>
                    <li className="border-l-2 border-gold-dark pl-6 group/wine transition-all hover:bg-zinc-900/40 py-4">
                        <strong className="text-white block text-2xl font-serif">4. Lacrimus 5 Tempranillo (Rioja, Spain)</strong>
                        <p className="mt-2 text-zinc-400 font-light">For those who enjoy a brighter profile. The vibrant cherry notes and subtle oak of this Rioja beautifully highlight the natural sweetness of our pasture-raised Sirloin.</p>
                    </li>
                    <li className="border-l-2 border-gold-dark pl-6 group/wine transition-all hover:bg-zinc-900/40 py-4">
                        <strong className="text-white block text-2xl font-serif">5. Tenuta Cappallotto (Piedmont, Italy)</strong>
                        <p className="mt-2 text-zinc-400 font-light">Elegance in a glass. This Nebbiolo’s refined tannins and rose-petal aromatics are a delicate but sure-footed match for our lean, buttery Tenderloin fillet.</p>
                    </li>
                </ul>
            </>
        )
    }
];

interface BlogProps {
    onPostClick: (post: BlogPost) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostClick }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        setStatus('idle');

        try {
            const serviceId = 'service_gb7pqtd';
            const templateId = 'template_wyex1ya';
            const publicKey = 'S8TJnWXuMsqfDaOJr';

            const templateParams = {
                from_email: email,
                from_business: 'Porterhouse Blog Subscription',
                subject: 'New Newsletter Subscription',
                message: `New subscriber joining the Rare Circle: ${email}`,
                to_email: 'winchester@posso.uk',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen">
            <section className="relative py-32 md:py-48 px-6 border-b border-zinc-900 bg-[url('https://images.unsplash.com/photo-1550966841-3ee29648b30d?q=80&w=2070&auto=format&fit=crop')] bg-fixed bg-center bg-cover">
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
                    <h3 className="text-gold uppercase tracking-[0.5em] text-sm font-bold animate-fadeInUp">The Journal</h3>
                    <h1 className="text-6xl md:text-8xl serif text-white leading-tight">The <span className="text-gold-dark">Porterhouse</span> Blog</h1>
                    <p className="text-zinc-400 text-xl font-light tracking-wide max-w-2xl mx-auto">
                        Stories of passion, provenance, and the pursuit of the perfect steak.
                    </p>
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div
                    onClick={() => onPostClick(blogPosts[0])}
                    className="group cursor-pointer relative overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row shadow-2xl"
                >
                    <div className="md:w-1/2 overflow-hidden h-[400px] md:h-auto">
                        <img
                            src={blogPosts[0].image}
                            alt={blogPosts[0].title}
                            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        />
                    </div>
                    <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-6">
                        <span className="text-gold uppercase tracking-widest text-xs font-bold">{blogPosts[0].category}</span>
                        <h2 className="text-4xl serif text-white group-hover:text-gold transition-colors duration-300">
                            {blogPosts[0].title}
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed font-light">
                            {blogPosts[0].excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm">
                            <div className="flex items-center space-x-2">
                                <Calendar size={14} />
                                <span>{blogPosts[0].date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User size={14} />
                                <span>{blogPosts[0].author}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gold/80">
                                <Clock size={14} />
                                <span>{blogPosts[0].readTime}</span>
                            </div>
                        </div>
                        <button className="flex items-center space-x-3 text-white uppercase tracking-widest text-sm font-bold group-hover:translate-x-3 transition-transform duration-300">
                            <span>Read Story</span>
                            <ArrowRight size={18} className="text-gold" />
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900">
                <div className="flex justify-between items-end mb-16">
                    <div className="space-y-4">
                        <h3 className="text-white text-3xl serif italic">Recent Articles</h3>
                        <div className="w-20 h-1 bg-gold-dark"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {blogPosts.slice(1).map((post) => (
                        <div
                            key={post.id}
                            onClick={() => onPostClick(post)}
                            className="group cursor-pointer space-y-8"
                        >
                            <div className="relative overflow-hidden h-80 border border-zinc-800 shadow-xl">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-6 left-6">
                                    <span className="bg-[#0a0a0a]/90 backdrop-blur-md px-4 py-2 text-zinc-300 text-[10px] uppercase tracking-widest border border-zinc-800">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-3xl serif text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                                    {post.title}
                                </h3>
                                <p className="text-zinc-500 line-clamp-2 leading-relaxed font-light">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-900">
                                    <div className="flex items-center space-x-4 text-zinc-600 text-[10px] uppercase tracking-widest">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Share2 size={16} className="text-zinc-700 hover:text-gold cursor-pointer transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-32 bg-[#0d0d0d] border-t border-zinc-900">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl serif text-white">Join the <span className="text-gold-dark italic">Rare</span> Circle</h2>
                        <p className="text-zinc-400 text-lg font-light tracking-wide max-w-xl mx-auto">
                            Subscribe for exclusive insights, event invitations, and a deep dive into the world of premium beef.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto space-y-6">
                        <form className="flex flex-col md:flex-row gap-4" onSubmit={handleSubscribe}>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-grow bg-transparent border border-zinc-800 px-6 py-4 text-white text-xs tracking-widest focus:border-gold-dark outline-none transition-colors"
                            />
                            <button
                                disabled={isSubmitting}
                                className="bg-gold-dark hover:bg-gold text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all disabled:opacity-50 flex items-center justify-center min-w-[140px]"
                            >
                                {isSubmitting ? (
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : 'Subscribe'}
                            </button>
                        </form>

                        {status === 'success' && (
                            <div className="flex items-center justify-center space-x-2 text-green-500 text-sm animate-fadeIn">
                                <Check size={16} />
                                <span>You're in. Welcome to the Circle.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center justify-center space-x-2 text-gold text-sm animate-fadeIn">
                                <AlertCircle size={16} />
                                <span>Something went wrong. Please try again.</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
