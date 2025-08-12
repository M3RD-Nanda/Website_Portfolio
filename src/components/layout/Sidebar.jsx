import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { personalInfo } from "../../utils/constants";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  hoverScale,
  buttonHover,
  buttonTap,
} from "../../utils/animations";
import ChibiModel from "../three/ChibiModel";

const iconMap = {
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
};

const SocialIcon = ({ name, url, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = {
    linkedin: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    twitter: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    instagram: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  };

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative text-primary-text hover:text-accent-yellow transition-colors duration-300"
      variants={fadeInUp}
      custom={index}
      whileHover={hoverScale}
      whileTap={buttonTap}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {socialIcons[name]}

      {/* Glowing effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-accent-yellow opacity-20 blur-lg rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1.5 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Floating particles on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-yellow rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${10 + i * 30}%`,
              }}
              animate={{
                y: [-5, -15, -5],
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
    </motion.a>
  );
};

const Sidebar = () => {
  return (
    <motion.aside
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="w-72 bg-card-bg p-6 flex flex-col items-center space-y-6 sticky top-0 h-screen overflow-y-auto hidden lg:flex relative"
    >
      {/* Background animated gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-accent-yellow/5 via-transparent to-accent-yellow/5"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3D Avatar with enhanced container */}
      <motion.div
        variants={scaleIn}
        className="w-60 h-60 bg-primary-bg rounded-2xl overflow-hidden relative group"
        whileHover={{
          scale: 1.02,
          rotateY: 5,
          transition: { duration: 0.3 },
        }}
      >
        <Canvas camera={{ position: [0, 0, 38], fov: 45 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <ChibiModel
              fitHeight={2.8}
              scaleMultiplier={10}
              position={[0, -13, 0]}
            />
          </Suspense>
        </Canvas>

        {/* Floating orbs around avatar */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-yellow rounded-full opacity-60"
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Name and Role with typing effect */}
      <motion.div variants={fadeInUp} className="text-center relative z-10">
        <motion.h1
          className="text-xl font-bold text-primary-text mb-2"
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(255, 200, 0, 0.5)",
          }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.button
          className="px-4 py-1 bg-accent-yellow text-primary-bg rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          <motion.span className="relative z-10">
            {personalInfo.role}
          </motion.span>

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </motion.div>

      {/* Contact Information with stagger animation */}
      <motion.div
        variants={staggerContainer}
        className="w-full space-y-4 relative z-10"
      >
        {personalInfo.contact.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="flex items-center space-x-3 group cursor-pointer"
              whileHover={{
                x: 5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="w-8 h-8 bg-primary-bg rounded-lg flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  backgroundColor: "rgba(255, 200, 0, 0.1)",
                }}
              >
                <IconComponent className="w-4 h-4 text-accent-yellow relative z-10" />

                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-accent-yellow opacity-0 group-hover:opacity-20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <div className="flex-1">
                <p className="text-xs text-gray-400 uppercase tracking-wide">
                  {item.label}
                </p>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    className="text-sm text-primary-text hover:text-accent-yellow transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    {item.value}
                  </motion.a>
                ) : (
                  <p className="text-sm text-primary-text">{item.value}</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Social Links with enhanced animations */}
      <motion.div
        variants={staggerContainer}
        className="flex space-x-4 pt-4 relative z-10"
      >
        {personalInfo.socials.map((social, index) => (
          <SocialIcon
            key={index}
            name={social.icon}
            url={social.url}
            index={index}
          />
        ))}
      </motion.div>

      {/* Animated decorative elements */}
      <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent-yellow to-transparent opacity-30" />

      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-yellow rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.aside>
  );
};

export default Sidebar;
