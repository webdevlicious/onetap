/**
 * @file HowItWorks/index.jsx
 * @description HowItWorks section component that showcases the step-by-step process 
 * for athlete recruitment using an interactive, animated interface with alternating 
 * layout for better visual flow.
 * 
 * @component HowItWorks
 * @author Claude AI
 * @version 1.0.0
 */

import { memo } from 'react';
import PropTypes from 'prop-types';
import { MessageSquare } from 'lucide-react';

// Import shared components
import {
  Section,
  SectionHeading,
  PrimaryButton
} from '../../common';

// Import custom hook and constants
import { useElementVisibility } from '../../../hooks/useElementVisibility';
import { HOW_IT_WORKS_STEPS } from '../../../config/constants';

/**
 * StepCard - Individual process step component
 */
const StepCard = memo(({ step, index }) => {
  const [setRef, isVisible] = useElementVisibility();

  return (
    <div
      ref={setRef}
      className={`
        flex flex-col lg:flex-row
        ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}
        gap-8 lg:gap-12 
        items-center 
        opacity-0 
        translate-y-4 
        transition-all 
        duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
      `}
    >
      {/* Content Section */}
      <div className="w-full lg:w-[45%] space-y-6 px-4 lg:px-0">
        {/* Step indicator */}
        <span className="inline-block font-montserrat font-medium text-primary mb-2">
          {step.stepNumber}
        </span>
        
        {/* Step title */}
        <h3 className="font-montserrat text-h3 text-gray-900 mb-4">
          {step.title}
        </h3>
        
        {/* Step description */}
        <p className="font-opensans text-h6 text-gray-700 leading-relaxed">
          {step.description}
        </p>
        
        {/* Bullet points with animation */}
        <ul className="space-y-4 my-6">
          {step.bullets.map((bullet, i) => (
            <li 
              key={i} 
              className="flex items-start gap-3 animate-fadeIn" 
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <svg 
                className="w-5 h-5 text-primary mt-1 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-opensans text-body text-gray-600">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
        
        {/* Optional CTA button */}
        {step.ctaText && (
          <div className="mt-8 sm:mt-6">
            <PrimaryButton
              size="large"
              className="w-full sm:w-auto"
              aria-label={step.ctaText}
            >
              {step.ctaText}
            </PrimaryButton>
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[55%] px-4 lg:px-0">
        <div 
          className="relative w-full aspect-video bg-gray-200 rounded-lg 
                   overflow-hidden shadow-xl flex items-center justify-center 
                   text-gray-600 font-opensans text-body transform 
                   transition-all duration-500 hover:scale-[1.02]"
        >
          {step.placeholder}
        </div>
      </div>
    </div>
  );
});

StepCard.displayName = 'StepCard';
StepCard.propTypes = {
  step: PropTypes.shape({
    stepNumber: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string.isRequired,
    ctaText: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

/**
 * Main HowItWorks section component
 */
const HowItWorks = () => {
  return (
    <Section
      id="how-it-works"
      background="gray"
      className="py-12 lg:py-20"
    >
      <div className="max-w-[1296px] mx-auto">
        {/* Header Section */}
        <SectionHeading
          title="Get Recruited Easily"
          subtitle="OneTapRecruit's 4-step process takes the guessing out of college sports 
                   recruiting, making it easier for your student-athlete to get noticed and recruited."
        />

        {/* Steps Section */}
        <div className="space-y-24 lg:space-y-32">
          {HOW_IT_WORKS_STEPS.map((step, index) => (
            <StepCard 
              key={step.stepNumber} 
              step={step} 
              index={index} 
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center px-4 lg:px-0">
          <p className="font-opensans text-h5 italic text-gray-700 mb-8 max-w-3xl mx-auto">
            Don't let your child go undiscovered. Contact OneTapRecruit today and give 
            your student-athlete the edge they need to stand out in the recruiting process.
          </p>
          
          <PrimaryButton
            size="large"
            className="mx-auto"
            icon={MessageSquare}
            aria-label="Contact us to start recruiting process"
          >
            Text Us Today
          </PrimaryButton>
        </div>
      </div>
    </Section>
  );
};

export default memo(HowItWorks);