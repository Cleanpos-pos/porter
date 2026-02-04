
import React, { useEffect } from 'react';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';

export interface BlogPost {
    id: string;
    title: string;
    content: React.ReactNode;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    readTime: string;
}

interface BlogPostDetailProps {
    post: BlogPost;
    onBack: () => void;
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ post, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen pb-24">
            {/* Hero Header */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>

                <div className="absolute inset-0 flex items-end justify-start px-6 pb-12 md:pb-24">
                    <div className="max-w-7xl mx-auto w-full space-y-6">
                        <button
                            onClick={onBack}
                            className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group mb-8"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="uppercase tracking-widest text-xs font-bold">Back to Journal</span>
                        </button>

                        <div className="space-y-4">
                            <span className="bg-gold-dark text-white px-4 py-1 text-[10px] uppercase tracking-[0.2em] font-bold inline-block">
                                {post.category}
                            </span>
                            <h1 className="text-4xl md:text-7xl serif text-white leading-tight max-w-4xl">
                                {post.title}
                            </h1>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-zinc-400 text-sm border-t border-zinc-800 pt-8 mt-8">
                            <div className="flex items-center space-x-2">
                                <User size={16} className="text-gold" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar size={16} className="text-gold" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock size={16} className="text-gold" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <article className="max-w-4xl mx-auto px-6 mt-16 md:mt-24">
                <div className="prose prose-invert prose-gold max-w-none">
                    <div className="text-zinc-300 leading-relaxed text-lg md:text-xl font-light space-y-8">
                        {post.content}
                    </div>
                </div>

                {/* Footer Tools */}
                <div className="mt-20 pt-10 border-t border-zinc-900 flex justify-between items-center">
                    <div className="flex space-x-4">
                        <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Share this story:</span>
                        <div className="flex space-x-4 text-zinc-400">
                            <Share2 size={18} className="hover:text-gold cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="mt-32 py-24 bg-[#0d0d0d] border-y border-zinc-900 text-center px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h3 className="text-3xl serif text-white">Experience it yourself</h3>
                    <p className="text-zinc-400 font-light">Join us at Porterhouse and taste the dedication in every bite.</p>
                    <button
                        onClick={() => window.open('https://table-maestro-v2.web.app/public/booking?tenant=a8375505-b197-42c9-9d6e-1a06278d0902', '_blank')}
                        className="px-8 py-4 bg-gold-dark hover:bg-gold text-white text-xs font-bold uppercase tracking-widest transition-all"
                    >
                        Reserve a Table
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BlogPostDetail;
