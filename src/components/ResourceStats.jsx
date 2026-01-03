import React from 'react';
import { skillBadgeData } from '../../data/SkillBadgeData';
import { labFreeCourseData } from '../../data/LabFreeCourseData';
import { Award, BookOpen, Clock, Target, TrendingUp, CheckCircle } from 'lucide-react';

const ResourceStats = ({ completedBadges = [] }) => {
  // Calculate statistics
  const totalSkillBadges = skillBadgeData.length;
  const totalLabFreeCourses = labFreeCourseData.length;
  const totalResources = totalSkillBadges + totalLabFreeCourses;

  // Count completed items
  const completedSkillBadges = skillBadgeData.filter(badge =>
    completedBadges.some(completed => completed.title === badge.title)
  ).length;

  const completedLabFreeCourses = labFreeCourseData.filter(course =>
    completedBadges.some(completed => completed.title === course.title)
  ).length;

  const totalCompleted = completedSkillBadges + completedLabFreeCourses;
  const completionPercentage = totalResources > 0 ? Math.round((totalCompleted / totalResources) * 100) : 0;

  // Calculate total labs and duration
  const totalLabs = skillBadgeData.reduce((sum, badge) => sum + badge.labs, 0);
  const totalDurationHours = skillBadgeData.reduce((sum, badge) => {
    const duration = badge.duration;
    if (duration === 'N/A') return sum;
    // Simple parsing - could be improved for more complex formats
    const hours = duration.match(/(\d+)\s*hours?/i);
    const minutes = duration.match(/(\d+)\s*minutes?/i);
    const hoursValue = hours ? parseInt(hours[1]) : 0;
    const minutesValue = minutes ? parseInt(minutes[1]) / 60 : 0;
    return sum + hoursValue + minutesValue;
  }, 0);

  // Level distribution
  const levelStats = skillBadgeData.reduce((acc, badge) => {
    acc[badge.level] = (acc[badge.level] || 0) + 1;
    return acc;
  }, {});

  const stats = [
    {
      title: 'Total Resources',
      value: totalResources,
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      title: 'Skill Badges',
      value: totalSkillBadges,
      icon: Award,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    },
    {
      title: 'Lab-Free Courses',
      value: totalLabFreeCourses,
      icon: BookOpen,
      color: 'text-green-400',
      bgColor: 'bg-green-500/20'
    },
    {
      title: 'Total Labs',
      value: totalLabs,
      icon: CheckCircle,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      title: 'Est. Hours',
      value: `${Math.round(totalDurationHours)}h`,
      icon: Clock,
      color: 'text-red-400',
      bgColor: 'bg-red-500/20'
    },
    {
      title: 'Completed',
      value: `${totalCompleted}/${totalResources}`,
      subtitle: `${completionPercentage}%`,
      icon: TrendingUp,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    }
  ];

  return (
    <div className="w-full">
      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.title}</div>
            {stat.subtitle && (
              <div className="text-xs text-gray-500 mt-1">{stat.subtitle}</div>
            )}
          </div>
        ))}
      </div>

      {/* Level Distribution */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Skill Badge Levels</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(levelStats).map(([level, count]) => (
            <div key={level} className="flex items-center justify-between">
              <span className="text-gray-300">{level}</span>
              <div className="flex items-center gap-2">
                <div className="w-16 bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(count / totalSkillBadges) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 w-8 text-right">{count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Overview */}
      {totalCompleted > 0 && (
        <div className="mt-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Your Progress</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Skill Badges</span>
              <span className="text-gray-400">{completedSkillBadges}/{totalSkillBadges}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${totalSkillBadges > 0 ? (completedSkillBadges / totalSkillBadges) * 100 : 0}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Lab-Free Courses</span>
              <span className="text-gray-400">{completedLabFreeCourses}/{totalLabFreeCourses}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${totalLabFreeCourses > 0 ? (completedLabFreeCourses / totalLabFreeCourses) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourceStats;