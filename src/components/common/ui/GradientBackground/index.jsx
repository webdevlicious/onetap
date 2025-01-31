import PropTypes from 'prop-types';

const GradientBackground = ({
  color = 'primary',
  opacity = 0.2,
  animated = true,
  className = ''
}) => {
  const colorClasses = {
    primary: 'bg-primary-hover',
    gray: 'bg-gray-400',
    white: 'bg-white'
  };

  return (
    <>
      <div
        className={`
          absolute top-0 right-0 
          w-48 h-48 
          rounded-full 
          translate-x-1/3 
          -translate-y-1/3 
          ${colorClasses[color]}
          ${animated ? 'animate-pulse duration-[4000ms]' : ''}
          ${className}
        `}
        style={{ opacity }}
      />
      <div
        className={`
          absolute bottom-0 left-0 
          w-64 h-64 
          rounded-full 
          -translate-x-1/3 
          translate-y-1/3 
          ${colorClasses[color]}
          ${animated ? 'animate-pulse duration-[4000ms] delay-1000' : ''}
          ${className}
        `}
        style={{ opacity }}
      />
    </>
  );
};

GradientBackground.propTypes = {
  color: PropTypes.oneOf(['primary', 'gray', 'white']),
  opacity: PropTypes.number,
  animated: PropTypes.bool,
  className: PropTypes.string
};

export default GradientBackground;