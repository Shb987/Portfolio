import React from 'react'

const experiences = [
  {
    company: "Logiprompt Techno Solutions India Pvt. Ltd",
    role: "Software Developer (AI & ML Specialist)",
    period: "Jul 2025 - Present",
    points: [
      "Built scalable AI backends using FastAPI, Python, NoSQL, and cloud services.",
      "Developed LLM and RAG-based systems for intelligent data retrieval and automation.",
      "Collaborated across teams to deliver production-ready solutions."
    ]
  },
  {
    company: "Srishti Innovative Pvt Limited",
    role: "Data Scientist",
    period: "Jul 2023 - Jul 2025",
    points: [
      "Built and maintained scalable ML and data pipelines using Python and SQL.",
      "Researched and applied modern AI/ML frameworks to improve solutions.",
      "Mentored teams in machine learning and data analysis."
    ]
  },
  {
    company: "NIELIT Calicut",
    role: "AI/ML Intern",
    period: "Apr 2023 - Jun 2023",
    points: [
      "Worked across the full data science lifecycle, from data preprocessing to model development and evaluation."
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <h3 className="section-title">Professional <span>Timeline</span></h3>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="glass exp-item">
            <div className="exp-period">{exp.period}</div>
            <div className="exp-content">
              <h4>{exp.role}</h4>
              <h5>{exp.company}</h5>
              <ul>
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
