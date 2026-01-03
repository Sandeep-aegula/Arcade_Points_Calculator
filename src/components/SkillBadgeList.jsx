import React, { useState, useMemo } from 'react';
import { skillBadgeData } from '../../data/SkillBadgeData';
import { labFreeCourseData } from '../../data/LabFreeCourseData';

const SkillBadgeList = ({ completedBadges = [] }) => {
  const [filterLevel, setFilterLevel] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('');

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

    // Sort
    if (sortBy === 'labAsc') {
      filtered.sort((a, b) => a.labs - b.labs);
    } else if (sortBy === 'labDesc') {
      filtered.sort((a, b) => b.labs - a.labs);
    } else if (sortBy === 'durationAsc') {
      filtered.sort((a, b) => {
        if (a.duration === 'N/A') return 1;
        if (b.duration === 'N/A') return -1;
        // Simple string sort, could parse hours/minutes
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
  }, [allItems, filterLevel, filterStatus, sortBy, completedBadges]);

  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterLevel('All')}
            className={`px-3 py-2 rounded-full text-sm font-medium border ${
              filterLevel === 'All'
                ? 'bg-purple-700 text-white border-purple-800'
                : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterLevel('Introductory')}
            className={`px-3 py-2 rounded-full text-sm font-medium border ${
              filterLevel === 'Introductory'
                ? 'bg-purple-700 text-white border-purple-800'
                : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
            }`}
          >
            Introductory
          </button>
          <button
            onClick={() => setFilterLevel('Intermediate')}
            className={`px-3 py-2 rounded-full text-sm font-medium border ${
              filterLevel === 'Intermediate'
                ? 'bg-purple-700 text-white border-purple-800'
                : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
            }`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setFilterStatus('Completed')}
            className={`px-3 py-2 rounded-full text-sm font-medium border ${
              filterStatus === 'Completed'
                ? 'bg-purple-700 text-white border-purple-800'
                : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilterStatus('Incomplete')}
            className={`px-3 py-2 rounded-full text-sm font-medium border ${
              filterStatus === 'Incomplete'
                ? 'bg-purple-700 text-white border-purple-800'
                : 'bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600'
            }`}
          >
            Incomplete
          </button>
        </div>
        <label htmlFor="sortby" className="sr-only">Sort By</label>
        <select
          id="sortby"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 shadow-sm"
        >
          <option value="">Sort By</option>
          <option value="labAsc">Lab Count (Low to High)</option>
          <option value="labDesc">Lab Count (High to Low)</option>
          <option value="durationAsc">Duration (Short to Long)</option>
          <option value="durationDesc">Duration (Long to Short)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <div
            key={`${item.itemType}-${item.id}`}
            className={`p-4 rounded-lg border ${
              isCompleted(item.title)
                ? 'bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700'
                : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600'
            }`}
          >
            <h3 className="font-semibold text-lg mb-2">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {item.title}
              </a>
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
              Type: {item.itemType === 'badge' ? 'Skill Badge' : item.type}
            </p>
            {item.level && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Level: {item.level}
              </p>
            )}
            {item.itemType === 'badge' && (
              <>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Labs: {item.labs}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Duration: {item.duration}
                </p>
              </>
            )}
            <p className={`text-sm font-medium ${isCompleted(item.title) ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}`}>
              {isCompleted(item.title) ? 'Completed' : 'Not Completed'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBadgeList;