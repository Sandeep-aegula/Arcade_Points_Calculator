import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Home, BookOpen, ExternalLink, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/calculator', label: 'Calculator', icon: Calculator },
    { path: '/resources', label: 'Resources', icon: BookOpen },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <Link to="/" className="nav-brand" onClick={closeMenu}>
            Arcade Calculator
          </Link>

          <div className="nav-links">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                onClick={closeMenu}
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
              onClick={closeMenu}
            >
              <ExternalLink size={16} />
              Arcade Official
            </a>
          </div>

          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="nav-mobile-menu">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`nav-link mobile ${location.pathname === path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
            <a
              href="https://cloud.google.com/arcade"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link mobile external-link"
              onClick={closeMenu}
            >
              <ExternalLink size={16} />
              Arcade Official
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;