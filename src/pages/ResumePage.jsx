import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { educationData, experienceData, skillsData } from "../utils/constants";

const TimelineItem = ({ item, index, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="flex space-x-4 mb-8 group"
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 bg-accent-yellow rounded-full flex items-center justify-center relative overflow-hidden"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 20px rgba(255, 200, 0, 0.5)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background pulse */}
          <motion.div
            className="absolute inset-0 bg-accent-yellow rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-primary-bg relative z-10" />
          </motion.div>

          {/* Sparkle effects */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {index < educationData.length - 1 && (
          <motion.div
            className="w-0.5 h-16 bg-gradient-to-b from-accent-yellow via-gray-600 to-gray-600 mt-4"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
            style={{ originY: 0 }}
          />
        )}
      </div>

      <motion.div
        className="flex-1 bg-card-bg p-6 rounded-xl relative overflow-hidden border border-transparent group-hover:border-accent-yellow/30 transition-all duration-300"
        whileHover={{
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent-yellow/5 via-transparent to-accent-yellow/5 opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        <motion.h3
          className="text-lg font-semibold text-primary-text mb-2 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {item.institution || item.role}
        </motion.h3>

        {item.company && (
          <motion.p
            className="text-accent-yellow font-medium mb-1 relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 + 0.5 }}
          >
            {item.company}
          </motion.p>
        )}

        <motion.p
          className="text-gray-400 text-sm mb-3 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          {item.period}
        </motion.p>

        <motion.p
          className="text-gray-300 text-sm leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.7 }}
        >
          {item.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="mb-8 group"
    >
      <div className="flex justify-between items-center mb-3">
        <motion.span
          className="text-primary-text font-medium text-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15 + 0.2 }}
        >
          {skill.skill}
        </motion.span>
        <motion.span
          className="text-accent-yellow font-bold text-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.15 + 0.8,
            type: "spring",
            stiffness: 200,
          }}
        >
          {skill.level}%
        </motion.span>
      </div>

      <div className="relative">
        {/* Background track */}
        <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
          {/* Animated background shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Skill progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: 1.5,
            delay: index * 0.15 + 0.5,
            ease: "easeOut",
          }}
          className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow relative overflow-hidden"
          style={{
            boxShadow: "0 0 10px rgba(255, 200, 0, 0.5)",
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-0 bg-accent-yellow rounded-full"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Floating particles on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-yellow rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: "50%",
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
        </motion.div>
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
        {/* Enhanced Education Section */}
        <motion.section
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-primary-text mb-8 flex items-center group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative mr-4"
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              <AcademicCapIcon className="w-10 h-10 text-accent-yellow relative z-10" />
              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 bg-accent-yellow rounded-full blur-md opacity-0 group-hover:opacity-50"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <span className="relative">
              Education
              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent-yellow"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
          </motion.h2>
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

        {/* Enhanced Experience Section */}
        <motion.section
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-primary-text mb-8 flex items-center group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative mr-4"
              whileHover={{
                rotate: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.5 }}
            >
              <BriefcaseIcon className="w-10 h-10 text-accent-yellow relative z-10" />
              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 bg-accent-yellow rounded-full blur-md opacity-0 group-hover:opacity-50"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <span className="relative">
              Experience
              {/* Underline animation */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-accent-yellow"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </span>
          </motion.h2>
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

      {/* Enhanced Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        className="bg-card-bg p-10 rounded-3xl relative overflow-hidden border border-accent-yellow/20"
        whileHover={{
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
          borderColor: "rgba(255, 200, 0, 0.4)",
          transition: { duration: 0.3 },
        }}
      >
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-accent-yellow/5"
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
          className="text-4xl font-bold text-primary-text mb-10 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.span
            className="inline-block relative"
            whileHover={{
              scale: 1.05,
              color: "#FFC800",
            }}
            transition={{ duration: 0.3 }}
          >
            Skills & Expertise
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-accent-yellow rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-accent-yellow rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Enhanced Download Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          type: "spring",
          stiffness: 150,
        }}
        className="text-center relative"
      >
        <motion.button
          className="bg-accent-yellow text-primary-bg px-10 py-4 rounded-full font-bold text-lg relative overflow-hidden group"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(255, 200, 0, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Button background effects */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-accent-yellow to-yellow-400"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Pulsing glow */}
          <motion.div
            className="absolute inset-0 bg-accent-yellow rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span className="relative z-10 flex items-center justify-center gap-2">
            Download Resume
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                y: [0, 3, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </motion.svg>
          </span>

          {/* Sparkle effects on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${10 + i * 10}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.button>

        {/* Floating ring effect */}
        <motion.div
          className="absolute inset-0 border-2 border-accent-yellow rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ResumePage;
