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
            <p>INTERMEDIATE (2017)</p>
            <p>ELEMENTARY (2016)</p>
          </div>
          <div className="info-card">
            <h3>Training & internships</h3>
            {/* <p>Internship: [Company / Role / Duration]</p>
            <p>Training: [Program / Institute / Duration]</p> */}
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
            <span>Project Planner</span>
            <span>Python (Flask)</span>
            <span>SQL</span>
            <span>MongoDB (learning)</span>
            <span>C++</span>
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
