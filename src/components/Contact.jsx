import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="glass contact-card">
        <div className="contact-header">
          <h3 className="section-title" style={{ marginBottom: '1rem', textAlign: 'left' }}>
            Let's Build the <span>Future</span>
          </h3>
          <p className="contact-sub">
            Available for high-impact AI/ML engineering roles and strategic collaborations.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-method">
              <span className="label">Primary Email</span>
              <a href="mailto:shihabameen386@gmail.com" className="value">shihabameen386@gmail.com</a>
            </div>
            <div className="contact-method">
              <span className="label">Contact Number</span>
              <a href="tel:7025003123" className="value">+91 7025003123</a>
            </div>
          </div>
          
          <div className="contact-actions">
            <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer" className="glass-btn">
              LinkedIn Profile
            </a>
            <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" className="glass-btn">
              GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
