import React, { useState, useEffect } from 'react';
import testimonialiconimg from '../../assets/testimonialicon.png'
import clientlogoimg from '../../assets/clientlogo.png'

const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const testimonials = [
  {
    id: 1,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "David Martinez",
    position: "Property Manager",
    rating: 5
  },
  {
    id: 2,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Sarah Johnson",
    position: "Bank Asset Manager",
    rating: 5
  },
  {
    id: 3,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Michael Chen",
    position: "Real Estate Director",
    rating: 5
  },
  {
    id: 4,
    logo: testimonialiconimg,
    text: "We've worked with several property preservation companies, but Cardinal Asset stands out for their reliability and quality. Their maintenance crews are skilled, courteous, and efficient. The value they provide is exceptional.",
    avatar: clientlogoimg,
    name: "Emily Roberts",
    position: "Asset Management VP",
    rating: 5
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Get previous and next indices for partial view
  const getPrevIndex = () => currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;

  const TestimonialCard = ({ testimonial, type = 'center' }) => {
    const isCenter = type === 'center';
    
    return (
      <div 
        className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 transition-all duration-700 ease-in-out ${
          !isCenter 
            ? 'opacity-40 blur-sm scale-95 pointer-events-none' 
            : 'opacity-100 scale-100'
        }`}
        onClick={() => !isCenter && goToSlide(testimonials.findIndex(t => t.id === testimonial.id))}
      >
        {/* Logo */}
        <div className="mb-4 sm:mb-6 transform transition-all duration-700">
          <img 
            src={testimonial.logo} 
            alt="Company logo" 
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-700 line-clamp-6 sm:line-clamp-none">
          "{testimonial.text}"
        </p>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-4 sm:mb-6 transition-all duration-700"></div>

        {/* Author Info */}
        <div className="flex items-center justify-between flex-wrap gap-3 sm:gap-4 transition-all duration-700">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Avatar Circle with Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Name and Position */}
            <div className="min-w-0">
              <h4 className="font-semibold text-black text-base sm:text-lg truncate">
                {testimonial.name}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                {testimonial.position}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
            {[...Array(testimonial.rating)].map((_, index) => (
              <Star
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 fill-[#ff7657] text-[#ff7657]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#F7FBFF] pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 py-3 sm:py-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 px-4">
            What Our Clients Say
          </h2>
          <p className="text-black max-w-3xl mx-auto text-sm sm:text-base lg:text-lg py-2 sm:py-4 px-4">
            Don't just take our word for it - hear from the property managers, banks, 
            and asset management companies who trust Cardinal Asset
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={goToPrevious}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 xl:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <svg 
              className="w-6 h-6 text-gray-600 group-hover:text-[#ff7657] transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 xl:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 items-center justify-center group"
            aria-label="Next testimonial"
          >
            <svg 
              className="w-6 h-6 text-gray-600 group-hover:text-[#ff7657] transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials */}
          <div 
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div 
              className="flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 transition-transform duration-700 ease-in-out"
              key={currentIndex}
            >
              {/* Previous Testimonial (Partial, Blurred) - Hidden on mobile and tablet */}
              <div className="hidden xl:block w-1/4 flex-shrink-0 animate-fadeInLeft">
                <TestimonialCard testimonial={testimonials[getPrevIndex()]} type="prev" />
              </div>

              {/* Current Testimonial (Main, Centered) */}
              <div className="w-full lg:w-3/4 xl:w-2/4 flex-shrink-0 animate-fadeInScale">
                <TestimonialCard testimonial={testimonials[currentIndex]} type="center" />
              </div>

              {/* Next Testimonial (Partial, Blurred) - Hidden on mobile and tablet */}
              <div className="hidden xl:block w-1/4 flex-shrink-0 animate-fadeInRight">
                <TestimonialCard testimonial={testimonials[getNextIndex()]} type="next" />
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#ff7657] w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="lg:hidden text-center mt-4">
            <p className="text-xs text-gray-500">
              ← Swipe to navigate →
            </p>
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px) scale(0.95);
          }
          to {
            opacity: 0.4;
            transform: translateX(0) scale(0.95);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px) scale(0.95);
          }
          to {
            opacity: 0.4;
            transform: translateX(0) scale(0.95);
          }
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.7s ease-in-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.7s ease-in-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;