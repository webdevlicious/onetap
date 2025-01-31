/**
 * @file FAQs/index.jsx
 * @description An accessible, mobile-optimized FAQ accordion component with smooth animations 
 * and comprehensive user interactions. Features include:
 * - Smooth height animations for accordion sections
 * - Mobile responsive design
 * - Keyboard accessibility
 * - ARIA attributes for screen readers
 * - Touch support
 * - Automatic image loading based on viewport
 * 
 * @component FAQs
 * @author Claude AI
 * @version 1.0.0
 */

// Core React imports
import { useState, useEffect, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { MessageSquare, ChevronDown } from 'lucide-react';
import { FAQsData } from '../../../data/faqs';

/**
 * Individual FAQ item component with animation and accessibility features.
 */
const FAQItem = memo(({ faq, isOpen, onToggle }) => {
  // Track element height for smooth animation
  const [contentHeight, setContentHeight] = useState(0);
  const [contentRef, setContentRef] = useState(null);

  // Update content height when content changes
  useEffect(() => {
    if (contentRef) {
      setContentHeight(contentRef.scrollHeight);
    }
  }, [contentRef, faq.content]);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Question Button */}
      <button
        onClick={() => onToggle(faq.id)}
        className={`w-full text-left py-4 flex justify-between items-start gap-4 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-primary 
                  focus-visible:ring-offset-2 rounded-lg transition-colors 
                  ${isOpen ? 'text-primary' : 'text-gray-900 hover:text-primary'}`}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${faq.id}`}
      >
        <span className="font-montserrat text-body font-medium leading-snug">
          {faq.title}
        </span>
        <ChevronDown 
          className={`w-5 h-5 flex-shrink-0 transform transition-transform duration-300
                    ${isOpen ? 'rotate-180 text-primary' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Answer Content */}
      <div
        id={`faq-content-${faq.id}`}
        ref={setContentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
        aria-hidden={!isOpen}
        role="region"
      >
        <div className="pb-6">
          <p className="font-opensans text-body text-gray-600 leading-relaxed">
            {faq.content}
          </p>
        </div>
      </div>
    </div>
  );
});

// Set display name for memo'd component
FAQItem.displayName = 'FAQItem';

// PropTypes for FAQItem
FAQItem.propTypes = {
  faq: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    placeholder: PropTypes.string
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

/**
 * FAQ image display component with transitions.
 */
const FAQImage = memo(({ faq }) => (
  <div className="relative w-full pb-[66.67%] bg-gray-100 rounded-2xl overflow-hidden 
                shadow-xl transform transition-all duration-300 hover:scale-[1.02]">
    <div className="absolute inset-0 flex items-center justify-center rounded-2xl 
                  bg-gray-200 text-gray-500 font-montserrat text-body">
      {faq.placeholder}
    </div>
  </div>
));

// Set display name for memo'd component
FAQImage.displayName = 'FAQImage';

// PropTypes for FAQImage
FAQImage.propTypes = {
  faq: PropTypes.shape({
    placeholder: PropTypes.string.isRequired
  }).isRequired
};

/**
 * Main FAQs section component with mobile optimization.
 */
const FAQsSection = () => {
  const [openSection, setOpenSection] = useState('section1');
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize for mobile optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoized toggle handler
  const handleSectionChange = useCallback((sectionId) => {
    setOpenSection(prev => prev === sectionId ? 'section1' : sectionId);
  }, []);

  const activeFAQ = FAQsData.find(faq => faq.id === openSection) || FAQsData[0];

  return (
    <section 
      id="faqs" 
      className="pt-12 pb-4 bg-gray-50"
      aria-labelledby="faqs-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 
            id="faqs-title"
            className="font-montserrat font-bold text-h2 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="font-opensans text-h6 text-gray-700">
            Find answers to your most pressing questions about getting your 
            student-athlete recruited below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid ${isMobile ? 'gap-8' : 'md:grid-cols-2 gap-12'}`}>
          {/* FAQ List */}
          <div 
            className="overflow-y-auto pr-2 scrollbar-hide"
            role="tablist"
            aria-orientation="vertical"
          >
            <div className="space-y-4">
              {FAQsData.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openSection === faq.id}
                  onToggle={handleSectionChange}
                />
              ))}
            </div>
          </div>

          {/* Image Section - Hidden on mobile */}
          {!isMobile && (
            <div className="hidden md:flex items-start">
              <FAQImage faq={activeFAQ} />
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="font-opensans text-gray-700 text-body mb-8">
            Have additional questions? We're here to help you navigate the 
            recruiting journey.
          </p>
          <a 
            href="sms:+1234567890"
            className="btn inline-flex items-center gap-2 px-8 py-3 
                     rounded-lg shadow-md hover:shadow-lg transform 
                     hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Text us your questions"
          >
            <MessageSquare className="w-5 h-5" aria-hidden="true" />
            <span>Text Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(FAQsSection);