import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span className="logo-icon">M</span>
          <span className="logo-text">Makebetter</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="nav-underline"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu glass"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="mobile-nav-item"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
