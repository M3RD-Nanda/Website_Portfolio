import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { educationData, experienceData, skillsData } from "../utils/constants";

const TimelineItem = ({ item, index, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex space-x-4 mb-8"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-bg" />
        </div>
        {index < educationData.length - 1 && (
          <div className="w-0.5 h-16 bg-gray-600 mt-4"></div>
        )}
      </div>
      <div className="flex-1 bg-card-bg p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-primary-text mb-2">
          {item.institution || item.role}
        </h3>
        {item.company && (
          <p className="text-accent-yellow font-medium mb-1">{item.company}</p>
        )}
        <p className="text-gray-400 text-sm mb-3">{item.period}</p>
        <p className="text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-primary-text font-medium">{skill.skill}</span>
        <span className="text-accent-yellow font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          className="bg-accent-yellow h-2 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

const ResumePage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-text mb-4">Resume</h1>
        <p className="text-gray-400 text-lg">
          My educational background, professional experience, and skills
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-primary-text mb-8 flex items-center">
            <AcademicCapIcon className="w-8 h-8 text-accent-yellow mr-3" />
            Education
          </h2>
          <div>
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                icon={AcademicCapIcon}
              />
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-primary-text mb-8 flex items-center">
            <BriefcaseIcon className="w-8 h-8 text-accent-yellow mr-3" />
            Experience
          </h2>
          <div>
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                icon={BriefcaseIcon}
              />
            ))}
          </div>
        </motion.section>
      </div>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-card-bg p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-primary-text mb-8 text-center">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <button className="bg-accent-yellow text-primary-bg px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Download Resume
        </button>
      </motion.div>
    </div>
  );
};

export default ResumePage;
