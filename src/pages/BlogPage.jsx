import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { blogPosts } from '../utils/constants';

const BlogCard = ({ post, index }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent-yellow text-primary-bg px-3 py-1 rounded-full text-xs font-medium">
            Blog
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
          <div className="flex items-center space-x-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-primary-text mb-3 group-hover:text-accent-yellow transition-colors duration-300">
          {post.title}
        </h2>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {post.excerpt}
        </p>
        
        <button className="text-accent-yellow font-medium text-sm hover:underline">
          Read More →
        </button>
      </div>
    </motion.article>
  );
};

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-primary-text mb-4">Blog</h1>
        <p className="text-gray-400 text-lg">
          Thoughts, tutorials, and insights about web development and design
        </p>
      </motion.div>

      {/* Featured Post */}
      {blogPosts.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card-bg rounded-2xl overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-accent-yellow text-primary-bg px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-primary-text mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                {blogPosts[0].excerpt}
              </p>
              <button className="bg-accent-yellow text-primary-bg px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
                Read Full Article
              </button>
            </div>
          </div>
        </motion.section>
      )}

      {/* Recent Posts */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-primary-text mb-8">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-card-bg p-8 rounded-2xl text-center"
      >
        <h2 className="text-2xl font-bold text-primary-text mb-4">
          Stay Updated
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to get notified about new blog posts and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-primary-bg text-primary-text rounded-full border border-gray-600 focus:border-accent-yellow focus:outline-none"
          />
          <button className="bg-accent-yellow text-primary-bg px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </motion.section>

      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <button className="bg-card-bg text-primary-text px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-all duration-300 border border-gray-600 hover:border-accent-yellow">
          Load More Posts
        </button>
      </motion.div>
    </div>
  );
};

export default BlogPage;
