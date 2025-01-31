/**
 * @file Header/index.jsx
 * @description Main navigation component with mobile responsiveness, smooth scroll functionality, 
 * and dynamic header state based on scroll position. Handles primary navigation and call-to-action 
 * for the OneTapRecruit platform.
 * 
 * @component Header
 * @author Claude AI
 * @version 1.0.0
 */

import { useState, useEffect, memo } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS, HEADER_LOGO } from '../../../config/constants';
import { useScrollHeader } from '../../../hooks/useScrollHeader';
import { PrimaryButton } from '../../common';
import PropTypes from 'prop-types';

/**
 * Navigation Link Component
 */
const NavLink = memo(({ name, href, onClick, isMobile }) => (
  <a
    href={href}
    onClick={(e) => onClick(e, href)}
    className={`
      font-montserrat 
      font-medium 
      text-gray-700 
      hover:text-primary 
      transition-colors 
      duration-200 
      no-underline 
      hover:no-underline
      ${isMobile 
        ? 'block py-2 px-4 text-base hover:bg-gray-50 rounded-lg' 
        : 'px-3 py-2 text-[15px]'
      }
    `}
  >
    {name}
  </a>
));

NavLink.displayName = 'NavLink';
NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
};

/**
 * Logo Component
 */
const Logo = memo(({ isScrolled }) => (
  <a href="/" className="block relative">
    <div className="relative h-16 w-64 transition-all duration-700 ease-in-out overflow-hidden">
      <img
        src={HEADER_LOGO.src}
        alt={HEADER_LOGO.alt}
        className="h-16 w-64 object-contain absolute top-0 left-0"
      />
      <div
        className={`
          absolute 
          top-0 
          right-0 
          h-full 
          bg-white 
          transition-all 
          duration-700 
          ease-in-out
          ${isScrolled ? 'w-[83%]' : 'w-0'}
        `}
      />
    </div>
  </a>
));

Logo.displayName = 'Logo';
Logo.propTypes = {
  isScrolled: PropTypes.bool.isRequired
};

/**
 * Mobile Menu Button Component
 */
const MenuButton = memo(({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <X className="h-6 w-6 text-gray-600" />
    ) : (
      <Menu className="h-6 w-6 text-gray-600" />
    )}
  </button>
));

MenuButton.displayName = 'MenuButton';
MenuButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

/**
 * Main Header Component
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled, handleNavClick } = useScrollHeader();

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`
        fixed 
        top-0 
        left-0 
        right-0 
        z-50 
        transition-all 
        duration-300 
        ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 w-64">
            <Logo isScrolled={isScrolled} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-10">
              {NAVIGATION_ITEMS.map((item) => (
                <NavLink
                  key={item.name}
                  {...item}
                  onClick={handleNavClick}
                  isMobile={false}
                />
              ))}
            </div>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <PrimaryButton
              as="a"
              href="sms:+1234567890"
              size="medium"
            >
              Text Us
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <MenuButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden 
          transition-all 
          duration-300 
          ease-in-out 
          ${isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
          }
        `}
      >
        <div className="px-4 py-2 space-y-1 bg-white shadow-lg">
          {NAVIGATION_ITEMS.map((item) => (
            <NavLink
              key={item.name}
              {...item}
              onClick={(e) => {
                handleNavClick(e, item.href);
                setIsMobileMenuOpen(false);
              }}
              isMobile={true}
            />
          ))}
          <div className="pt-2 pb-1">
            <PrimaryButton
              as="a"
              href="sms:+1234567890"
              size="medium"
              fullWidth
            >
              Text Us
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);