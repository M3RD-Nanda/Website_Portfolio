import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down and calculate scroll progress
  const toggleVisibility = () => {
    // Get the main scrollable element
    const scrollableElement =
      document.querySelector("main") || document.documentElement;

    let scrollTop = 0;
    let scrollHeight = 0;
    let clientHeight = 0;

    if (scrollableElement.tagName === "MAIN") {
      scrollTop = scrollableElement.scrollTop;
      scrollHeight = scrollableElement.scrollHeight;
      clientHeight = scrollableElement.clientHeight;
    } else {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      scrollHeight = document.documentElement.scrollHeight;
      clientHeight = window.innerHeight;
    }

    // Calculate scroll progress (0 to 1)
    const maxScroll = scrollHeight - clientHeight;
    const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
    setScrollProgress(Math.min(Math.max(progress, 0), 1));

    // Show button when scrolled down more than 200px
    setIsVisible(scrollTop > 200);
  };

  // Custom smooth scroll function with consistent easing
  const scrollToTop = () => {
    const scrollableElement = document.querySelector("main") || window;
    const startPosition =
      scrollableElement === window
        ? window.pageYOffset
        : scrollableElement.scrollTop;
    const startTime = performance.now();
    const duration = 800; // 800ms for smooth animation

    // Easing function for smooth animation (ease-out-cubic)
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const currentPosition = startPosition * (1 - easedProgress);

      if (scrollableElement === window) {
        window.scrollTo(0, currentPosition);
      } else {
        scrollableElement.scrollTop = currentPosition;
      }

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const scrollableElement = document.querySelector("main");

    const handleScroll = () => {
      toggleVisibility();
    };

    // Add scroll listener to the main element if it exists
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    }

    // Also add to window as fallback
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    toggleVisibility();

    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.4,
          }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          {/* Progress Ring */}
          <div className="relative group cursor-pointer" onClick={scrollToTop}>
            <svg
              className="w-16 h-16 transform -rotate-90 progress-ring-glow"
              viewBox="0 0 64 64"
            >
              {/* Background circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="rgba(255, 200, 0, 0.15)"
                strokeWidth="3"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                stroke="#FFC800"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 28}`}
                strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress)}`}
                initial={{ strokeDashoffset: `${2 * Math.PI * 28}` }}
                animate={{
                  strokeDashoffset: `${
                    2 * Math.PI * 28 * (1 - scrollProgress)
                  }`,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  type: "tween",
                }}
                style={{
                  filter: `drop-shadow(0 0 ${Math.max(
                    2,
                    scrollProgress * 8
                  )}px rgba(255, 200, 0, ${0.3 + scrollProgress * 0.4}))`,
                }}
              />
            </svg>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -2,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{
                scale: 0.92,
                y: 0,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              onClick={scrollToTop}
              className="absolute inset-2 bg-accent-yellow text-primary-bg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group flex items-center justify-center"
              style={{
                boxShadow: `0 4px 20px rgba(255, 200, 0, ${
                  0.2 + scrollProgress * 0.3
                })`,
              }}
              aria-label="Scroll to top"
            >
              <motion.div
                whileHover={{
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="relative"
              >
                <ChevronUpIcon className="w-7 h-7 transition-all duration-300" />

                {/* Subtle glow effect on icon */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    opacity: scrollProgress > 0.8 ? [0.5, 1, 0.5] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: scrollProgress > 0.8 ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ChevronUpIcon className="w-7 h-7 text-primary-bg opacity-50" />
                </motion.div>
              </motion.div>
            </motion.button>

            {/* Pulse effect when near bottom */}
            {scrollProgress > 0.9 && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent-yellow opacity-75 pointer-events-none"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.75, 0, 0.75],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 px-3 py-1 bg-card-bg text-primary-text text-sm rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Kembali ke atas
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-card-bg border-y-4 border-y-transparent"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
