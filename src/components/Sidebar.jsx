import React from 'react';
import { Mail, MapPin, Brain } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import userPhoto from '../assets/profile.jpg';
import TiltedCard from './TiltedCard';

const Sidebar = () => {
  return (
    <aside className="sidebar glass-card">
      <div className="profile-image" style={{ background: 'transparent', overflow: 'visible' }}>
        <TiltedCard
          imageSrc={userPhoto}
          altText="Ahammed Shihabudeen"
          captionText="Ahammed Shihabudeen"
          containerHeight="250px"
          containerWidth="200px"
          imageHeight="250px"
          imageWidth="200px"
          rotateAmplitude={14}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
        />
      </div>

      <div className="profile-info">
        <div className="sidebar-status">
          <span className="status-dot"></span>
          <span>Available for Hire</span>
        </div>
        <h2>Ahammed Shihabudeen</h2>
        <p className="role">AI &amp; ML Engineer</p>
        <p className="location"><MapPin size={13} /> Kerala, India</p>
      </div>

      <div className="social-links">
        <a href="mailto:shihabameen386@gmail.com" aria-label="Email"><Mail size={18} /></a>
        <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" aria-label="Github"><FaGithub style={{ fontSize: '18px' }} /></a>
        <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin style={{ fontSize: '18px' }} /></a>
      </div>

      <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" className="btn-primary">
        <Brain size={16} /> View GitHub
      </a>

      <div className="sidebar-footer">
        <p>© 2026 Ahammed Shihabudeen</p>
      </div>
    </aside>
  );
};

export default Sidebar;
