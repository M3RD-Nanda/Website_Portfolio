import React from "react";
import { motion } from "framer-motion";

const Loader = ({ message = "Loading...", fullScreen = false }) => {
  const containerClass = fullScreen
    ? "flex flex-col items-center justify-center min-h-screen bg-primary-bg"
    : "flex flex-col items-center justify-center min-h-[400px]";

  return (
    <div className={containerClass}>
      {/* Animated Logo/Avatar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-20 h-20 bg-accent-yellow bg-opacity-20 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-accent-yellow border-t-transparent rounded-full"
          />
        </div>
      </motion.div>

      {/* Loading Text */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold text-primary-text mb-4"
      >
        {message}
      </motion.h2>

      {/* Animated Dots */}
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
            className="w-2 h-2 bg-accent-yellow rounded-full"
          />
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div className="mt-8 w-48 h-1 bg-gray-600 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-full w-1/3 bg-accent-yellow rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default Loader;
