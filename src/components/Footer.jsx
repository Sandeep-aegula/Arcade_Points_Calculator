import React from 'react';
import { Github, ExternalLink, Heart, Cloud, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t-2 border-gray-700 mt-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-blue-500" />
              <Award className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold text-white">Arcade Calculator</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Calculate your Google Cloud Skills profile points and track your progress towards earning exclusive swags and rewards.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://cloud.google.com/arcade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center space-x-1"
              >
                <span className="text-sm">Official Arcade</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.skills.google"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                >
                  <span>Google Skills</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                >
                  <span>Cloud Training</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://cloud.google.com/certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center space-x-1"
                >
                  <span>Certifications</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">About</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                Built with ❤️ for the Google Cloud community to help track arcade progress and celebrate achievements.
              </p>
              <div className="flex items-center space-x-4 pt-2">
                <a
                  href="https://github.com/Sandeep-aegula/Arcade_Points_Calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Frontend</span>
                </a>
                <a
                  href="https://github.com/Sandeep-aegula/Arcade_Points_Calculator_Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                >
                  <Github size={16} />
                  <span>Backend</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Google Cloud Arcade Points Calculator. Not officially affiliated with Google Cloud.
            </div>
            <div className="flex items-center space-x-1 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by Sandeep Aegula</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;