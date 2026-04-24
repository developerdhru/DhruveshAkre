import React from 'react'

export default function About() {
  return (
    <section className="page about">
      <div>
        <h2>About</h2>
        <p className="lead">
          I am pursuing a Bachelor's in Information Technology, with a Diploma
          in Electrical Engineering. I build scalable web apps with Flask,
          SQL, and modern front-end tools, and I enjoy leading projects from
          planning to delivery.
        </p>
        <div className="about-grid">
          <div className="info-card">
            <h3>What I do</h3>
            <p>Full stack development, IoT prototypes, and creative editing.</p>
          </div>
          <div className="info-card">
            <h3>What I value</h3>
            <p>Clear structure, strong teamwork, and user-first design.</p>
          </div>
        </div>
        <div className="about-stack">
          <div className="info-card">
            <h3>Education</h3>
            <p>Bachelor of Information Technology (2023 - Present)</p>
            <p>Diploma in Electrical Engineering (2019 - 2022)</p>
            <p>High School (2013 - 2019)</p>
          </div>
          <div className="info-card">
            <h3>Courses</h3>
            <p>IoT & Robotics (2024)</p>
            <p>MS-CIT (2019)</p>
          </div>
          <div className="info-card">
            <h3>Training & internships</h3>
            <p>
              <strong>Aartech Webworks and Cyber Security</strong>
              <br />
              Frontend and Backend Developer Intern (11/2025 - 03/2026)
              <br />
              Mumbai, Maharashtra, India
              <br />
              Developed and delivered a full stack web application, handling both frontend and backend development. Contributed to
              multiple features and improvements, demonstrating strong problem-solving skills and the ability to quickly adapt to
              technical challenges. Collaborated effectively with the team and supported ongoing development tasks, showcasing a
              proactive and responsible work approach.

            </p>
            <p>
              <strong>Vertex Systems</strong>
              <br />
              Frontend Developer Intern (05/2025 - 06/2025)
              <br />
              Mumbai, Maharashtra, India
              <br />
              Completed a one-month internship in web development, working with HTML, CSS, and JavaScript. Gained hands-on
              experience in frontend development and applied concepts to real-world tasks. Demonstrated strong learning ability,
              enthusiasm, and commitment while contributing effectively to assigned projects.
            </p>
            <p>Workshop: WORKSHOP ON AUTOCAD (2021)</p>
          </div>
        </div>
      </div>
      <div className="about-side">
        <div className="info-card">
          <h3>Personal details</h3>
          <p>Date of birth: June 15th, 2003</p>
          <p>Place of birth: Virar</p>
          <p>Gender: Male</p>
          <p>Location: Mumbai</p>
          <p>Nationality: Indian</p>
          <p>Civil status: Unmarried</p>
          <p>Availability: Full-Time</p>
          <p>Languages: English, Marathi, Hindi</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <div className="pill-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python (Flask)</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>SQL</span>
            <span>MySQL</span>
            <span>MongoDB (learning)</span>
            <span>SQLAlchemy</span>
            <span>Jinja2</span>
            <span>C++ (Basic)</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>UI/UX Basics</span>
            <span>Responsive Design</span>
            <span>Project Planning</span>
            <span>Team Leadership</span>
            <span>IoT Development</span>
            <span>Photoshop</span>
            <span>Premiere Pro</span>
            <span>Illustrator</span>
            <span>After Effects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
