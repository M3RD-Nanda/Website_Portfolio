import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import MobileHeader from "./components/layout/MobileHeader";
import Loader from "./components/common/Loader";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollToTop";

// Lazy load pages for better performance
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ResumePage = React.lazy(() => import("./pages/ResumePage"));
const PortfolioPage = React.lazy(() => import("./pages/PortfolioPage"));
const BlogPage = React.lazy(() => import("./pages/BlogPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-primary-bg text-primary-text flex">
          {/* Static Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Mobile Header */}
            <MobileHeader />

            {/* Top Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <Suspense
                fallback={
                  <Loader message="Loading page..." fullScreen={false} />
                }
              >
                <Routes>
                  <Route path="/" element={<AboutPage />} />
                  <Route path="/resume" element={<ResumePage />} />
                  <Route path="/portfolio" element={<PortfolioPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
