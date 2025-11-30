import React, { useState } from 'react';
import { scrapeProfile } from './api';
import BadgeCard from './components/BadgeCard';
import { Search, Loader2, AlertCircle, Trophy, Award, Target, CircleAlert, BookOpen, Award as AwardIcon, Gamepad2, Brain, ChevronDown } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    facilitator: true,
    milestones: true,
    badgeHistory: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await scrapeProfile(url);
      if (result.badges.length === 0) {
        setError('No badges found on this profile. Make sure the profile is public.');
      } else {
        setData(result);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch profile data. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app-main">
      <div className="background-gradient"></div>
      
      <div className="content-wrapper">
        <div className="content-inner">
          {/* Search Section */}
          <div className="section-spacing">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel"
            >
              <form onSubmit={handleSubmit} className="search-form">
                <div className="search-input-wrapper">
                  <div className="search-input-glow"></div>
                  <div className="search-input-container">
                    <Search className="search-icon" size={20} />
                    <input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://www.skills.google/public_profiles/..."
                      className="search-input"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="submit-button"
                    >
                      {loading ? <Loader2 className="animate-spin" size={20} /> : 'Calculate'}
                    </button>
                  </div>
                </div>
              </form>

              <AnimatePresence>
                {error && (
                  <Motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="error-message"
                  >
                    <AlertCircle size={20} />
                    <p>{error}</p>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>

            {data && (
              <>
                {/* Profile Header Section */}
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel"
                >
                  <div className="profile-header">
                    <div className="profile-info">
                      <div className="profile-avatar">
                        <Trophy size={40} className="text-green-400" />
                      </div>
                      <div className="profile-text">
                        <h3 className="profile-title">Google Skills Profile</h3>
                        <p className="profile-subtitle">Member since 2025</p>
                      </div>
                    </div>
                    <div className="profile-actions">
                      <button className="action-button button-yellow">
                        <Award size={20} />
                        Badge Tracker
                      </button>
                      <button className="action-button button-blue">
                        <Loader2 size={20} />
                        Refresh
                      </button>
                    </div>
                  </div>
                </Motion.div>

                {/* Stats Grid */}
                <Motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="stats-grid"
                >
                  {/* Total Points */}
                  <div className="stat-card">
                    <div className="stat-header">
                      <h5 className="stat-title">Total Points</h5>
                      <Trophy className="text-yellow-500" size={24} />
                    </div>
                    <p className="stat-value">{data.total_points || 0}</p>
                  </div>

                  {/* Total Badges */}
                  <div className="stat-card">
                    <div className="stat-header">
                      <h5 className="stat-title">Total Badges</h5>
                      <Award className="text-blue-500" size={24} />
                    </div>
                    <p className="stat-value">{data.badges?.length || 0}</p>
                  </div>

                  {/* Average Points */}
                  <div className="stat-card">
                    <div className="stat-header">
                      <h5 className="stat-title">Avg Points</h5>
                      <Target className="text-purple-500" size={24} />
                    </div>
                    <p className="stat-value">
                      {data.badges?.length > 0 
                        ? Math.round(data.total_points / data.badges.length) 
                        : 0}
                    </p>
                  </div>
                </Motion.div>

                {/* Badges Section */}
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-panel"
                >
                  <div className="badges-header">
                    <h3 className="badges-title">Badges</h3>
                    <span className="badges-count">{data.badges?.length || 0} badges</span>
                  </div>
                  <div className="badges-grid">
                    {data.badges?.map((badge, index) => (
                      <BadgeCard key={index} badge={badge} index={index} />
                    ))}
                  </div>
                </Motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;