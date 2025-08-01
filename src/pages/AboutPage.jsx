import React, { Suspense, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { servicesData } from "../utils/constants";
import EnhancedChibiModel from "../components/three/EnhancedChibiModel";
import ParticleSystem from "../components/common/ParticleSystem";
import {
  staggerContainer,
  fadeInUp,
  scaleIn,
  scrollFadeIn,
  cardHover,
  textReveal,
  hoverGlow,
} from "../utils/animations";

const iconMap = {
  CodeBracketIcon,
  PaintBrushIcon,
  ChartBarIcon,
  CameraIcon,
};

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconMap[service.icon];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={cardHover}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-card-bg p-6 rounded-xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-yellow/10 via-transparent to-accent-yellow/5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.3 }}
      />

      {/* Floating particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent-yellow rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${20 + i * 15}%`,
              }}
              animate={{
                y: [-10, -20, -10],
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
        </div>
      )}

      <motion.div
        className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center mb-4 relative z-10"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          backgroundColor: "rgba(255, 200, 0, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        <IconComponent className="w-6 h-6 text-accent-yellow" />

        {/* Icon glow effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-accent-yellow opacity-20 blur-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.2, scale: 1.2 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>

      <motion.h3
        className="text-lg font-semibold text-primary-text mb-2 relative z-10"
        whileHover={{ x: 5 }}
        transition={{ duration: 0.2 }}
      >
        {service.title}
      </motion.h3>

      <motion.p
        className="text-gray-400 text-sm leading-relaxed relative z-10"
        whileHover={{ x: 3 }}
        transition={{ duration: 0.2, delay: 0.1 }}
      >
        {service.description}
      </motion.p>

      {/* Animated border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-yellow"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </motion.div>
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

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="max-w-6xl mx-auto space-y-12 relative"
      style={{ y, opacity }}
    >
      {/* Background Particle System */}
      <ParticleSystem particleCount={30} opacity={0.2} />

      {/* Mobile 3D Avatar - Only visible on mobile */}
      <motion.section
        {...scrollFadeIn}
        className="lg:hidden bg-card-bg p-6 rounded-2xl relative overflow-hidden"
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

        <div className="w-full h-64 bg-primary-bg rounded-xl overflow-hidden relative">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <EnhancedChibiModel scale={0.4} position={[0, -0.5, 0]} />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          className="text-center mt-4 relative z-10"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={textReveal}
            className="text-2xl font-bold text-primary-text"
          >
            <TypingText text="Muhammad Trinanda" delay={0.5} />
          </motion.h1>
          <motion.button
            variants={fadeInUp}
            whileHover={hoverGlow}
            whileTap={{ scale: 0.95 }}
            className="mt-2 px-4 py-1 bg-accent-yellow text-primary-bg rounded-full text-sm font-medium relative overflow-hidden"
          >
            <motion.span className="relative z-10">Web Developer</motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        {...scrollFadeIn}
        className="bg-card-bg p-8 rounded-2xl relative overflow-hidden"
      >
        <motion.h2
          variants={textReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary-text mb-6 relative z-10"
        >
          <TypingText text="About Me" />
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              "I'm Muhammad Trinanda, a passionate web developer with a strong foundation in modern web technologies. I specialize in creating interactive, responsive, and user-friendly web applications using React, Three.js, and other cutting-edge technologies.",
              "My journey in web development is driven by a love for creating digital experiences that not only look great but also provide meaningful value to users. I combine technical expertise with creative design thinking to deliver solutions that exceed expectations.",
              "When I'm not coding, you'll find me exploring new technologies, working on personal projects, or contributing to the developer community. I believe in continuous learning and staying up-to-date with the latest trends in web development.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                custom={index}
                className="text-gray-300 leading-relaxed"
                whileHover={{ x: 5, color: "#e5e7eb" }}
                transition={{ duration: 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.img
              src="/images/My Profile.png"
              alt="Muhammad Trinanda"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(255, 200, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section {...scrollFadeIn} className="relative">
        <motion.h2
          variants={textReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary-text mb-8 text-center"
        >
          <TypingText text="What I Do" delay={0.2} />
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        {...scrollFadeIn}
        className="bg-card-bg p-8 rounded-2xl relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #FFC800 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <motion.h2
          variants={textReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary-text mb-8 text-center relative z-10"
        >
          <TypingText text="What People Say" delay={0.2} />
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 relative z-10"
        >
          {[
            {
              text: "Muhammad delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and professional.",
              name: "John Doe",
              role: "CEO, Tech Startup",
              initials: "JD",
            },
            {
              text: "Working with Muhammad was a great experience. He brought our vision to life with creative solutions and modern design principles.",
              name: "Jane Smith",
              role: "Marketing Director",
              initials: "JS",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              className="bg-primary-bg p-6 rounded-xl relative overflow-hidden group"
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Quote decoration */}
              <motion.div
                className="absolute top-4 right-4 text-6xl text-accent-yellow opacity-10 font-serif"
                whileHover={{ scale: 1.1, opacity: 0.2 }}
              >
                "
              </motion.div>

              <motion.p
                className="text-gray-300 italic mb-4 relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {testimonial.text}
              </motion.p>

              <div className="flex items-center space-x-3 relative z-10">
                <motion.div
                  className="w-10 h-10 bg-accent-yellow rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="text-primary-bg font-bold">
                    {testimonial.initials}
                  </span>
                </motion.div>
                <div>
                  <motion.p
                    className="text-primary-text font-medium"
                    whileHover={{ x: 2 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <motion.p
                    className="text-gray-400 text-sm"
                    whileHover={{ x: 2 }}
                    transition={{ delay: 0.1 }}
                  >
                    {testimonial.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Clients Section */}
      <motion.section {...scrollFadeIn}>
        <motion.h2
          variants={textReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-3xl font-bold text-primary-text mb-8 text-center"
        >
          <TypingText text="Trusted By" delay={0.2} />
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60"
        >
          {[1, 2, 3, 4].map((client, index) => (
            <motion.div
              key={client}
              variants={scaleIn}
              custom={index}
              className="w-24 h-24 bg-card-bg rounded-lg flex items-center justify-center relative overflow-hidden group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 200, 0, 0.1)",
              }}
            >
              <span className="text-gray-400 font-bold relative z-10">
                Client {client}
              </span>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-accent-yellow opacity-0 group-hover:opacity-10"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
