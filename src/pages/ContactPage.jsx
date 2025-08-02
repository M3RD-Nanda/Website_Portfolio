import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import LoadingSpinner from "../components/common/LoadingSpinner.jsx";
import Map from "../components/common/Map.jsx";
import {
  staggerContainer,
  fadeInUp,
  slideInLeft,
  slideInRight,
  buttonHover,
  buttonTap,
} from "../utils/animations";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
          to_email: "m.3rd.nanda@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
      );

      setSubmitStatus("success");
      setFormData({ fullName: "", email: "", message: "" });
    } catch (error) {
      console.error("Email send error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto space-y-12"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {/* Page Header */}
      <motion.div className="text-center" variants={fadeInUp}>
        <h1 className="text-4xl font-bold text-primary-text mb-4">Contact</h1>
        <p className="text-gray-400 text-lg">
          Let's discuss your next project or just say hello
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div className="space-y-8" variants={slideInLeft}>
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-primary-text mb-6">
              Get in Touch
            </h2>
            <motion.p
              className="text-gray-400 leading-relaxed mb-8"
              whileHover={{ x: 5, color: "#e5e7eb" }}
              transition={{ duration: 0.2 }}
            >
              I'm always interested in hearing about new projects and
              opportunities. Whether you're a company looking to hire, or you're
              someone who has a project in mind, I'd love to hear from you.
            </motion.p>
          </motion.div>

          {/* Contact Details */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            {[
              {
                icon: EnvelopeIcon,
                title: "Email",
                value: "m.3rd.nanda@gmail.com",
                href: "mailto:m.3rd.nanda@gmail.com",
              },
              {
                icon: PhoneIcon,
                title: "Phone",
                value: "+62-xxx-xxxx-xxxx",
              },
              {
                icon: MapPinIcon,
                title: "Location",
                value: "Medan, Indonesia",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <motion.div
                  className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="w-6 h-6 text-accent-yellow" />
                </motion.div>
                <div>
                  <p className="text-primary-text font-medium">{item.title}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-accent-yellow transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-400">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp}>
            <p className="text-primary-text font-medium mb-4">Follow Me</p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/mtrinanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-primary-text hover:text-accent-yellow hover:bg-accent-yellow hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <span className="text-sm font-bold">Li</span>
              </motion.a>
              <motion.a
                href="https://github.com/mtrinanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-primary-text hover:text-accent-yellow hover:bg-accent-yellow hover:bg-opacity-20 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <span className="text-sm font-bold">Gh</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-card-bg p-8 rounded-2xl"
          variants={slideInRight}
        >
          <h2 className="text-2xl font-bold text-primary-text mb-6">
            Send Message
          </h2>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-yellow text-primary-bg py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              variants={fadeInUp}
              whileHover={!isSubmitting ? buttonHover : {}}
              whileTap={!isSubmitting ? buttonTap : {}}
            >
              {isSubmitting ? (
                <LoadingSpinner />
              ) : (
                <>
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <motion.div
                className="text-green-400 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                className="text-red-400 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again or contact me directly.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        className="bg-card-bg p-8 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-primary-text mb-6 text-center">
          Location
        </h2>
        <div className="w-full h-80 bg-primary-bg rounded-lg overflow-hidden">
          <Map />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
