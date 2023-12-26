import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <h2>Elizabeth Bartholomew</h2>
      <span>Experienced Front-End Engineer</span>
      <p>I build exceptional and accessible digital experiences for the web.</p>

      {/* <button>About</button>
      <button>Skills</button>
      <button>Projects</button> */}
      
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      

      <div className='social-links'>
        <a href="" className='github-link'></a>
        <a href="" className='github-link'></a>
        <a href="" className='github-link'></a>
      </div>
    </div>
  )
}
