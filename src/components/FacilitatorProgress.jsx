import React from "react";
import "./FacilitatorProgress.css";

const FacilitatorProgress = ({ stats }) => {
    const counts = {
        games: stats.arcade_games || 0,
        trivia: stats.trivia_badges || 0,
        skillBadges: stats.skill_badges || 0,
        courses: stats.lab_free_badges || 0
    };

    const milestones = [
        {
            id: 1,
            req: { games: 6, trivia: 5, skills: 14, courses: 6 },
            bonus: 2,
        },
        {
            id: 2,
            req: { games: 8, trivia: 6, skills: 28, courses: 12 },
            bonus: 8,
        },
        {
            id: 3,
            req: { games: 10, trivia: 7, skills: 38, courses: 18 },
            bonus: 15,
        },
        {
            id: 4,
            req: { games: 12, trivia: 8, skills: 52, courses: 24 },
            bonus: 25,
            isUltimate: true
        },
    ];

    const calculateCompletion = (req) => {
        const g = Math.min(counts.games, req.games) / req.games;
        const t = Math.min(counts.trivia, req.trivia) / req.trivia;
        const s = Math.min(counts.skillBadges, req.skills) / req.skills;
        const c = Math.min(counts.courses, req.courses) / req.courses;

        // Average progress across all 4 requirements
        return Math.round(((g + t + s + c) / 4) * 100);
    };

    return (
        <div className="milestone-container">
            <h1 className="main-title">Milestones Progress</h1>

            <div className="milestone-grid">
                {milestones.map((m) => {
                    const completion = calculateCompletion(m.req);
                    const isCompleted = completion === 100;

                    return (
                        <div className={`milestone-card ${isCompleted ? 'completed-card' : ''}`} key={m.id}>
                            <div className="badge-number">{m.isUltimate ? 'U' : m.id}</div>

                            <div className="milestone-header">
                                <h2>{m.isUltimate ? 'Ultimate Milestone' : `Milestone #${m.id}`}</h2>
                                <p>Complete requirements to unlock</p>
                            </div>

                            <div className="progress-list">
                                <Item label="Arcade Games" current={counts.games} target={m.req.games} />
                                <Item label="Trivia Games" current={counts.trivia} target={m.req.trivia} />
                                <Item label="Skill Badges" current={counts.skillBadges} target={m.req.skills} />
                                <Item label="Courses" current={counts.courses} target={m.req.courses} />
                            </div>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${completion}%` }}
                                ></div>
                            </div>

                            <p className="progress-text">{completion}% Completed</p>

                            <button className={`bonus-btn ${isCompleted ? 'unlocked' : ''}`}>
                                {isCompleted ? 'Unlocked!' : `+${m.bonus} Bonus`}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const Item = ({ label, current, target }) => {
    const isMet = current >= target;
    return (
        <div className="milestone-item">
            <span style={{ color: isMet ? '#4ade80' : '#9ca3af' }}>{label}</span>
            <span className="item-value" style={{ color: isMet ? '#4ade80' : '#fff' }}>
                {current}/{target}
            </span>
        </div>
    );
};

export default FacilitatorProgress;
