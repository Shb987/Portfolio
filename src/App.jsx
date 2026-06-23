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
        <div className="logo">AS</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      
      <main>
        <section id="hero" className="section hero">
          <h1>Ahammed Shihabudeen</h1>
          <h2>AI/ML Engineer</h2>
          <p>Building scalable AI solutions with LLMs, RAG, and Computer Vision.</p>
          <div className="hero-btns">
            <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" className="btn primary">GitHub</a>
            <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer" className="btn secondary">LinkedIn</a>
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
