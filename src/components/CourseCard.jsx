import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Beaker, ExternalLink } from 'lucide-react';

const CourseCard = ({ course, index }) => {
    const {
        id,
        title,
        level = 'Beginner',
        duration = 'N/A',
        labs = 0,
        url
    } = course;

    const getLevelClasses = (level) => {
        switch (level.toLowerCase()) {
            case 'beginner':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
            case 'intermediate':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
            case 'advanced':
                return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col"
        >
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4">
                <div className="flex items-center justify-between">
                    <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Badge #{id}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelClasses(level)}`}>
                        {level}
                    </span>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white min-h-[3.5rem] line-clamp-2">
                    {title}
                </h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                        <Clock className="mr-2 text-blue-500" size={16} />
                        <span>Duration: {duration}</span>
                    </div>
                    <div className="flex items-center">
                        <Beaker className="mr-2 text-green-500" size={16} />
                        <span>{labs} Labs</span>
                    </div>
                </div>
                <div className="mt-auto">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-l from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                        href={url}
                    >
                        Start Learning
                        <ExternalLink className="ml-2 text-sm" size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;