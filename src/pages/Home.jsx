import React from 'react'

export default function Home() {
  return (
    <>
      <section className="page hero">
        <div className="hero-content">
          <p className="eyebrow">Full stack developer + editor</p>
          <h1>Hi, I'm Dhruvesh Akre. I build products and craft visuals.</h1>
          <p className="lead">
            Full stack developer with a creative edge in video and photo editing.
            I care about clean architecture, usable interfaces, and visuals that
            communicate clearly.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#/projects">View Projects</a>
            <a className="btn ghost" href="#/contact">Contact Me</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>IT</strong>
              <span>Bachelor's (ongoing)</span>
            </div>
            <div>
              <strong>Developer</strong>
              <span>Innovate. Code. Create.</span>
            </div>
            <div>
              <strong>Editor</strong>
              <span>Snip, Snap, and Shine</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-glow" />
          <h3>Currently exploring</h3>
          <ul>
            <li>JavaScript frameworks</li>
            <li>App development workflows</li>
            <li>MongoDB database methods</li>
          </ul>
        </div>
      </section>

    </>
  )
}
