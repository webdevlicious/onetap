/**
 * @file Footer/index.jsx
 * @description Main footer component for the OneTapRecruit sales page. Provides site navigation,
 * social media links, legal information and copyright details. Features responsive design,
 * accessibility support and smooth hover animations.
 *
 * @component Footer
 * @author Claude AI
 * @version 1.0.0
 */

import { memo } from 'react';
import PropTypes from 'prop-types';
import { SOCIAL_LINKS, LEGAL_LINKS } from '../../../config/constants';

// Import shared components
import { IconButton, PrimaryButton } from '../../common';

/**
 * Logo component with lazy loading and accessibility
 */
const Logo = memo(({ src, alt }) => (
  <div className="flex justify-center mb-2">
    <a 
      href="/" 
      className="block relative focus:outline-none focus:ring-2 
                focus:ring-primary focus:ring-offset-2 rounded-lg"
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="w-48 h-auto object-contain"
        loading="lazy"
      />
    </a>
  </div>
));

Logo.displayName = 'Logo';
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

/**
 * Social media icon component
 */
const SocialIcon = memo(({ name, url, icon }) => (
  <IconButton
    as="a"
    href={url}
    aria-label={name}
    rel="noopener noreferrer"
    target="_blank"
    variant="secondary"
    size="small"
    className="text-gray-600 hover:text-primary"
    icon={() => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d={icon} />
      </svg>
    )}
  />
));

SocialIcon.displayName = 'SocialIcon';
SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

/**
 * Main Footer component providing site-wide footer content
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100" role="contentinfo">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="relative flex flex-col sm:flex-row items-center gap-8">
          
          {/* Logo and Social Links Column */}
          <div className="flex flex-col items-center sm:w-64">
            <Logo 
              src="/src/assets/images/OTR_Primary_Logo_v2.0(Transparent).png"
              alt="OneTapRecruit Logo"
            />
            
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 w-full mb-2">
              {SOCIAL_LINKS.map((social) => (
                <SocialIcon key={social.name} {...social} />
              ))}
            </div>
          </div>

          {/* Center Links - Desktop Only */}
          <nav
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     hidden sm:flex gap-8"
            aria-label="Footer Navigation"
          >
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-opensans font-semibold text-small text-primary 
                         hover:text-primary-hover transition-colors duration-200 
                         focus:outline-none focus:ring-2 focus:ring-primary 
                         focus:ring-offset-2 rounded-lg px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="sm:ml-auto">
            <PrimaryButton
              size="large"
              aria-label="Get started with recruitment"
            >
              Get Recruited
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-caption text-white py-2 font-opensans">
            © {currentYear} OneTapRecruit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);