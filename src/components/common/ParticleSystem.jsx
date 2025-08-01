import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ParticleSystem = ({
  particleCount = 50,
  color = "#FFC800",
  size = 2,
  speed = 1,
  opacity = 0.3,
}) => {
  const containerRef = useRef(null);

  // Generate random particles
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * size + 1,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: color,
            opacity: opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [opacity * 0.3, opacity, opacity * 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration * speed,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 20}%`,
            width: `${8 + i * 2}px`,
            height: `${8 + i * 2}px`,
            backgroundColor: color,
            opacity: opacity * 0.5,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            opacity: [opacity * 0.2, opacity * 0.6, opacity * 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines effect */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${20 + i * 30}%`}
            y1={`${30 + i * 20}%`}
            x2={`${40 + i * 20}%`}
            y2={`${50 + i * 15}%`}
            stroke={color}
            strokeWidth="1"
            opacity={opacity * 0.3}
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, opacity * 0.5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ParticleSystem;
