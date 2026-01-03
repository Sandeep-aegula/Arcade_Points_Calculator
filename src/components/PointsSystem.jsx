import React from 'react';
import './PointsSystem.css';

const PointsSystem = ({ data }) => {
  return (
    <div className="points-system-card">
      {/* Background effects */}
      <div className="points-background">
        <div className="points-stars"></div>
        <div className="points-grid"></div>
      </div>

      {/* Content */}
      <div className="points-content">
        <h2 className="points-title">POINTS SYSTEM</h2>

        <div className="points-list">
          {/* Skill Lab */}
          <div className="points-item">
            <div className="points-icon-wrapper">
              <div className="pixel-icon pixel-badge"></div>
            </div>
            <div className="points-text">
              <span className="points-label">Completing a Skill Lab:</span>
              <span className="points-value">0.5 point</span>
            </div>
          </div>

          {/* Trivia */}
          <div className="points-item">
            <div className="points-icon-wrapper">
              <div className="pixel-icon pixel-coin"></div>
            </div>
            <div className="points-text">
              <span className="points-label">Completing a Trivia:</span>
              <span className="points-value">1 point</span>
            </div>
          </div>

          {/* Game */}
          <div className="points-item">
            <div className="points-icon-wrapper">
              <div className="pixel-icon pixel-coin"></div>
            </div>
            <div className="points-text">
              <span className="points-label">Completing a Game:</span>
              <span className="points-value">1 point</span>
            </div>
          </div>

          {/* Free Lab */}
          <div className="points-item">
            <div className="points-icon-wrapper">
              <div className="pixel-icon pixel-lightning"></div>
            </div>
            <div className="points-text">
              <span className="points-label">Completing a Free Lab:</span>
              <span className="points-value">0 points</span>
            </div>
          </div>
        </div>

        {/* Arcade Levels */}
        {data && (
          <div className="arcade-levels">
            <h3 className="points-example-title">Arcade Levels</h3>
            <div className="arcade-levels-list">
              <div className={`arcade-level ${data.arcade_level === 'Arcade Legend' ? 'current' : ''}`}>
                <span className="level-name">Arcade Legend</span>
                <span className="level-points">95 Points</span>
                <span className="level-reward">The ultimate prize collection!</span>
              </div>
              <div className={`arcade-level ${data.arcade_level === 'Arcade Champion' ? 'current' : ''}`}>
                <span className="level-name">Arcade Champion</span>
                <span className="level-points">75 Points</span>
                <span className="level-reward">Premium rewards await!</span>
              </div>
              <div className={`arcade-level ${data.arcade_level === 'Arcade Ranger' ? 'current' : ''}`}>
                <span className="level-name">Arcade Ranger</span>
                <span className="level-points">65 Points</span>
                <span className="level-reward">Unlock exclusive accessories!</span>
              </div>
              <div className={`arcade-level ${data.arcade_level === 'Arcade Trooper' ? 'current' : ''}`}>
                <span className="level-name">Arcade Trooper</span>
                <span className="level-points">45 Points</span>
                <span className="level-reward">Get upgraded essentials!</span>
              </div>
              <div className={`arcade-level ${data.arcade_level === 'Arcade Novice' ? 'current' : ''}`}>
                <span className="level-name">Arcade Novice</span>
                <span className="level-points">25 Points</span>
                <span className="level-reward">Unlock your first rewards!</span>
              </div>
            </div>
            {data.arcade_level !== 'None' && (
              <div className="current-level">
                <p>Current Level: <strong>{data.arcade_level}</strong> - {data.arcade_level_reward}</p>
              </div>
            )}
          </div>
        )}

        {/* Example Section */}
        <div className="points-example">
          <h3 className="points-example-title">Example</h3>
          <div className="points-example-content">
            <div className="example-icons">
              <div className="example-icon-wrapper">
                <div className="pixel-icon pixel-badge small"></div>
                <span className="example-label">+0.5</span>
              </div>
              <span className="example-plus">+</span>
              <div className="example-icon-wrapper">
                <div className="pixel-icon pixel-coin small"></div>
                <span className="example-label">+1</span>
              </div>
              <span className="example-plus">+</span>
              <div className="example-icon-wrapper">
                <div className="pixel-icon pixel-coin small"></div>
                <span className="example-label">+1</span>
              </div>
              <span className="example-equals">=</span>
              <div className="example-total">
                <span className="example-total-value">2.5</span>
                <span className="example-total-label">points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointsSystem;

