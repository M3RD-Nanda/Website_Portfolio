// Advanced Animation Utilities for Muhammad Trinanda Portfolio

// Page transition variants
export const pageTransitions = {
  initial: {
    opacity: 0,
    x: 100,
    scale: 0.95,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Stagger container animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fade in up animation
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Slide in from left
export const slideInLeft = {
  initial: {
    opacity: 0,
    x: -100,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Slide in from right
export const slideInRight = {
  initial: {
    opacity: 0,
    x: 100,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Scale in animation
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Bounce in animation
export const bounceIn = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: -50,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.68, -0.55, 0.265, 1.55],
    },
  },
};

// Typing animation
export const typingContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

export const typingText = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  y: -5,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const hoverGlow = {
  scale: 1.02,
  boxShadow: "0 20px 40px rgba(255, 200, 0, 0.3)",
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Card hover effects
export const cardHover = {
  y: -10,
  scale: 1.02,
  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  transition: {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Button animations
export const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(255, 200, 0, 0.4)",
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

export const buttonTap = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Loading animations
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const spinAnimation = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear",
  },
};

// Scroll-triggered animations
export const scrollFadeIn = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  viewport: { once: true, amount: 0.3 },
};

// Navigation animations
export const navItemHover = {
  scale: 1.1,
  y: -2,
  transition: {
    duration: 0.2,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// 3D transform animations
export const rotate3D = {
  rotateY: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};

export const float3D = {
  y: [-10, 10, -10],
  rotateX: [-5, 5, -5],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Particle system animations
export const particleFloat = {
  y: [0, -20, 0],
  x: [0, 10, 0],
  opacity: [0.3, 1, 0.3],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Text reveal animations
export const textReveal = {
  initial: {
    opacity: 0,
    y: 100,
    skewY: 7,
  },
  animate: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Magnetic effect for interactive elements
export const magneticHover = (x, y) => ({
  x: x * 0.3,
  y: y * 0.3,
  transition: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
});

// Advanced stagger animations
export const staggerFadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

// Morphing animations
export const morphScale = {
  scale: [1, 1.2, 0.8, 1],
  rotate: [0, 180, 360],
  transition: {
    duration: 2,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
};

// Glitch effect
export const glitchEffect = {
  x: [0, -5, 5, -5, 5, 0],
  filter: [
    "hue-rotate(0deg)",
    "hue-rotate(90deg)",
    "hue-rotate(180deg)",
    "hue-rotate(270deg)",
    "hue-rotate(360deg)",
  ],
  transition: {
    duration: 0.5,
    ease: "easeInOut",
  },
};

// Elastic animations
export const elasticScale = {
  scale: [1, 1.3, 0.9, 1.1, 1],
  transition: {
    duration: 0.8,
    ease: [0.68, -0.55, 0.265, 1.55],
  },
};

// Custom easing functions
export const customEasing = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  elastic: [0.175, 0.885, 0.32, 1.275],
  back: [0.68, -0.55, 0.265, 1.55],
};
