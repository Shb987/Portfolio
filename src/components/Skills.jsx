import React from 'react'

const skillData = [
  {
    category: "Programming & Frameworks",
    items: ["Python", "R programming", "FastAPI", "Django", "Flask", "React.js"]
  },
  {
    category: "AI Tools & Libraries",
    items: ["LLMs", "Librosa", "OpenCV", "DeepFace", "Scikit-learn", "TensorFlow"]
  },
  {
    category: "Backend & Database",
    items: ["REST APIs", "WebSockets", "MongoDB", "PostgreSQL", "SQLite", "NoSQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Firebase", "Docker", "Git", "Linux", "AWS"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h3 className="section-title">Technical Expertise</h3>
      <div className="skills-grid">
        {skillData.map((skill, index) => (
          <div key={index} className="glass skill-card">
            <h4>{skill.category}</h4>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
