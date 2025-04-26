"use client"
import { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
        const { language } = useLanguage();
  
  // Language content
  const content = {
    english: {
      pageTitle: 'Temple Gallery',
      pageSubtitle: 'Explore our temple through images',
      categories: ['All', 'Temple Architecture', 'Festivals', 'Events', 'Pujas'],
      closeButton: 'Close',
      loading: 'Loading gallery...'
    },
    tamil: {
      pageTitle: 'கோவில் கேலரி',
      pageSubtitle: 'படங்கள் மூலம் எங்கள் கோவிலை கண்டறியுங்கள்',
      categories: ['அனைத்தும்', 'கோவில் கட்டிடக்கலை', 'விழாக்கள்', 'நிகழ்வுகள்', 'பூஜைகள்'],
      closeButton: 'மூடு',
      loading: 'கேலரி ஏற்றப்படுகிறது...'
    }
  };

  // Sample gallery data - in a real app this would come from your database
  const galleryItems = [
    { id: 1, category: 'Temple Architecture', image: '/images/gallery1.jpg' },
    { id: 2, category: 'Temple Architecture', image: '/images/gallery3.jpg' },
    { id: 3, category: 'Festivals', image: '/images/gallery4.jpg' },
    { id: 4, category: 'Events', image: '/images/gallery5.jpg' },
    { id: 5, category: 'Pujas', image: '/images/temple.png' },
    { id: 6, category: 'Festivals', image: '/images/entrance.jpg' },
    { id: 7, category: 'Events', image: '/images/samyam.jpg' },
    { id: 8, category: 'Temple Architecture', image: '/images/gallery2.jpg' },
    { id: 9, category: 'Pujas', image: '/images/koil-1.png' },
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (imageId) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (direction === 'next' && currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].id);
    } else if (direction === 'prev' && currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1].id);
    }
  };

  

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-amber-50">
        <div className="text-center">
          <Camera className="animate-pulse text-orange-600 h-16 w-16 mx-auto mb-4" />
          <p className="text-lg text-orange-800">{content[language].loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 pt-24 pb-16">
      {/* Page Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">
            {content[language].pageTitle}
          </h1>
          <p className="text-xl text-orange-700">
            {content[language].pageSubtitle}
          </p>
        </div>
        
        {/* Language Toggle */}
      
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {content[language].categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index === 0 ? 'All' : content.english.categories[index])}
              className={`px-4 py-2 rounded-md transition-all ${
                (index === 0 && activeCategory === 'All') || 
                (index > 0 && activeCategory === content.english.categories[index])
                  ? 'bg-orange-600 text-white'
                  : 'bg-white text-orange-800 hover:bg-orange-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Gallery Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 cursor-pointer bg-white"
              onClick={() => openLightbox(item.id)}
            >
              <img
                src={item.image}
                alt={`Gallery item ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-white font-medium">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-amber-200 transition-colors"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">{content[language].closeButton}</span>
            </button>
            
            <div className="bg-black p-2 rounded-lg shadow-2xl">
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt={`Gallery item ${selectedImage}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -ml-12">
              <button
                onClick={() => navigateImage('prev')}
                className="text-white p-2 hover:text-amber-200 transition-colors disabled:opacity-30"
                disabled={filteredItems.findIndex(item => item.id === selectedImage) === 0}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -mr-12">
              <button
                onClick={() => navigateImage('next')}
                className="text-white p-2 hover:text-amber-200 transition-colors disabled:opacity-30"
                disabled={filteredItems.findIndex(item => item.id === selectedImage) === filteredItems.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}