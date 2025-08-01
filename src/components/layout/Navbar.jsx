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
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-yellow/5"
        animate={{
          x: [-100, 100, -100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

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

                  {/* Hover background */}
                  {hoveredItem === item.name && !isActive && (
                    <motion.div
                      layoutId="hoverTab"
                      className="absolute inset-0 bg-accent-yellow bg-opacity-10 rounded-md lg:rounded-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Glowing effect on hover */}
                  {hoveredItem === item.name && (
                    <motion.div
                      className="absolute inset-0 bg-accent-yellow opacity-20 blur-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.2, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* Floating particles on hover */}
            {hoveredItem === item.name && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent-yellow rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, -20, -10],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
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
