import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, ExternalLink } from 'lucide-react';

const BadgeCard = ({ badge, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-black/50 rounded-lg p-4 border border-gray-800/50 hover:bg-black/60 border-green-500/50 bg-gradient-to-br from-green-900/20 to-black/50 transition-all duration-300 hover:border-green-400"
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 bg-black/50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-800 flex-shrink-0">
                    <img
                        alt={badge.title}
                        loading="lazy"
                        className="object-contain w-10 h-10"
                        src={badge.image}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 min-w-0">
                        <h4 className="text-white text-sm font-medium line-clamp-2">
                            {badge.title}
                        </h4>
                        <a
                            href={badge.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 flex-shrink-0"
                        >
                            <ExternalLink size={12} />
                        </a>
                    </div>
                    <span className="mt-1 inline-block px-2 py-0.5 rounded-full text-xs bg-yellow-900/30 text-yellow-400">
                        {badge.category || 'Skill Badge'}
                    </span>
                </div>
            </div>
            
            <div className="flex justify-between text-sm">
                <div className="flex items-center gap-1 text-gray-400">
                    <Calendar size={12} />
                    <span className="text-xs">{badge.earned || 'Recent'}</span>
                </div>
                <div className="flex items-center gap-1 text-green-400 font-medium">
                    <Award size={12} />
                    <span className="text-xs">{badge.points || '0.5'} pts</span>
                </div>
            </div>
        </motion.div>
    );
};

export default BadgeCard;
