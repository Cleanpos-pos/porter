import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
    src: string;
    alt: string;
    category: string;
}

const galleryImages: GalleryImage[] = [
    // Ambiance - Tables, chairs, and restaurant features (6 images)
    { src: '/gallery/dining-room-2.jpg', alt: 'Plated Food Display', category: 'Ambiance' },
    { src: '/gallery/dining-room-3.jpg', alt: 'Dining Room', category: 'Ambiance' },
    { src: '/gallery/meat-aging.jpg', alt: 'Meat Aging Cabinet', category: 'Ambiance' },
    { src: '/gallery/porterhouse-sign.jpg', alt: 'Porterhouse Sign', category: 'Ambiance' },

    // Our Team - People images (5 images)
    { src: '/gallery/wine-display.jpg', alt: 'Chef', category: 'Our Team' },
    { src: '/gallery/chef-portrait.jpg', alt: 'Chef', category: 'Our Team' },
    { src: '/gallery/kitchen-action.jpg', alt: 'Kitchen', category: 'Our Team' },
    { src: '/gallery/chef-plating.jpg', alt: 'Chef Plating', category: 'Our Team' },
    { src: '/gallery/smiling-waiter.jpg', alt: 'Our Friendly Staff', category: 'Our Team' },

    // Signature Dishes - Food images
    { src: '/gallery/dining-room-1.jpg', alt: 'Signature Steak', category: 'Signature Dishes' },
    { src: '/gallery/signature-dish-1.jpg', alt: 'Signature Dish', category: 'Signature Dishes' },
    { src: '/gallery/lamb-rack-wine.jpg', alt: 'Lamb Rack', category: 'Signature Dishes' },
    { src: '/gallery/signature-salmon.jpg', alt: 'Signature Salmon', category: 'Signature Dishes' },
    { src: '/gallery/vegetable-tower.jpg', alt: 'Vegetable Tower', category: 'Signature Dishes' },
    { src: '/gallery/sauce-presentation.jpg', alt: 'Sauce Presentation', category: 'Signature Dishes' },
    { src: '/gallery/salmon-scallops.jpg', alt: 'Salmon and Scallops', category: 'Signature Dishes' },
    { src: '/gallery/king-prawns.jpg', alt: 'King Prawns', category: 'Signature Dishes' },
    { src: '/gallery/k1.jpeg', alt: 'Signature Dish', category: 'Signature Dishes' },
    { src: '/gallery/K2.jpeg', alt: 'Signature Dish', category: 'Signature Dishes' },
    { src: '/gallery/H1.jpeg', alt: 'Restaurant Scene', category: 'Ambiance' },
    { src: '/gallery/h2.jpeg', alt: 'Culinary Creation', category: 'Signature Dishes' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            ? (selectedImage - 1 + galleryImages.length) % galleryImages.length
            : (selectedImage + 1) % galleryImages.length;

        setSelectedImage(newIndex);
    };

    return (
        <section className="py-20 px-6 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
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

                            {/* Subtle bottom gradient for logo */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                            {/* PORTERHOUSE Logo */}
                            <div className="absolute bottom-3 left-4">
                                <p className="text-white text-[10px] md:text-xs font-display tracking-[0.15em] opacity-70" style={{ fontWeight: 300 }}>
                                    PORTERHOUSE
                                </p>
                            </div>
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
                                src={galleryImages[selectedImage].src}
                                alt={galleryImages[selectedImage].alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            />

                            {/* PORTERHOUSE Logo */}
                            <div className="absolute bottom-4 left-6">
                                <p className="text-white text-xs md:text-sm font-display tracking-[0.15em] opacity-70" style={{ fontWeight: 300 }}>
                                    PORTERHOUSE
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
