import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">SHIHAB.DEV</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="section hero">
          <div className="profile-container">
            <img 
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop&q=60" 
              alt="Ahammed Shihabudeen" 
              className="profile-img"
            />
          </div>
          <h2>// AI & Machine Learning Engineer</h2>
          <h1>Ahammed <span>Shihabudeen</span></h1>
          <p>
            Architecting the future of intelligence through scalable LLM pipelines, 
            RAG systems, and production-ready Computer Vision solutions.
          </p>
          <div className="hero-btns">
            <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" className="btn primary">
              View GitHub <span>→</span>
            </a>
            <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer" className="btn secondary">
              LinkedIn
            </a>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2026 Ahammed Shihabudeen. Built with passion for AI.</p>
      </footer>
    </div>
  )
}

export default App
