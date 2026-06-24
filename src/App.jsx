import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

// Icons for tools
import {
  ArrowRight,
  Atom,
  Hexagon,
  Database,
  Zap,
  Code2,
  Palette,
  Terminal,
  Mail,
  Phone,
  MapPin,
  Box,
  Plus,
  Minus,
  ExternalLink,
  Send,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item glass-card ${isOpen ? 'active' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <p>{question}</p>
        <div className="faq-icon-wrapper">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="faq-answer-wrapper"
          >
            <div className="faq-answer">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const key = id.replace('contact-', '');
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82c24588-997f-41f2-a425-9bf387808cb5", // User needs to replace this
          ...formData
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const faqs = [
    {
      question: "What is your core AI/ML tech stack?",
      answer: "My core expertise lies in LLMs (GPT-4, Llama), RAG pipelines, and Computer Vision using PyTorch and TensorFlow. I also work with LangChain, LlamaIndex, Pinecone, and vector databases to build scalable AI backends with FastAPI and Python."
    },
    {
      question: "What is your typical AI project workflow?",
      answer: "I start with problem framing and data analysis, then design the AI architecture (model selection, RAG pipeline or CV pipeline), followed by backend API development with FastAPI, integration with cloud infrastructure, and finally monitoring and continuous improvement in production."
    },
    {
      question: "How do you handle large-scale LLM deployments?",
      answer: "I leverage LangChain and LlamaIndex for orchestration, Pinecone or similar vector DBs for efficient retrieval, and FastAPI for serving. I optimize for latency, token usage, and fallback strategies to ensure production reliability at scale."
    },
    {
      question: "How do you ensure model quality and performance?",
      answer: "I rigorously evaluate models using domain-specific benchmarks, conduct prompt engineering, and perform A/B testing. I combine MLOps practices with CI/CD pipelines and cloud monitoring (AWS CloudWatch) to maintain performance over time."
    },
    {
      question: "Can you build end-to-end Computer Vision solutions?",
      answer: "Yes, I have built production-ready Computer Vision systems using OpenCV, PyTorch, and deep learning models like ViT and BERT. Examples include facial emotion analysis for AI interview assessment and handwritten exam evaluation using GPT-4o Vision."
    }
  ];

  return (
    <div className="app-layout">
      <Helmet>
        <title>Ahammed Shihabudeen | AI &amp; Machine Learning Engineer</title>
        <meta name="description" content="Portfolio of Ahammed Shihabudeen, an AI & Machine Learning Engineer specializing in LLMs, RAG pipelines, Computer Vision, and production-ready AI systems using Python, FastAPI, and cloud infrastructure." />
        <meta name="keywords" content="Ahammed Shihabudeen, AI Engineer, Machine Learning Engineer, LLM, RAG, Computer Vision, Python, FastAPI, PyTorch, TensorFlow, LangChain, AI Portfolio, Kerala" />
        <meta name="author" content="Ahammed Shihabudeen" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahammed Shihabudeen | AI & ML Engineer Portfolio" />
        <meta property="og:description" content="Explore production-ready AI systems, LLM pipelines, and Computer Vision solutions built by Ahammed Shihabudeen." />
        <meta property="og:image" content="/assets/profile.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ahammed Shihabudeen | AI & ML Engineer Portfolio" />
        <meta name="twitter:description" content="Explore production-ready AI systems, LLM pipelines, and Computer Vision solutions built by Ahammed Shihabudeen." />
        <meta name="twitter:image" content="/assets/profile.jpg" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://github.com/Shb987" />
      </Helmet>

      <Navbar />
      <Sidebar />

      <main className="main-content">
        {/* HERO SECTION */}
        <section id="home" className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Architecting <span className="text-gradient">Intelligent</span> <br />
              AI Systems
            </h1>
            <p className="hero-subtitle">
              I'm Ahammed Shihabudeen, an AI & Machine Learning Engineer with 3+ years of professional experience building scalable LLM pipelines, RAG systems, and production-ready Computer Vision solutions.
            </p>

            <div className="stats-grid">
              <div className="stat-item">
                <h3>3+</h3>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>AI PROJECTS BUILT</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>TECHNOLOGIES MASTERED</p>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary-large">Let's Talk</a>
              <a href="#projects" className="btn-secondary">View My Work <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
          <div className="projects-grid">
            {[
              {
                title: 'Miki',
                subtitle: 'AI-Powered EdTech Platform',
                role: 'Backend & AI Engineer',
                tech: ['Python', 'FastAPI', 'MongoDB', 'GPT-4o', 'RAG', 'WebSockets'],
                desc: 'Built scalable backend for AI-based evaluation of handwritten exams using GPT-4o Vision + RAG pipelines.'
              },
              {
                title: 'PronunX',
                subtitle: 'AI-Based Pronunciation Trainer',
                role: 'ML & Backend Developer',
                tech: ['Python', 'Django', 'Librosa', 'ML', 'SQLite'],
                desc: 'An AI-driven web platform for real-time English pronunciation correction with audio feature extraction.'
              },
              {
                title: 'AI Interview Bot',
                subtitle: 'End-to-End Interview System',
                role: 'Full-Stack & AI Developer',
                tech: ['React', 'Django', 'OpenCV', 'DeepFace', 'PostgreSQL'],
                desc: 'Integrated voice transcription and facial emotion analysis for non-verbal assessment during AI-driven interviews.'
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                className="project-card glass-card ai-project-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="project-image ai-project-image">
                  <div className="ai-project-overlay">
                    <span className="ai-badge">AI Project</span>
                    <h4>{project.subtitle}</h4>
                  </div>
                  <div className="ai-project-pattern"></div>
                </div>
                <div className="project-info">
                  <p className="project-role">{project.role}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-tags">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section id="tools" className="tools-section">
          <h2 className="section-title">Technical <span className="text-gradient">Ecosystem</span></h2>
          <div className="tools-grid">
            {[
              { name: 'LLMs (GPT-4, Llama)', desc: 'AI & Deep Learning', icon: <Atom size={28} className="glow-icon" /> },
              { name: 'RAG Pipelines', desc: 'Retrieval-Augmented Gen.', icon: <Database size={28} className="glow-icon" /> },
              { name: 'PyTorch', desc: 'Deep Learning Framework', icon: <Zap size={28} className="glow-icon" /> },
              { name: 'LangChain', desc: 'LLM Orchestration', icon: <Hexagon size={28} className="glow-icon" /> },
              { name: 'FastAPI', desc: 'AI Backend Engineering', icon: <Terminal size={28} className="glow-icon" /> },
              { name: 'OpenCV', desc: 'Computer Vision', icon: <Palette size={28} className="glow-icon" /> },
              { name: 'AWS & Docker', desc: 'Cloud & DevOps', icon: <Box size={28} className="glow-icon" /> },
              { name: 'Python', desc: 'Core Language', icon: <Code2 size={28} className="glow-icon" /> },
            ].map((tool, idx) => (
              <motion.div
                key={idx}
                className="tool-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <div className="tool-info">
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="experience-section">
          <h2 className="section-title">Professional <span className="text-gradient">Timeline</span></h2>
          <div className="experience-list">
            {[
              {
                company: 'Logiprompt Techno Solutions India Pvt. Ltd',
                role: 'Software Developer — AI & ML Specialist',
                desc: 'Built scalable AI backends using FastAPI, Python, NoSQL, and cloud services. Developed LLM and RAG-based systems for intelligent data retrieval and automation. Collaborated across teams to deliver production-ready solutions.',
                date: 'Jul 2025 - Present'
              },
              {
                company: 'Srishti Innovative Pvt Limited',
                role: 'Data Scientist',
                desc: 'Built and maintained scalable ML and data pipelines using Python and SQL. Researched and applied modern AI/ML frameworks to improve solutions. Mentored teams in machine learning and data analysis.',
                date: 'Jul 2023 - Jul 2025'
              },
              {
                company: 'NIELIT Calicut',
                role: 'AI/ML Intern',
                desc: 'Worked across the full data science lifecycle — from data preprocessing to model development and evaluation.',
                date: 'Apr 2023 - Jun 2023'
              },
            ].map((exp, idx) => (
              <motion.div
                key={idx}
                className="exp-card glass-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="exp-content">
                  <h3>{exp.company}</h3>
                  <p className="exp-role">{exp.role}</p>
                  <p>{exp.desc}</p>
                  <span className="exp-date">{exp.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className="faq-section">
          <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === idx}
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="contact-header">
            <span className="contact-badge"><CheckCircle2 size={14} /> Available for Work</span>
            <h2 className="section-title">Let's Connect &amp; <span className="text-gradient">Collaborate</span></h2>
            <p className="contact-lead">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          </div>

          <div className="contact-container">
            {/* LEFT: Info Panel */}
            <div className="contact-info-panel">
              <div className="contact-info-card glass-card">
                <h3>Get in Touch</h3>
                <p className="contact-info-sub">Available for high-impact AI/ML engineering roles and strategic collaborations. I typically respond within 24 hours.</p>

                <div className="contact-details">
                  <a href="mailto:shihabameen386@gmail.com" className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <Mail size={18} />
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Primary Email</span>
                      <span className="contact-detail-value">shihabameen386@gmail.com</span>
                    </div>
                    <ExternalLink size={14} className="contact-detail-arrow" />
                  </a>

                  <a href="tel:+917025003123" className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <Phone size={18} />
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Contact Number</span>
                      <span className="contact-detail-value">+91 7025003123</span>
                    </div>
                    <ExternalLink size={14} className="contact-detail-arrow" />
                  </a>

                  <div className="contact-detail-item no-link">
                    <div className="contact-detail-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Location</span>
                      <span className="contact-detail-value">Kerala, India</span>
                    </div>
                  </div>

                  <div className="contact-detail-item no-link">
                    <div className="contact-detail-icon">
                      <Clock size={18} />
                    </div>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">Response Time</span>
                      <span className="contact-detail-value">Within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div className="contact-social">
                  <a href="https://github.com/Shb987" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <FaGithub style={{ fontSize: '18px' }} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/shihab-ahmed-90b079245/" target="_blank" rel="noreferrer" className="contact-social-btn">
                    <FaLinkedin style={{ fontSize: '18px' }} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <form className="contact-form glass-card" onSubmit={handleContactSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input id="contact-name" type="text" placeholder="John Doe" required value={formData.name} onChange={handleInputChange} disabled={isSubmitting} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleInputChange} disabled={isSubmitting} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" type="text" placeholder="Project Collaboration" required value={formData.subject} onChange={handleInputChange} disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Tell me about your project or idea..." required value={formData.message} onChange={handleInputChange} disabled={isSubmitting}></textarea>
              </div>
              
              {submitStatus === 'success' && <div className="submit-success" style={{ color: '#22c55e', marginBottom: '1rem', fontSize: '0.9rem' }}><CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'text-bottom' }}/> Message sent successfully! I'll get back to you soon.</div>}
              {submitStatus === 'error' && <div className="submit-error" style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>Something went wrong. Please try again.</div>}
              
              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        <footer className="footer" style={{ position: 'relative', zIndex: 10 }}>
          <div className="footer-inner">
            <p className="footer-copy">© 2026 <span className="text-gradient">Ahammed Shihabudeen</span> — AI & Machine Learning Engineer</p>
          </div>
        </footer>
      </main>

    </div>
  );
};

export default App;
