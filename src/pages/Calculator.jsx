import React, { useState, useEffect } from 'react';
import { scrapeProfile } from '../api';
import BadgeCard from '../components/BadgeCard';
import FacilitatorProgress from '../components/FacilitatorProgress';
import StatsCards from '../components/StatsCards';
import ResourceStats from '../components/ResourceStats';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Loader2, AlertCircle, Trophy, Award, Target, CircleAlert, BookOpen, Award as AwardIcon, Gamepad2, Brain, ChevronDown, MapPin, Zap, Star } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import '../App.css';

const Calculator = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    facilitator: true,
    milestones: true,
    badgeHistory: false
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllBadges, setShowAllBadges] = useState(false);

  const fetchProfile = async (profileUrl) => {
    setLoading(true);
    setError(null);
    try {
      const result = await scrapeProfile(profileUrl);
      if (result.badges.length === 0) {
        setError('No badges found on this profile. Make sure the profile is public.');
      } else {
        const userData = {
          ...result,
          profile_url: profileUrl,
          last_checked: new Date().toISOString(),
        };
        setData(userData);
        localStorage.setItem("arcade_user", JSON.stringify(userData));
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch profile data. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("arcade_user");
    if (saved) {
      const user = JSON.parse(saved);
      setData(user);
      if (user.profile_url) {
        setUrl(user.profile_url);

        // Auto-refresh if older than 24 hours
        const last = new Date(user.last_checked);
        const now = new Date();
        const hours = (now - last) / 36e5;

        if (hours >= 24) {
          console.log("Data is older than 24h, refreshing...");
          fetchProfile(user.profile_url);
        }
      }
    }
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url) return;
    await fetchProfile(url);
  };

  const handleClearData = () => {
    localStorage.removeItem("arcade_user");
    setData(null);
    setUrl('');
  };

  return (
    <>
      <Navigation />
      <main className="app-main mt-20">
      <div className="background-gradient"></div>

      <div className="content-wrapper">
        <div className="content-inner">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Arcade Points Calculator</h1>
            <p className="text-gray-300">Calculate your Google Arcade Facilitator milestones and levels</p>
          </div>

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
                        {data.profile_image ? (
                          <img src={data.profile_image} alt={data.username} className="w-full h-full object-cover rounded-full" />
                        ) : (
                          <Trophy size={40} className="text-blue-400" />
                        )}
                      </div>
                      <div className="profile-text">
                        <div className="flex items-center gap-3">
                          <h3 className="profile-title">{data.username || 'Google Skills Profile'}</h3>
                          {data.cohort_id && (
                            <span className={`px-2 py-0.5 rounded text-xs font-bold border ${data.cohort_id === 2 ? 'bg-purple-500/20 border-purple-500 text-purple-300' : 'bg-blue-500/20 border-blue-500 text-blue-300'}`}>
                              {data.cohort_year} Cohort {data.cohort_id}
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            {data.tier || 'Member'}
                          </span>
                          {data.xp && (
                            <span className="flex items-center gap-1">
                              <Star size={14} className="text-yellow-500" />
                              {data.xp}
                            </span>
                          )}
                          {data.streak && (
                            <span className="flex items-center gap-1">
                              <Zap size={14} className="text-orange-500" />
                              {data.streak}
                            </span>
                          )}
                          {data.country && (
                            <span className="flex items-center gap-1">
                              <MapPin size={14} className="text-red-400" />
                              {data.country}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="profile-actions">
                      <button className="action-button button-yellow" onClick={handleClearData}>
                        <Award size={20} />
                        Clear Data
                      </button>
                      <button className="action-button button-blue" onClick={handleSubmit}>
                        <Loader2 size={20} />
                        Refresh
                      </button>
                    </div>
                  </div>
                </Motion.div>

                {/* Facilitator Progress Section */}
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                >
                  <FacilitatorProgress stats={data} />
                </Motion.div>

                {/* Resource Statistics */}
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="glass-panel"
                >
                  <ResourceStats completedBadges={data?.badges || []} />
                </Motion.div>

                {/* Stats Grid */}
                <Motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="stats-grid-wrapper"
                >
                  <StatsCards
                    totalPoints={data.total_arcade_points || 0}
                    bonus={data.milestone_bonus || 0}
                    tier={data.arcade_level}
                    totalBadges={data.badges?.length || 0}
                    completedMilestones={data.milestone_completed || 'None'}
                    cohortId={data.cohort_id}
                    cohortYear={data.cohort_year}
                  />
                </Motion.div>


                {/* Badges History Section */}
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="glass-panel"
                >
                  <div className="badges-header">
                    <h3 className="badges-title">Badge History</h3>
                    <span className="badges-count">{data.badges?.length || 0} total badges</span>
                  </div>

                  {/* Search Bar */}
                  <div className="mb-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search badges by name or category..."
                        className="w-full pl-10 pr-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="badges-grid">
                    {data.badges
                      ?.filter(badge =>
                        badge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        badge.category.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      ?.sort((a, b) => new Date(b.earned || '1970-01-01') - new Date(a.earned || '1970-01-01'))
                      ?.slice(0, showAllBadges ? data.badges.length : 10)
                      ?.map((badge, index) => (
                        <BadgeCard key={index} badge={badge} index={index} />
                      ))}
                  </div>

                  {/* Show More/Less Button */}
                  {data.badges && data.badges.length > 10 && (
                    <div className="text-center mt-6">
                      <button
                        onClick={() => setShowAllBadges(!showAllBadges)}
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                      >
                        {showAllBadges ? 'Show Less' : 'Show More'}
                        <ChevronDown
                          className={`ml-2 transition-transform duration-200 ${showAllBadges ? 'rotate-180' : ''}`}
                          size={16}
                        />
                      </button>
                    </div>
                  )}
                </Motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
};

export default Calculator;