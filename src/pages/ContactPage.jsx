import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

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
      // EmailJS configuration using environment variables
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
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-text mb-4">Contact</h1>
        <p className="text-gray-400 text-lg">
          Let's discuss your next project or just say hello
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold text-primary-text mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Whether you're a company looking to hire, or you're
              someone who has a project in mind, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center">
                <EnvelopeIcon className="w-6 h-6 text-accent-yellow" />
              </div>
              <div>
                <p className="text-primary-text font-medium">Email</p>
                <a
                  href="mailto:m.3rd.nanda@gmail.com"
                  className="text-gray-400 hover:text-accent-yellow transition-colors duration-300"
                >
                  m.3rd.nanda@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center">
                <PhoneIcon className="w-6 h-6 text-accent-yellow" />
              </div>
              <div>
                <p className="text-primary-text font-medium">Phone</p>
                <p className="text-gray-400">+62-xxx-xxxx-xxxx</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-accent-yellow bg-opacity-20 rounded-lg flex items-center justify-center">
                <MapPinIcon className="w-6 h-6 text-accent-yellow" />
              </div>
              <div>
                <p className="text-primary-text font-medium">Location</p>
                <p className="text-gray-400">Medan, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-primary-text font-medium mb-4">Follow Me</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mtrinanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-primary-text hover:text-accent-yellow hover:bg-accent-yellow hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="text-sm font-bold">Li</span>
              </a>
              <a
                href="https://github.com/mtrinanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card-bg rounded-lg flex items-center justify-center text-primary-text hover:text-accent-yellow hover:bg-accent-yellow hover:bg-opacity-20 transition-all duration-300"
              >
                <span className="text-sm font-bold">Gh</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-card-bg p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-primary-text mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-primary-bg text-primary-text rounded-lg border border-gray-600 focus:border-accent-yellow focus:outline-none transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-yellow text-primary-bg py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="loading-spinner w-5 h-5"></div>
              ) : (
                <>
                  <span>Send Message</span>
                  <PaperAirplaneIcon className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="text-green-400 text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="text-red-400 text-center">
                Failed to send message. Please try again or contact me directly.
              </div>
            )}
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-card-bg p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-primary-text mb-6 text-center">
          Location
        </h2>
        <div className="w-full h-64 bg-primary-bg rounded-lg flex items-center justify-center">
          <p className="text-gray-400">
            Google Maps integration would go here
            <br />
            <span className="text-accent-yellow">Medan, Indonesia</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
