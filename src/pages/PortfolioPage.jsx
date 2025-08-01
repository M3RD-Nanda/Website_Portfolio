import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { portfolioProjects } from "../utils/constants";
import ProjectModal from "../components/portfolio/ProjectModal";
import ParticleSystem from "../components/common/ParticleSystem";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  scrollFadeIn,
  cardHover,
  buttonHover,
  buttonTap,
  hoverGlow,
} from "../utils/animations";

const ProjectCard = ({ project, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.8, y: -60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        layout: { duration: 0.5 },
      }}
      whileHover={cardHover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card-bg rounded-xl overflow-hidden transition-all duration-300 group cursor-pointer relative"
      onClick={() => onClick(project)}
    >
      {/* Background glow effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 via-transparent to-accent-yellow/10 rounded-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <div className="relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Overlay with enhanced animations */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
          animate={{
            backgroundColor: isHovered
              ? "rgba(0, 0, 0, 0.4)"
              : "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-accent-yellow text-primary-bg px-6 py-3 rounded-full font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.div>
        </motion.div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-yellow rounded-full"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [-10, -25, -10],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div
        className="p-6 relative z-10"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h3
          className="text-lg font-semibold text-primary-text mb-3"
          whileHover={{ x: 5, color: "#FFC800" }}
          transition={{ duration: 0.2 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-gray-400 text-sm leading-relaxed mb-3"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          {project.description}
        </motion.p>

        <motion.span
          className="bg-accent-yellow bg-opacity-20 text-accent-yellow px-3 py-1 rounded-full text-xs font-medium inline-block"
          whileHover={{
            backgroundColor: "rgba(255, 200, 0, 0.3)",
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
        >
          {project.category}
        </motion.span>
      </motion.div>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-yellow to-yellow-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

const FilterButton = ({ category, isActive, onClick, index }) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={onClick}
      whileHover={isActive ? {} : buttonHover}
      whileTap={buttonTap}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
        isActive
          ? "bg-accent-yellow text-primary-bg shadow-lg"
          : "bg-card-bg text-primary-text hover:bg-accent-yellow hover:text-primary-bg"
      }`}
    >
      <motion.span className="relative z-10">{category}</motion.span>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
          layoutId="activeFilter"
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Hover glow effect */}
      {!isActive && (
        <motion.div
          className="absolute inset-0 bg-accent-yellow opacity-0"
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  );
};

const TypingText = ({ text, delay = 0 }) => {
  return (
    <motion.span
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * 0.03,
                duration: 0.3,
              },
            },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Web design", "Graphic Design", "Video"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter(
          (project) => project.category === activeFilter
        );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div className="max-w-6xl mx-auto space-y-12 relative">
      {/* Background Particle System */}
      <ParticleSystem particleCount={25} opacity={0.15} />

      {/* Page Header */}
      <motion.div {...scrollFadeIn} className="text-center relative z-10">
        <motion.h1
          className="text-4xl font-bold text-primary-text mb-4"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <TypingText text="Portfolio" />
        </motion.h1>

        <motion.p
          className="text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TypingText
            text="A showcase of my recent work and projects"
            delay={0.5}
          />
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-accent-yellow to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-wrap justify-center gap-4 relative z-10"
      >
        {categories.map((category, index) => (
          <FilterButton
            key={category}
            category={category}
            isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
            index={index}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeFilter}-${project.id}`}
                project={project}
                index={index}
                onClick={handleProjectClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12 relative z-10"
        >
          <motion.div
            className="w-24 h-24 bg-card-bg rounded-full flex items-center justify-center mx-auto mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-4xl">🔍</span>
          </motion.div>
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        {...scrollFadeIn}
        className="bg-card-bg p-8 rounded-2xl text-center relative overflow-hidden"
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-accent-yellow/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.h2
          className="text-2xl font-bold text-primary-text mb-4 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TypingText text="Have a Project in Mind?" />
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm always excited to work on new and challenging projects. Let's
          discuss how we can bring your ideas to life.
        </motion.p>

        <motion.button
          className="bg-accent-yellow text-primary-bg px-8 py-3 rounded-full font-semibold shadow-lg relative overflow-hidden z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={hoverGlow}
          whileTap={buttonTap}
        >
          <motion.span className="relative z-10">Start a Project</motion.span>

          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />

          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            whileTap={{
              opacity: [0, 0.3, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-yellow rounded-full opacity-30"
              style={{
                left: `${20 + i * 20}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
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

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </motion.div>
  );
};

export default PortfolioPage;
