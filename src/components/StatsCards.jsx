import React from "react";

const StatsCards = ({ totalPoints, bonus, tier, totalBadges, completedMilestones }) => {
    // Define level thresholds
    const levels = [
        { name: 'Arcade Novice', points: 25, reward: 'Unlock your first rewards!' },
        { name: 'Arcade Trooper', points: 45, reward: 'Get upgraded essentials!' },
        { name: 'Arcade Ranger', points: 65, reward: 'Unlock exclusive accessories!' },
        { name: 'Arcade Champion', points: 75, reward: 'Premium rewards await!' },
        { name: 'Arcade Legend', points: 95, reward: 'The ultimate prize collection!' }
    ];

    const currentLevelIndex = levels.findIndex(level => level.name === tier);
    const currentLevel = levels[currentLevelIndex];
    const nextLevel = levels[currentLevelIndex + 1];
    const progress = nextLevel ? Math.min((totalPoints / nextLevel.points) * 100, 100) : 100;
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

            {/* TOTAL POINTS */}
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-green-800/20">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-300">Total Points</h5>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trophy h-5 w-5 sm:h-6 sm:w-6 text-yellow-500">
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                </div>

                <p className="text-2xl sm:text-3xl font-bold text-white">{totalPoints}</p>

                <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-gray-400">Base: {totalPoints}</span>
                    <span className="text-xs sm:text-sm text-green-400">+{bonus} bonus</span>
                </div>
            </div>

            {/* ARCADE TIER */}
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-green-800/20">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-300">Arcade Tier</h5>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-circle-alert h-6 w-6 text-gray-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                    </svg>
                </div>

                <p className="text-2xl sm:text-3xl font-bold text-white">
                    {tier || "Not Ranked"}
                </p>
                {currentLevel && (
                    <p className="mt-1 text-xs sm:text-sm text-gray-400">{currentLevel.reward}</p>
                )}
                {nextLevel && (
                    <div className="mt-3">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Progress to {nextLevel.name}</span>
                            <span>{totalPoints}/{nextLevel.points}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                )}
                {!nextLevel && currentLevelIndex === levels.length - 1 && (
                    <p className="mt-2 text-xs sm:text-sm text-green-400">Max level reached!</p>
                )}
                <p className="mt-2 text-xs sm:text-sm text-gray-400">{totalBadges} total badges</p>
            </div>

            {/* COMPLETED MILESTONES */}
            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg border border-green-800/20 sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-300">Completed Milestones</h5>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-target h-5 w-5 sm:h-6 sm:w-6 text-green-500">
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="6"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                </div>

                <p className="text-2xl sm:text-3xl font-bold text-white">
                    {completedMilestones}
                </p>

                <p className="mt-2 text-xs sm:text-sm text-gray-400">
                    out of 4 milestones
                </p>
            </div>

        </div>
    );
};

export default StatsCards;
