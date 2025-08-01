import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import MobileHeader from "./components/layout/MobileHeader";
import Loader from "./components/common/Loader";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollToTop";
import PageTransition from "./components/common/PageTransition";
import Advanced3DBackground from "./components/common/Advanced3DBackground";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ResumePage = React.lazy(() => import("./pages/ResumePage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 100, scale: 0.95, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }}
        exit={{
          opacity: 0,
          x: -100,
          scale: 0.95,
          filter: "blur(10px)",
          transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        }}
        className="w-full h-full"
      >
        <Suspense
          fallback={
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Loader message="Loading page..." fullScreen={false} />
            </motion.div>
          }
        >
          <Routes location={location}>
            <Route path="/" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-screen bg-primary-bg text-primary-text flex overflow-hidden"
        >
          {/* Static Sidebar with entrance animation */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <Sidebar />
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex-1 flex flex-col overflow-hidden"
          >
            {/* Mobile Header */}
            <MobileHeader />

            {/* Top Navigation */}
            <Navbar />

            {/* Page Content with transitions */}
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-6 scrollbar-thin scrollbar-thumb-accent-yellow scrollbar-track-card-bg">
              <AnimatedRoutes />
            </main>
          </motion.div>
        </motion.div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
