import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Award } from 'lucide-react';
import "./BadgeCard.css";

const BadgeCard = ({ badge, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`badge-card ${!badge.isValid ? 'invalid-badge' : ''}`}
        >
            <div className="badge-image">
                {badge.href ? (
                    <a href={badge.href} target="_blank" rel="noopener noreferrer">
                        <img src={badge.image} alt={badge.title} loading="lazy" />
                    </a>
                ) : (
                    <img src={badge.image} alt={badge.title} loading="lazy" />
                )}
            </div>

            <h3 className="badge-title">
                {badge.href ? (
                    <a href={badge.href} target="_blank" rel="noopener noreferrer">
                        {badge.title}
                    </a>
                ) : (
                    badge.title
                )}
            </h3>

            <div className="badge-info">
                <div className="badge-info-row">
                    <Calendar size={14} />
                    <span>{badge.earned}</span>
                </div>

                <div className="badge-info-row">
                    <Tag size={14} />
                    <span className={`badge-category ${badge.category.replace(/\s+/g, '').toLowerCase()}`}>
                        {badge.category}
                    </span>
                </div>

                {badge.isValid && (
                    <div className="badge-points">
                        <Award size={16} className="trophy-icon" />
                        <span>{badge.points} pts</span>
                    </div>
                )}
                
                {!badge.isValid && (
                    <div className="badge-validity">
                        <span className="invalid-text">This course is not from this cohort</span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default BadgeCard;
