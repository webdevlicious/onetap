/**
 * @file LogoScroll/index.jsx
 * @description A responsive, touch-enabled logo carousel component that displays 
 * continuously scrolling logos with smooth animations and pause-on-hover functionality.
 * Features dual-direction scrolling, mobile touch support, and accessible controls.
 * 
 * @component LogoScrollSection
 * @author Claude AI
 * @version 1.0.0
 */

import { useState, useRef, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Import shared components and hooks
import { Section, SectionHeading } from '../../common';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { logoUrls } from '../../../data/logos';

/**
 * Individual logo row component with scroll animation
 */
const LogoRow = memo(({ 
  direction = 'left',
  rowIndex,
  speed = 400,
  pauseDuration = 2000,
  logos
}) => {
  const { translateX, isPaused, handlers } = useScrollAnimation({
    direction,
    speed,
    pauseDuration
  });

  // Double the logos for seamless loop
  const displayLogos = [...logos, ...logos];

  return (
    <div
      className="relative whitespace-nowrap overflow-hidden group"
      {...handlers}
      role="region"
      aria-label={`Scrolling logos row ${rowIndex + 1}`}
    >
      <div
        className={`inline-flex items-center transform transition-transform duration-200 
          ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}
          ${isPaused ? 'opacity-80' : ''}`}
        style={{
          willChange: 'transform',
          transform: `translateX(${translateX}%)`
        }}
      >
        {displayLogos.map((logo, index) => (
          <div 
            key={`${rowIndex}-${index}`}
            className="mx-6 my-2 transform transition-transform duration-200 hover:scale-110"
          >
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src={logo}
                alt={`College Logo ${index + 1}`}
                className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

LogoRow.displayName = 'LogoRow';
LogoRow.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  rowIndex: PropTypes.number.isRequired,
  speed: PropTypes.number,
  pauseDuration: PropTypes.number,
  logos: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * Main LogoScroll section component
 */
const LogoScrollSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [chunkedLogos, setChunkedLogos] = useState([]);

  // Split logos into chunks for rows
  useEffect(() => {
    const chunkSize = Math.ceil(logoUrls.length / 2);
    const chunks = [
      logoUrls.slice(0, chunkSize),
      logoUrls.slice(chunkSize, chunkSize * 2)
    ];
    setChunkedLogos(chunks);
  }, []);

  return (
    <Section 
      ref={sectionRef}
      className="w-full overflow-hidden py-20"
      aria-label="College Connections Showcase"
    >
      {/* Header content */}
      <SectionHeading
        title="Connect with Colleges Nationwide"
        subtitle="Our AI helps your student-athlete get noticed by college coaches at all levels. 
                We match your child with the right college programs and put their profile in 
                front of coaches looking for players just like them."
      />

      {/* Logo scroll container */}
      <div 
        className={`relative transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Logo rows */}
        <div className="flex flex-col gap-2">
          {chunkedLogos.map((logos, index) => (
            <LogoRow
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              rowIndex={index}
              speed={400 - (index * 50)}
              logos={logos}
            />
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="text-center mt-16">
        <p className="font-opensans text-body italic text-gray-600 max-w-2xl mx-auto px-4 mb-8">
          With OneTapRecruit, no college is out of reach. Our technology levels the 
          playing field, giving your student-athlete the exposure they need to succeed.
        </p>
        
        <button 
          className="btn px-8 py-4 rounded-lg shadow-lg hover:shadow-xl 
                   transform hover:-translate-y-0.5 transition-all duration-200"
          aria-label="Get started with recruitment"
        >
          Get Recruited Now
        </button>
      </div>
    </Section>
  );
};

export default memo(LogoScrollSection);