import './MileStoneBadge.css';
const MileStoneBadge = () => {
  return (
    <div className="milestone-card">
      {/* Header */}
      <div className="milestone-header">
        <div className="milestone-header-left">
          <div className="milestone-number">
            <span>1</span>
          </div>

          <h4 className="milestone-title">Milestone #1 🎖️</h4>
        </div>

        <div className="milestone-header-right">
          <span className="milestone-percent">25%</span>
          <span className="milestone-sub">Complete</span>
        </div>
      </div>

      {/* Progress Section */}
      <div className="milestone-progress-grid">
        {/* Games */}
        <div className="progress-box">
          <div className="progress-row">
            <div className="progress-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-games"
                viewBox="0 0 24 24"
              >
                <line x1="6" x2="10" y1="11" y2="11"></line>
                <line x1="8" x2="8" y1="9" y2="13"></line>
                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59..."></path>
              </svg>
              <p>Games</p>
            </div>
            <p className="progress-count">0/6</p>
          </div>

          <div className="progress-bar">
            <div className="progress-fill blue" style={{ width: "0%" }}></div>
          </div>
        </div>

        {/* Trivia */}
        <div className="progress-box">
          <div className="progress-row">
            <div className="progress-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-trivia"
                viewBox="0 0 24 24"
              >
                <path d="M12 5a3 3 0 1 0-5.997.125..."></path>
              </svg>
              <p>Trivia</p>
            </div>
            <p className="progress-count">0/5</p>
          </div>

          <div className="progress-bar">
            <div className="progress-fill purple" style={{ width: "0%" }}></div>
          </div>
        </div>

        {/* Skills */}
        <div className="progress-box">
          <div className="progress-row">
            <div className="progress-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-skills"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              <p>Skills</p>
            </div>
            <p className="progress-count">8/14</p>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill yellow"
              style={{ width: "57%" }}
            ></div>
          </div>
        </div>

        {/* Courses */}
        <div className="progress-box">
          <div className="progress-row">
            <div className="progress-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-courses"
                viewBox="0 0 24 24"
              >
                <path d="M12 7v14"></path>
              </svg>
              <p>Courses</p>
            </div>
            <p className="progress-count">0/6</p>
          </div>

          <div className="progress-bar">
            <div className="progress-fill green" style={{ width: "0%" }}></div>
          </div>
        </div>
      </div>

      {/* Bonus */}
      <div className="bonus-box">
        <span className="bonus-text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-trophy"
            viewBox="0 0 24 24"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
          </svg>
          Potential Bonus
        </span>

        <span className="bonus-value">+2</span>
      </div>
    </div>
  );
};

export default MileStoneBadge;
