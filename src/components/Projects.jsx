import React from 'react'

const projects = [
  {
    title: "Miki",
    subtitle: "AI-Powered EdTech Platform",
    role: "Backend & AI Engineer",
    tech: ["Python", "FastAPI", "MongoDB", "GPT-4o", "RAG", "WebSockets"],
    description: "Built scalable backend for AI-based evaluation of handwritten exams using GPT-4o Vision + RAG."
  },
  {
    title: "PronunX",
    subtitle: "AI-Based Pronunciation Trainer",
    role: "ML & Backend Developer",
    tech: ["Python", "Django", "Librosa", "ML", "SQLite"],
    description: "An AI-driven web platform for real-time English pronunciation correction with audio feature extraction."
  },
  {
    title: "AI Interview Bot",
    subtitle: "End-to-End Interview System",
    role: "Full-Stack & AI Developer",
    tech: ["React", "Django", "OpenCV", "DeepFace", "PostgreSQL"],
    description: "Integrated voice transcription and facial emotion analysis for non-verbal assessment during interviews."
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section projects">
      <h3 className="section-title">Featured Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="glass project-card">
            <div className="project-content">
              <h4>{project.title}</h4>
              <h5>{project.subtitle}</h5>
              <p className="role">{project.role}</p>
              <p className="desc">{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
