import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioProjects } from "../utils/constants";
import ProjectModal from "../components/portfolio/ProjectModal";

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="bg-accent-yellow text-primary-bg px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Details
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-primary-text">
            {project.title}
          </h3>
          <span className="bg-accent-yellow bg-opacity-20 text-accent-yellow px-3 py-1 rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const FilterButton = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
        isActive
          ? "bg-accent-yellow text-primary-bg"
          : "bg-card-bg text-primary-text hover:bg-accent-yellow hover:text-primary-bg"
      }`}
    >
      {category}
    </button>
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
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-text mb-4">Portfolio</h1>
        <p className="text-gray-400 text-lg">
          A showcase of my recent work and projects
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            isActive={activeFilter === category}
            onClick={() => setActiveFilter(category)}
          />
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onClick={handleProjectClick}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12"
        >
          <p className="text-gray-400 text-lg">
            No projects found in this category.
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-card-bg p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-primary-text mb-4">
          Have a Project in Mind?
        </h2>
        <p className="text-gray-400 mb-6">
          I'm always excited to work on new and challenging projects. Let's
          discuss how we can bring your ideas to life.
        </p>
        <button className="bg-accent-yellow text-primary-bg px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Start a Project
        </button>
      </motion.div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
};

export default PortfolioPage;
