import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, BookOpen, Trophy, Zap, Target, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import DataOverview from '../components/DataOverview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <main className="page-main bg-dark">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Arcade Points Calculator
            </h1>
            <p className="hero-subtitle">
              Track your Google Arcade Facilitator milestones, calculate points, and unlock your path to Arcade glory!
            </p>
            <div className="hero-buttons p-20">
              <Link
                to="/calculator"
                className="hero-button-primary"
              >
                Start Calculating
              </Link>
              <a
                href="https://go.cloudskillsboost.google/arcade"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                Visit Official Arcade
              </a>
              <Link
                to="/resources"
                className="hero-button-secondary"
              >
                Explore Resources
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="page-container page-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Calculator?</h2>
          <p className="text-gray-400 text-lg">Everything you need to maximize your Arcade journey</p>
        </motion.div>

        <div className="features-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="feature-card"
          >
            <Calculator className="feature-icon" />
            <h3 className="feature-title">Accurate Calculations</h3>
            <p className="feature-description">Precise point calculations based on the latest Arcade program rules and seasonal logic.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="feature-card"
          >
            <Trophy className="feature-icon" />
            <h3 className="feature-title">Milestone Tracking</h3>
            <p className="feature-description">Visual progress indicators for all Facilitator milestones and Arcade level achievements.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="feature-card"
          >
            <BookOpen className="feature-icon" />
            <h3 className="feature-title">Resource Library</h3>
            <p className="feature-description">Comprehensive collection of skill badges and lab-free courses to guide your learning journey.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="feature-card"
          >
            <Zap className="feature-icon" />
            <h3 className="feature-title">Real-time Updates</h3>
            <p className="feature-description">Instant calculations and progress updates as you complete badges and courses.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="feature-card"
          >
            <Target className="feature-icon" />
            <h3 className="feature-title">Seasonal Logic</h3>
            <p className="feature-description">Smart filtering that only counts badges from the current season for accurate point tracking.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="feature-card"
          >
            <Award className="feature-icon" />
            <h3 className="feature-title">Achievement Focus</h3>
            <p className="feature-description">Clear visibility into your progress toward becoming an Arcade Champion or Legend.</p>
          </motion.div>
        </div>
      </div>

      {/* Data Overview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          <DataOverview />
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <h2 className="cta-title">Ready to Level Up?</h2>
            <p className="cta-subtitle">Join thousands of learners tracking their Arcade journey</p>
            <Link
              to="/calculator"
              className="hero-button-primary"
            >
              Calculate Your Points Now
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Home;