import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  padding = 'p-6',
  ...props 
}) => {
  const baseClasses = `bg-card-bg rounded-xl transition-all duration-300 ${padding}`;
  const hoverClasses = hover ? 'hover:transform hover:scale-105 hover:shadow-lg' : '';
  
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cardClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
