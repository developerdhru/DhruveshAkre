import React, { useState } from 'react'

export default function Projects() {
  const [activePanel, setActivePanel] = useState('dev')

  return (
    <section className="page projects">
      <div className="section-head">
        <h2>Projects</h2>
        <p>Full stack builds, IoT experiments, and creative media work.</p>
      </div>
      <div className="toggle-wrap" role="tablist" aria-label="Project categories">
        <button
          type="button"
          className={activePanel === 'dev' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('dev')}
          aria-pressed={activePanel === 'dev'}
        >
          Programming
        </button>
        <div className="toggle-or">OR</div>
        <button
          type="button"
          className={activePanel === 'media' ? 'toggle-btn active' : 'toggle-btn'}
          onClick={() => setActivePanel('media')}
          aria-pressed={activePanel === 'media'}
        >
          Video + Photo
        </button>
      </div>

      {activePanel === 'dev' ? (
        <section className="panel-card">
          <div className="panel-head">
            <h3>Programming projects</h3>
            <p>Full stack builds, IoT experiments, and web applications.</p>
          </div>
          <div className="project-panel">
            {/* Add your programming projects here */}
            <article className="project-item">
              <h4>Project showcase coming soon</h4>
              <p>I am curating my strongest builds and case studies.</p>
              <div className="tag-row">
                <span>Full Stack</span>
                <span>IoT</span>
                <span>Creative</span>
              </div>
            </article>
            <article className="project-item">
              <h4>Flask + SQL Web App</h4>
              <p>Scalable backend with clean UI and structured data flow.</p>
              <div className="tag-row">
                <span>Flask</span>
                <span>SQL</span>
                <span>JavaScript</span>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <section className="panel-card">
          <div className="panel-head">
            <h3>Video + photo editing</h3>
            <p>Reels, invitation edits, and cinematic storytelling work.</p>
          </div>
          <div className="project-panel">
            {/* Add your media projects here */}
            <article className="project-item">
              <h4>Creative Editing Suite</h4>
              <p>Video and photo edits focused on storytelling and rhythm.</p>
              <div className="tag-row">
                <span>Premiere Pro</span>
                <span>Photoshop</span>
                <span>After Effects</span>
              </div>
              <div className="media-frame">
                <iframe
                  src="https://drive.google.com/file/d/1u0rbqg55qnbbjkPl2zDv6oKUaD99k50D/preview"
                  title="Creative Editing Suite"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </article>
            <article className="project-item">
              <h4>Reel Editing Showcase</h4>
              <p>Short-form edits optimized for social engagement.</p>
              <div className="tag-row">
                <span>Reels</span>
                <span>Transitions</span>
                <span>Sound design</span>
              </div>
            </article>
          </div>
        </section>
      )}
    </section>
  )
}
