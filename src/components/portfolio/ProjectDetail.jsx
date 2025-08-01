import React from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  TagIcon,
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  const technologies = project.technologies || ["React", "JavaScript", "CSS"];
  const features = project.features || [
    "Responsive Design",
    "Modern UI/UX",
    "Performance Optimized",
  ];

  return (
    <motion.div
      className="bg-card-bg rounded-2xl overflow-hidden relative shadow-2xl shadow-black/30"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.95 }}
      transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 bg-primary-bg/60 p-2 rounded-full text-white hover:bg-accent-yellow hover:text-primary-bg transition-all duration-300 backdrop-blur-sm"
        aria-label="Close project details"
      >
        <XMarkIcon className="w-6 h-6" />
      </button>

      <div className="p-0">
        {/* Project Image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Project Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-accent-yellow text-primary-bg px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title and Description */}
          <div>
            <h1 className="text-2xl font-bold text-primary-text mb-3">
              {project.title}
            </h1>
            <p className="text-gray-300 leading-relaxed">
              {project.description ||
                "A detailed description of this project would go here, explaining the goals, challenges, and solutions implemented."}
            </p>
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 text-gray-400">
              <CalendarIcon className="w-5 h-5 text-accent-yellow" />
              <span>Completed: {project.date || "March 2024"}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <TagIcon className="w-5 h-5 text-accent-yellow" />
              <span>Category: {project.category}</span>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold text-primary-text mb-3 flex items-center">
              <CodeBracketIcon className="w-5 h-5 text-accent-yellow mr-2" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-bg text-accent-yellow px-3 py-1 rounded-full text-sm font-medium border border-accent-yellow border-opacity-30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-primary-text mb-3">
              Key Features
            </h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300"
                >
                  <div className="w-2 h-2 bg-accent-yellow rounded-full flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-700/50">
            <button className="flex-1 bg-accent-yellow text-primary-bg py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2">
              <EyeIcon className="w-5 h-5" />
              <span>View Live Demo</span>
            </button>

            <button className="flex-1 bg-transparent border-2 border-accent-yellow text-accent-yellow py-3 px-6 rounded-full font-semibold hover:bg-accent-yellow hover:text-primary-bg transition-all duration-300 flex items-center justify-center space-x-2">
              <CodeBracketIcon className="w-5 h-5" />
              <span>View Code</span>
            </button>
          </div>

          {/* Additional Images Gallery (if available) */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-primary-text mb-3">
                Project Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-video bg-primary-bg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
