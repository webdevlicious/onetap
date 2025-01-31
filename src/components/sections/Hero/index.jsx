/**
 * @file Hero/index.jsx
 * @description Primary landing section component for OneTapRecruit that showcases the main value 
 * proposition and drives initial user engagement. Features responsive design, smooth animations,
 * and clear calls-to-action.
 * 
 * @component Hero
 * @author Claude AI
 * @version 1.0.0
 */

import { memo } from 'react';
import PropTypes from 'prop-types';
import { HERO_CONTENT } from '../../../config/constants';
import { Section, PrimaryButton } from '../../common';

/**
 * BenefitList - Renders list of key benefits with check icons
 */
const BenefitList = memo(({ benefits }) => (
  <ul className="font-opensans text-body text-blue-950 mb-8 space-y-3" role="list">
    {benefits.map((benefit, index) => (
      <li 
        key={index}
        className="flex items-start"
      >
        {/* Check Icon */}
        <svg 
          className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
          fill="currentColor" 
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
        </svg>
        <span>{benefit}</span>
      </li>
    ))}
  </ul>
));

BenefitList.displayName = 'BenefitList';
BenefitList.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired
};

/**
 * HeroImage - Handles image loading and placeholder states
 */
const HeroImage = memo(({ src, alt }) => (
  <div className="bg-gray-200 rounded-2xl aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] 
                 flex items-center justify-center overflow-hidden shadow-xl 
                 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="eager" // Load immediately as it's above the fold
        decoding="async" // Optimize decode timing
      />
    ) : (
      <div className="relative w-full h-full p-8">
        <span className="absolute inset-0 flex items-center justify-center 
                      text-placeholder text-gray-400 font-opensans">
          Hero Image Placeholder
        </span>
      </div>
    )}
  </div>
));

HeroImage.displayName = 'HeroImage';
HeroImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired
};

/**
 * Hero component - Primary landing section with value proposition and CTA
 */
const Hero = ({
  content = HERO_CONTENT,
  onCtaClick = () => {},
  imageSrc
}) => {
  return (
    <Section
      className="pt-20"
      background="gray"
      role="banner"
    >
      <div className="max-w-7xl mx-auto pt-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            {/* Main Headline */}
            <h1 className="font-montserrat font-bold text-4xl lg:text-h1 mb-4 
                         text-gray-900 animate-fade-in">
              {content.title}
            </h1>
            
            {/* Subheadline */}
            <p className="font-opensans text-lg lg:text-h5 text-gray-700 mb-6">
              {content.subtitle}
            </p>
            
            {/* Benefits List */}
            <BenefitList benefits={content.benefits} />

            {/* Value Proposition */}
            <p className="font-opensans text-gray-700 mb-8 italic">
              {content.valueProposition}
            </p>

            {/* CTA Button */}
            <PrimaryButton
              onClick={onCtaClick}
              size="large"
              fullWidth
              className="sm:w-auto"
            >
              {content.ctaText}
            </PrimaryButton>
          </div>

          {/* Right Column - Image */}
          <HeroImage
            src={imageSrc}
            alt="Student athlete succeeding with OneTapRecruit"
          />
        </div>
      </div>
    </Section>
  );
};

Hero.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    valueProposition: PropTypes.string.isRequired,
    ctaText: PropTypes.string.isRequired
  }),
  onCtaClick: PropTypes.func,
  imageSrc: PropTypes.string
};

export default memo(Hero);