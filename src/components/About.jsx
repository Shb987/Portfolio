import React from 'react'

const About = () => {
  return (
    <section id="about" className="section about">
      <h3 className="section-title">The <span>Professional</span></h3>
      <div className="glass p-12">
        <p className="description" style={{ textAlign: 'left', lineHeight: '1.8', fontSize: '1.15rem' }}>
          As a dedicated <strong>AI & Machine Learning Engineer with 3+ years of professional experience</strong>, 
          I specialize in architecting and deploying high-performance intelligent systems. My expertise 
          lies at the intersection of deep learning and scalable software engineering, with a proven 
          track record in developing production-ready solutions using <strong>LLMs, RAG, and Computer Vision</strong>.
        </p>
        <div style={{ margin: '2rem 0' }}></div>
        <p className="description" style={{ textAlign: 'left', lineHeight: '1.8', fontSize: '1.15rem' }}>
          I have a passion for transforming complex data into actionable intelligence, ensuring that 
          AI models are not only mathematically sound but also robust, secure, and seamlessly 
          integrated into enterprise workflows. My approach combines rigorous data analysis with 
          modern DevOps practices to deliver AI that scales.
        </p>
      </div>
    </section>
  )
}

export default About
