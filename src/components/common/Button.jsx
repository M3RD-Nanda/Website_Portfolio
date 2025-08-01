import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  onClick,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-2';
  
  const variants = {
    primary: 'bg-accent-yellow text-primary-bg hover:bg-yellow-400 shadow-lg hover:shadow-xl',
    secondary: 'bg-card-bg text-primary-text border border-gray-600 hover:border-accent-yellow hover:text-accent-yellow',
    outline: 'border-2 border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-primary-bg'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim();

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
