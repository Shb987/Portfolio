import React from 'react'

const skillData = [
  {
    category: "AI & Deep Learning",
    items: ["LLMs (GPT-4, Llama)", "RAG Pipelines", "Transformers (BERT, ViT)", "PyTorch", "TensorFlow", "OpenCV"]
  },
  {
    category: "LLM Ops & Data",
    items: ["LangChain", "LlamaIndex", "Pinecone", "Vector DBs", "Scikit-learn", "Pandas"]
  },
  {
    category: "Engineering Stack",
    items: ["Python", "FastAPI", "Django", "RESTful APIs", "WebSockets", "R Programming"]
  },
  {
    category: "Architecture & Cloud",
    items: ["AWS", "Docker", "Firebase", "MongoDB", "PostgreSQL", "CI/CD"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h3 className="section-title">Technical <span>Ecosystem</span></h3>
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
