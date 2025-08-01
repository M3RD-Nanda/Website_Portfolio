import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  PaintBrushIcon, 
  ChartBarIcon, 
  CameraIcon 
} from '@heroicons/react/24/outline';
import { servicesData } from '../utils/constants';

const iconMap = {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CameraIcon
};

const ServiceCard = ({ service, index }) => {
  const IconComponent = iconMap[service.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg p-6 rounded-xl hover:bg-opacity-80 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300">
        <IconComponent className="w-6 h-6 text-accent-yellow" />
      </div>
      <h3 className="text-lg font-semibold text-primary-text mb-2">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-card-bg p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-primary-text mb-6">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              I'm Muhammad Trinanda, a passionate web developer with a strong foundation in modern web technologies. 
              I specialize in creating interactive, responsive, and user-friendly web applications using React, 
              Three.js, and other cutting-edge technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in web development is driven by a love for creating digital experiences that not only 
              look great but also provide meaningful value to users. I combine technical expertise with creative 
              design thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, working on personal projects, 
              or contributing to the developer community. I believe in continuous learning and staying up-to-date 
              with the latest trends in web development.
            </p>
          </div>
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/images/My Profile.png"
              alt="Muhammad Trinanda"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">
          What I Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-card-bg p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">
          What People Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-primary-bg p-6 rounded-xl">
            <p className="text-gray-300 italic mb-4">
              "Muhammad delivered an exceptional website that exceeded our expectations. 
              His attention to detail and technical expertise made the entire process smooth and professional."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-bg font-bold">JD</span>
              </div>
              <div>
                <p className="text-primary-text font-medium">John Doe</p>
                <p className="text-gray-400 text-sm">CEO, Tech Startup</p>
              </div>
            </div>
          </div>
          <div className="bg-primary-bg p-6 rounded-xl">
            <p className="text-gray-300 italic mb-4">
              "Working with Muhammad was a great experience. He brought our vision to life with 
              creative solutions and modern design principles."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center">
                <span className="text-primary-bg font-bold">JS</span>
              </div>
              <div>
                <p className="text-primary-text font-medium">Jane Smith</p>
                <p className="text-gray-400 text-sm">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Clients Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-primary-text mb-8 text-center">
          Trusted By
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
          {[1, 2, 3, 4].map((client) => (
            <div
              key={client}
              className="w-24 h-24 bg-card-bg rounded-lg flex items-center justify-center"
            >
              <span className="text-gray-400 font-bold">Client {client}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
