import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Folder, Wrench, Briefcase, PenTool, Mail } from 'lucide-react';

const Navbar = () => {
  const [hoveredId, setHoveredId] = useState(null);
  
  const navItems = [
    { icon: <Home size={20} />, id: 'home', label: 'Home' },
    { icon: <Folder size={20} />, id: 'projects', label: 'Projects' },
    { icon: <Wrench size={20} />, id: 'tools', label: 'Tools' },
    { icon: <Briefcase size={20} />, id: 'experience', label: 'Experience' },
    { icon: <Mail size={20} />, id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar glass-card">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li 
            key={item.id}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="nav-item-wrapper"
          >
            <a href={`#${item.id}`} className="nav-link">
              <span className="nav-icon">{item.icon}</span>
              
              {/* Sliding Background Pill */}
              {hoveredId === item.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="nav-pill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Tooltip Effect */}
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="nav-tooltip"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
