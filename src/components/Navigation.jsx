import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Home, BookOpen, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/calculator', label: 'Calculator', icon: Calculator },
    { path: '/resources', label: 'Resources', icon: BookOpen },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-brand">
            Arcade Calculator
          </Link>

          <div className="nav-links">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
            <a
              href="https://cloud.google.com/arcade"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link external-link"
            >
              <ExternalLink size={16} />
              Arcade Official
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;