import React from 'react'

export default function Contact() {
  return (
    <section className="page contact">
      <div>
        <h2>Contact</h2>
        <p className="lead">
          Want to collaborate on a web app, IoT build, or creative edit?
          Reach out and let’s make something impactful.
        </p>
        <div className="contact-cards">
          <a className="contact-card" href="mailto:akredhruvesh@gmail.com">
            <span>Email - Personal</span>
            <strong>akredhruvesh@gmail.com</strong>
          </a>
          <a className="contact-card" href="mailto:developer.dhru@gmail.com">
            <span>Email - Developer</span>
            <strong>developer.dhru@gmail.com</strong>
           </a>
          <a className="contact-card" href="mailto:editor.ditto15@gmail.com">
            <span>Email - Editor</span>
            <strong>editor.ditto15@gmail.com</strong>
          </a>
          <a className="contact-card" href="tel:+918862051316">
            <span>Phone - Primary</span>
            <strong>+91 88620 51316</strong>
          </a>
          <a className="contact-card" href="tel:+917498044215">
            <span>Phone - Alternate</span>
            <strong>+91 74980 44215</strong>
          </a>
        </div>
      </div>
      <div className="contact-panel">
        <h3>Let’s build</h3>
        <p>
          Open to internships, collaborations, and learning-driven challenges.
          Share a short brief and timeline, and I will respond quickly.
        </p>
        <a className="btn primary" href="mailto:akredhruvesh@gmail.com">Send Email</a>
        <div className="quick-links">
          <a className="btn light" href="https://www.instagram.com/_ditto.edits_15/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="btn light" href="/resume.pdf" download>Resume</a>
          <a className="btn light" href="https://github.com/developerdhru" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn light" href="https://www.linkedin.com/in/dhruveshakre/" target="_blank" rel="noreferrer">LinkedIn</a>

        </div>
      </div>
    </section>
  )
}
