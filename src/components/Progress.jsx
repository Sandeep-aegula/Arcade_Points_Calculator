const Progress = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

                {/* Total Points */}
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Total Points</h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon-yellow"
                        >
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                            <path d="M4 22h16"></path>
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                    </div>

                    <p className="value">4</p>

                    <div className="sub-info">
                        <span className="text-gray-400 text-xs sm:text-sm">Base: 4</span>
                        <span className="text-green-400 text-xs sm:text-sm">+0 bonus</span>
                    </div>
                </div>

                {/* Arcade Tier */}
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Arcade Tier</h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon-gray"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>

                    <p className="not-ranked">Not Ranked</p>
                    <p className="info-small">8 total badges</p>
                </div>

                {/* Completed Milestones */}
                <div className="card sm:col-span-2 md:col-span-1">
                    <div className="card-header">
                        <h5 className="card-title">Completed Milestones</h5>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon-green"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <circle cx="12" cy="12" r="6"></circle>
                            <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                    </div>

                    <p className="value">0</p>
                    <p className="info-small">out of 4 milestones</p>
                </div>

            </div>
        </div>
    );
}

export default Progress;
