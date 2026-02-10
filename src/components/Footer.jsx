import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Dhruvesh Akre. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/developerdhru" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruveshakre/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:akredhruvesh@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
