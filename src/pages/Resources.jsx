import React, { useState, useMemo } from 'react';
import { skillBadgeData } from '../../data/SkillBadgeData';
import { labFreeCourseData } from '../../data/LabFreeCourseData';
import Navigation from '../components/Navigation';
import ResourceStats from '../components/ResourceStats';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Award, ChevronDown, Filter, Search } from 'lucide-react';

const Resources = () => {
  const [filterLevel, setFilterLevel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [completedBadges] = useState([]); // This would come from props or context in a real app

  const initialDisplayCount = 20;

  // Combine data
  const allItems = useMemo(() => {
    const badges = skillBadgeData.map(item => ({ ...item, itemType: 'badge' }));
    const courses = labFreeCourseData.map(item => ({ ...item, itemType: 'course', level: 'Introductory', labs: 0, duration: 'N/A' }));
    return [...badges, ...courses];
  }, []);

  // Check if completed
  const isCompleted = (title) => {
    return completedBadges.some(badge => badge.title === title);
  };

  // Filtered and sorted data
  const filteredData = useMemo(() => {
    let filtered = allItems;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by level
    if (filterLevel !== 'All') {
      filtered = filtered.filter(item => item.level === filterLevel);
    }

    // Filter by status
    if (filterStatus === 'Completed') {
      filtered = filtered.filter(item => isCompleted(item.title));
    } else if (filterStatus === 'Incomplete') {
      filtered = filtered.filter(item => !isCompleted(item.title));
    }

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(item => item.itemType === filterType);
    }

    // Sort
    if (sortBy === 'labAsc') {
      filtered.sort((a, b) => a.labs - b.labs);
    } else if (sortBy === 'labDesc') {
      filtered.sort((a, b) => b.labs - a.labs);
    } else if (sortBy === 'durationAsc') {
      filtered.sort((a, b) => {
        if (a.duration === 'N/A') return 1;
        if (b.duration === 'N/A') return -1;
        return a.duration.localeCompare(b.duration);
      });
    } else if (sortBy === 'durationDesc') {
      filtered.sort((a, b) => {
        if (a.duration === 'N/A') return 1;
        if (b.duration === 'N/A') return -1;
        return b.duration.localeCompare(a.duration);
      });
    }

    return filtered;
  }, [allItems, filterLevel, filterStatus, sortBy, searchTerm, completedBadges, filterType]);

  const displayedItems = showAll ? filteredData : filteredData.slice(0, initialDisplayCount);
  const hasMoreItems = filteredData.length > initialDisplayCount;

  return (
    <>
      <Navigation />
      <main className="page-main dark:bg-gray-800 min-h-screen pb-20">
        <div className="page-container mt-20">
          {/* Header */}
          <div className="resources-header">
            <h1 className="resources-title">
              Learning Resources
            </h1>
            <p className="resources-subtitle">
              Explore Google Skill Badges and Lab-Free Courses to advance your Arcade journey
            </p>
          </div>

          {/* Stats Cards */}
          <ResourceStats />

          {/* Resource Type Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 mb-8">
            {/* Skill Badges Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-24 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">
                    <Award size={48} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col min-h-[260px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <Award size={16} className="text-white" />
                    <span className="ml-1">Guide</span>
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Skill Badges List</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow leading-relaxed">Comprehensive list of all available skill badges in Google Cloud Arcade with detailed information and requirements.</p>
                <button
                  onClick={() => setFilterType('badge')}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-transform duration-300 mt-auto"
                >
                  View Badges
                </button>
              </div>
            </div>

            {/* Lab-free Courses Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 overflow-hidden group">
              <div className="relative h-24 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-90"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">
                    <BookOpen size={48} />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col min-h-[260px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500 to-green-600 text-white">
                    <BookOpen size={16} className="text-white" />
                    <span className="ml-1">Guide</span>
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Lab-free Courses</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow leading-relaxed">Comprehensive list of all available lab-free courses in Google Cloud Arcade Facilitator Program's Syllabus.</p>
                <button
                  onClick={() => setFilterType('course')}
                  className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-transform duration-300 mt-auto"
                >
                  View Courses
                </button>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search badges and courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-4">
                {/* Level Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Level:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setFilterLevel('All')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterLevel === 'All'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterLevel('Introductory')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterLevel === 'Introductory'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Introductory
                    </button>
                    <button
                      onClick={() => setFilterLevel('Intermediate')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterLevel === 'Intermediate'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Intermediate
                    </button>
                  </div>
                </div>

                {/* Status Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Status:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setFilterStatus('All')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterStatus === 'All'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterStatus('Completed')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterStatus === 'Completed'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Completed
                    </button>
                    <button
                      onClick={() => setFilterStatus('Incomplete')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterStatus === 'Incomplete'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Incomplete
                    </button>
                  </div>
                </div>

                {/* Type Filter */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Type:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => setFilterType('all')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterType === 'all'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilterType('badge')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterType === 'badge'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Badges
                    </button>
                    <button
                      onClick={() => setFilterType('course')}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        filterType === 'course'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                      }`}
                    >
                      Courses
                    </button>
                  </div>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Default</option>
                    <option value="labAsc">Lab Count (Low to High)</option>
                    <option value="labDesc">Lab Count (High to Low)</option>
                    <option value="durationAsc">Duration (Short to Long)</option>
                    <option value="durationDesc">Duration (Long to Short)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="mb-6">
              <p className="text-gray-400">
                Showing {displayedItems.length} of {filteredData.length} items
              </p>
            </div>

            <div className="resources-grid">
              {displayedItems.map((item, index) => (
                <motion.div
                  key={`${item.itemType}-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`resource-card ${isCompleted(item.title) ? 'completed' : 'incomplete'}`}
                >
                  <div className="resource-header">
                    <div className={`resource-icon ${isCompleted(item.title) ? 'completed' : ''}`}>
                      {item.itemType === 'badge' ? (
                        <Award className="w-6 h-6 text-blue-400" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-green-400" />
                      )}
                    </div>
                    {isCompleted(item.title) && (
                      <div className="resource-badge">
                        <span className="badge-text">Completed</span>
                      </div>
                    )}
                  </div>

                  <h3 className="resource-title">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>

                  <p className="resource-type">
                    {item.itemType === 'badge' ? 'Skill Badge' : item.type}
                  </p>

                  <div className="resource-details">
                    {item.level && (
                      <p className="detail-item">
                        <span className="detail-label">Level:</span>
                        <span className="detail-value">{item.level}</span>
                      </p>
                    )}
                    {item.itemType === 'badge' && (
                      <>
                        <p className="detail-item">
                          <span className="detail-label">Labs:</span>
                          <span className="detail-value">{item.labs}</span>
                        </p>
                        <p className="detail-item">
                          <span className="detail-label">Duration:</span>
                          <span className="detail-value">{item.duration}</span>
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {hasMoreItems && !showAll && (
              <div className="show-more-container">
                <button
                  onClick={() => setShowAll(true)}
                  className="show-more-button"
                >
                  <span>Show All {filteredData.length} Items</span>
                  <ChevronDown size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Resources;