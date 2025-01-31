/**
 * @fileoverview TestimonialSection Component - A touch-friendly, responsive carousel
 * that displays customer testimonials with ratings and smooth animations.
 *
 * @module TestimonialSection
 * @requires react
 * @requires lucide-react
 * @requires prop-types
 */

import { useState, useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Star, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

/**
 * Quote icon component for visual styling
 * @component
 * @returns {React.ReactElement}
 */
const QuoteIcon = memo(() => (
  <svg 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 text-primary"
    aria-hidden="true"
  >
    <path 
      d="M9.12486 8C4.28486 11.52 2.66686 14.72 2.66686 19.36C2.66686 24.96 6.45486 28 10.0069 28C13.3189 28 15.8909 25.28 15.8909 22.08C15.8909 18.88 13.3189 16.48 10.0069 16.48C9.33486 16.48 8.45486 16.64 8.24886 16.72C8.52886 14.08 10.5589 11.76 13.5989 9.6L9.12486 8ZM25.1249 8C20.2849 11.52 18.6669 14.72 18.6669 19.36C18.6669 24.96 22.4549 28 26.0069 28C29.3189 28 31.8909 25.28 31.8909 22.08C31.8909 18.88 29.3189 16.48 26.0069 16.48C25.3349 16.48 24.4549 16.64 24.2489 16.72C24.5289 14.08 26.5589 11.76 29.5989 9.6L25.1249 8Z" 
      fill="currentColor"
    />
  </svg>
));

QuoteIcon.displayName = 'QuoteIcon';

/**
 * TestimonialCard Component - Individual testimonial display
 * @component
 * @param {Object} props
 * @param {Testimonial} props.testimonial - Testimonial data
 * @returns {React.ReactElement}
 */
const TestimonialCard = memo(({ testimonial }) => (
  <div 
    className="min-w-[350px] bg-white p-8 rounded-2xl shadow-sm snap-start
               transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
  >
    <QuoteIcon />
    <h3 className="text-h3 mb-4">{testimonial.quote}</h3>
    <p className="text-body text-gray-600 mb-6">{testimonial.content}</p>
    <div className="flex justify-between items-center">
      <div className="flex gap-1" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span className="text-small text-gray-600">{testimonial.author}</span>
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quote: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

/**
 * TestimonialSection Component - Main testimonial carousel section
 * @component
 * @returns {React.ReactElement}
 */
const TestimonialSection = () => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "Helped my son get recruited by his dream school!",
      content: "Our experience with OneTapRecruit was incredible. The AI-powered platform connected us with coaches we never would have reached otherwise.",
      rating: 5,
      author: "@proud_parent"
    },
    {
      id: 2,
      quote: "Amazing service and support!",
      content: "The recruitment process was so much easier with OneTapRecruit. Their technology really does make a difference in getting noticed by coaches.",
      rating: 5,
      author: "@grateful_mom"
    },
    {
      id: 3,
      quote: "Game-changing platform!",
      content: "OneTapRecruit streamlined everything. From profile creation to coach connections, it was all seamless and professional.",
      rating: 5,
      author: "@sports_dad"
    },
    {
      id: 4,
      quote: "Best investment we made!",
      content: "The results speak for themselves. Multiple offers and opportunities we wouldn't have found otherwise. Highly recommend!",
      rating: 5,
      author: "@team_parent"
    },
  ];

  /**
   * Updates scroll buttons state based on scroll position
   */
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < (container.scrollWidth - container.clientWidth));
    }
  };

  // Set up scroll position monitoring
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
    }
    return () => container?.removeEventListener('scroll', updateScrollButtons);
  }, []);

  /**
   * Handles smooth scrolling in the carousel
   * @param {('left'|'right')} direction - Scroll direction
   */
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container || isDragging) return;

    const scrollAmount = 400;
    const newScrollLeft = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  /**
   * Touch event handlers for swipe functionality
   */
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const swipeThreshold = 50;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > swipeThreshold) {
      scroll(diff > 0 ? 'right' : 'left');
    }
  };

  return (
    <section id="reviews" className="relative bg-white py-16 px-4 pt-18 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="font-montserrat font-medium text-primary mb-4">Testimonials</span>
            <h2 className="text-h2">Success Stories</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className={`p-3 rounded-lg transition-all duration-200 ${
                canScrollLeft 
                  ? 'bg-primary hover:bg-primary-hover cursor-pointer' 
                  : 'bg-gray-100 cursor-not-allowed'
              }`}
              disabled={!canScrollLeft}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className={`w-6 h-6 ${
                canScrollLeft ? 'text-white' : 'text-gray-400'
              }`} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className={`p-3 rounded-lg transition-all duration-200 ${
                canScrollRight 
                  ? 'bg-primary hover:bg-primary-hover cursor-pointer' 
                  : 'bg-gray-100 cursor-not-allowed'
              }`}
              disabled={!canScrollRight}
              aria-label="Next testimonials"
            >
              <ChevronRight className={`w-6 h-6 ${
                canScrollRight ? 'text-white' : 'text-gray-400'
              }`} />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Testimonials carousel"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="font-opensans text-gray-700 text-body mb-8">
            Join these success stories and give your student-athlete the competitive edge they deserve.
          </p>
          <a 
            href="sms:+1234567890"
            className="btn inline-flex items-center gap-2 px-8 py-3 rounded-lg
                     shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                     transition-all duration-200 text-white hover:text-white 
                     no-underline hover:no-underline"
            aria-label="Text us to get started"
          >
            <MessageSquare className="w-5 h-5" />
            Text Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialSection);