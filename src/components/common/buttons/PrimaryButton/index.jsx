import PropTypes from 'prop-types';
import { MessageSquare } from 'lucide-react';

const PrimaryButton = ({
  children,
  onClick,
  icon: Icon = MessageSquare,
  showIcon = true,
  fullWidth = false,
  size = 'medium',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`
        btn
        ${fullWidth ? 'w-full' : ''}
        ${sizeClasses[size]}
        rounded-lg 
        shadow-md 
        hover:shadow-lg 
        transform 
        hover:-translate-y-0.5 
        transition-all 
        duration-200 
        flex 
        items-center 
        justify-center 
        gap-2
        ${className}
      `}
      {...props}
    >
      {children}
      {showIcon && <Icon className="w-5 h-5" />}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.elementType,
  showIcon: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default PrimaryButton;