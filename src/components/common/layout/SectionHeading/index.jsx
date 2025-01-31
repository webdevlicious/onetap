import PropTypes from 'prop-types';

const SectionHeading = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 
        className={`
          font-montserrat 
          font-bold 
          text-h2 
          mb-4
          ${titleClassName}
        `}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`
            font-opensans 
            text-h6 
            text-gray-700 
            max-w-3xl 
            ${align === 'center' ? 'mx-auto' : ''}
            ${subtitleClassName}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  subtitleClassName: PropTypes.string
};

export default SectionHeading;