/**
 * @file CTA/index.jsx
 * @description A compelling call-to-action section that drives user engagement
 * with smooth animations and responsive design. Features gradient backgrounds,
 * animated content reveals, and mobile-optimized layout.
 * 
 * @component CTASection
 * @author Claude AI
 * @version 1.0.0
 */

// Core dependencies
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Import shared components
import {
  Section,
  PrimaryButton,
  GradientBackground
} from '../../common';

const CTASection = ({
  title = "Get Recruited Now",
  description = "College Coaches Can't Recruit Your Athlete If They Don't Know They Exist. Our Platform Places Your Athlete's Profile Directly In Front Of College Coaches Nationwide. Don't Let Your Child's Talent Go Unnoticed While Their Peers Get All The Attention.",
  buttonText = "START YOUR JOURNEY",
  onCtaClick = () => {}
}) => {
  // State management for animation and mobile detection
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('cta-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="cta-section"
      className="py-16 sm:py-20"
      background="white"
    >
      <div
        className={`
          relative 
          overflow-hidden 
          rounded-2xl 
          bg-primary
          transform 
          transition-all 
          duration-1000 
          ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        {/* Gradient Background */}
        <GradientBackground color="primary" opacity={0.2} animated />
        
        {/* Content Container */}
        <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 flex flex-col items-center text-center">
          {/* Main Text */}
          <h2 
            className={`
              text-2xl 
              sm:text-3xl 
              lg:text-h2 
              text-white 
              mb-4 
              font-montserrat
              transform 
              transition-all 
              duration-700 
              delay-100
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {title}
          </h2>
          
          <p 
            className={`
              text-body 
              text-white/90 
              mb-8 
              max-w-2xl 
              font-opensans
              transform 
              transition-all 
              duration-700 
              delay-200
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            {description}
          </p>

          {/* CTA Button */}
          <div
            className={`
              transform 
              transition-all 
              duration-700 
              delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <PrimaryButton
              onClick={onCtaClick}
              className="bg-white text-primary hover:bg-gray-50"
              size="large"
            >
              {buttonText}
            </PrimaryButton>
          </div>

          {/* Mobile-specific elements */}
          {isMobile && (
            <div className="mt-8 w-full">
              <div className="h-px bg-white/20" />
              <p className="text-white/80 text-sm mt-4 font-opensans">
                Join hundreds of successful student-athletes
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

CTASection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonText: PropTypes.string,
  onCtaClick: PropTypes.func
};

export default CTASection;