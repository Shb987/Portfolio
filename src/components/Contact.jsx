import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="glass contact-container">
        <h3 className="section-title">Get In Touch</h3>
        <p>Currently open to new opportunities and interesting collaborations.</p>
        <div className="contact-links">
          <a href="mailto:shihabameen386@gmail.com" className="contact-item">
            <span className="icon">📧</span>
            shihabameen386@gmail.com
          </a>
          <a href="tel:7025003123" className="contact-item">
            <span className="icon">📞</span>
            +91 7025003123
          </a>
          <div className="social-links">
            <a href="https://github.com/Shb987" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
