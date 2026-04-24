import React from 'react'
import { NavLink } from 'react-router-dom'
import resumeFile from '../assets/Dhruvesh_Akre CV.pdf'

export default function Header() {
  return (
    <header className="header">
      <div className="nav-wrap">
        <div className="logo">Dhruvesh Akre</div>
        <nav className="nav">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
        <a className="nav-cta" href={resumeFile} target="_blank" rel="noreferrer">Resume</a>
      </div>
    </header>
  )
}
