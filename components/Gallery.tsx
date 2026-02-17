import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

const galleryImages: GalleryImage[] = [
    // Ambiance - Tables, chairs, and restaurant features (6 images)
    { src: '/gallery/dining-room-1.jpg', alt: 'Dining Room', category: 'Ambiance' },
    { src: '/gallery/dining-room-2.jpg', alt: 'Dining Room', category: 'Ambiance' },
    { src: '/gallery/wine-display.jpg', alt: 'Wine Display', category: 'Ambiance' },
    { src: '/gallery/meat-aging.jpg', alt: 'Meat Aging Cabinet', category: 'Ambiance' },
    { src: '/gallery/porterhouse-sign.jpg', alt: 'Porterhouse Sign', category: 'Ambiance' },

    // Our Team - People images (4 images)
    { src: '/gallery/dining-room-3.jpg', alt: 'Team', category: 'Our Team' },
    { src: '/gallery/chef-portrait.jpg', alt: 'Chef', category: 'Our Team' },
    { src: '/gallery/kitchen-action.jpg', alt: 'Kitchen', category: 'Our Team' },
    { src: '/gallery/chef-plating.jpg', alt: 'Chef Plating', category: 'Our Team' },

    // Signature Dishes - Food images (6 images)
    { src: '/gallery/signature-dish-1.jpg', alt: 'Signature Dish', category: 'Signature Dishes' },
    { src: '/gallery/signature-dish-2.jpg', alt: 'Signature Dish', category: 'Signature Dishes' },
    { src: '/gallery/lamb-rack-wine.jpg', alt: 'Lamb Rack', category: 'Signature Dishes' },
    { src: '/gallery/signature-salmon.jpg', alt: 'Signature Salmon', category: 'Signature Dishes' },
    { src: '/gallery/vegetable-tower.jpg', alt: 'Vegetable Tower', category: 'Signature Dishes' },
    { src: '/gallery/sauce-presentation.jpg', alt: 'Sauce Presentation', category: 'Signature Dishes' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [filter, setFilter] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(galleryImages.map(img => img.category)))];

    const filteredImages = filter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;

        const newIndex = direction === 'prev'
            ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
            : (selectedImage + 1) % filteredImages.length;

        setSelectedImage(newIndex);
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-serif text-amber-500 mb-4 tracking-wide">
                        Our Gallery
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                        Experience the elegance and artistry of Porterhouse through our curated collection
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category
                                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/50 scale-105'
                                : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 backdrop-blur-sm'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                            onClick={() => openLightbox(index)}
                        >
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Glassmorphism Overlay on Hover */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-amber-400 text-sm font-medium mb-1">{image.category}</p>
                                        <p className="text-white text-lg font-serif">{image.alt}</p>
                                    </div>
                                    <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                                </div>
                            </div>

                            {/* Decorative Corner Accent */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors duration-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                            aria-label="Close gallery"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}
                            className="absolute left-6 text-white hover:text-amber-500 transition-colors duration-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}
                            className="absolute right-6 text-white hover:text-amber-500 transition-colors duration-300 z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                            aria-label="Next image"
                        >
                            <ChevronRight size={32} />
                        </button>

                        {/* Image Container */}
                        <div
                            className="relative max-w-6xl max-h-[90vh] animate-scaleIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={filteredImages[selectedImage].src}
                                alt={filteredImages[selectedImage].alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />

                            {/* Image Info */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
                                <p className="text-amber-400 text-sm font-medium mb-1">
                                    {filteredImages[selectedImage].category}
                                </p>
                                <p className="text-white text-xl font-serif">
                                    {filteredImages[selectedImage].alt}
                                </p>
                                <p className="text-neutral-400 text-sm mt-2">
                                    {selectedImage + 1} / {filteredImages.length}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
        </section>
    );
};

export default Gallery;
