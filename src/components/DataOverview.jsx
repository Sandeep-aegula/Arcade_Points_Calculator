import React from 'react';
import { skillBadgeData } from '../../data/SkillBadgeData';
import { labFreeCourseData } from '../../data/LabFreeCourseData';

const DataOverview = () => {
  const totalBadges = skillBadgeData.length;
  const totalCourses = labFreeCourseData.length;
  const totalItems = totalBadges + totalCourses;

  // Get unique levels
  const levels = [...new Set(skillBadgeData.map(item => item.level))];

  // Calculate total labs
  const totalLabs = skillBadgeData.reduce((sum, badge) => sum + badge.labs, 0);

  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      border: '1px solid #333',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      color: '#fff'
    }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '18px', fontWeight: 'bold' }}>
        Data Overview
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4ade80' }}>{totalItems}</div>
          <div style={{ fontSize: '14px', color: '#9ca3af' }}>Total Resources</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#60a5fa' }}>{totalBadges}</div>
          <div style={{ fontSize: '14px', color: '#9ca3af' }}>Skill Badges</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f59e0b' }}>{totalCourses}</div>
          <div style={{ fontSize: '14px', color: '#9ca3af' }}>Lab-Free Courses</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#a855f7' }}>{totalLabs}</div>
          <div style={{ fontSize: '14px', color: '#9ca3af' }}>Total Labs</div>
        </div>
      </div>
      <div style={{ marginTop: '12px', fontSize: '14px', color: '#9ca3af' }}>
        Available levels: {levels.join(', ')}
      </div>
    </div>
  );
};

export default DataOverview;