import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Section = forwardRef(({
  children,
  className = '',
  background = 'white',
  containerWidth = 'max-w-7xl',
  withGradient = false,
  id,
  ...props
}, ref) => {
  const baseClasses = 'relative overflow-hidden';
  const paddingClasses = 'py-16 sm:py-20 px-4';
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary',
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`
        ${baseClasses}
        ${paddingClasses}
        ${backgroundClasses[background]}
        ${className}
      `}
      {...props}
    >
      {withGradient && (
        <>
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-hover rounded-full translate-x-1/3 -translate-y-1/3 opacity-20 animate-pulse duration-[4000ms]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-hover rounded-full -translate-x-1/3 translate-y-1/3 opacity-20 animate-pulse duration-[4000ms] delay-1000" />
        </>
      )}
      <div className={`mx-auto ${containerWidth}`}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = 'Section'; // Important for React DevTools

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  background: PropTypes.oneOf(['white', 'gray', 'primary']),
  containerWidth: PropTypes.string,
  withGradient: PropTypes.bool,
  id: PropTypes.string
};

export default Section;