import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { navigationItems } from "../../utils/constants";
import {
  navItemHover,
  staggerContainer,
  fadeInUp,
} from "../../utils/animations";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="bg-card-bg px-3 lg:px-6 py-3 lg:py-4 relative overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex justify-between lg:justify-start lg:space-x-8 gap-1 lg:gap-0 relative z-10"
      >
        {navigationItems.map((item, index) => (
          <motion.div
            key={item.name}
            variants={fadeInUp}
            custom={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `relative px-2 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium transition-all duration-300 rounded-md lg:rounded-none whitespace-nowrap block ${
                  isActive
                    ? "text-accent-yellow"
                    : "text-primary-text hover:text-accent-yellow"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Text with magnetic effect */}
                  <motion.span
                    whileHover={navItemHover}
                    className="relative z-10"
                  >
                    {item.name}
                  </motion.span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Enhanced Hover background with gradient */}
                  {hoveredItem === item.name && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className="absolute inset-0 rounded-lg lg:rounded-md overflow-hidden"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {/* Main gradient background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent-yellow/20 via-accent-yellow/30 to-accent-yellow/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Animated shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-yellow/40 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                        }}
                      />

                      {/* Border glow */}
                      <motion.div
                        className="absolute inset-0 rounded-lg lg:rounded-md border border-accent-yellow/50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.div>
                  )}

                  {/* Enhanced glowing effect on hover */}
                  {hoveredItem === item.name && (
                    <motion.div
                      className="absolute inset-0 bg-accent-yellow rounded-lg lg:rounded-md"
                      style={{
                        filter: "blur(12px)",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.8, 1.1, 0.8],
                      }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* Enhanced floating particles on hover */}
            {hoveredItem === item.name && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-accent-yellow rounded-full"
                    style={{
                      width: `${2 + Math.random() * 3}px`,
                      height: `${2 + Math.random() * 3}px`,
                      left: `${10 + i * 20}%`,
                      top: `${30 + Math.random() * 40}%`,
                    }}
                    animate={{
                      y: [-15, -25, -15],
                      x: [0, Math.random() * 10 - 5, 0],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.2, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Additional sparkle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute w-1 h-1 bg-accent-yellow"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: `${15 + i * 15}%`,
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-yellow to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.nav>
  );
};

export default Navbar;
