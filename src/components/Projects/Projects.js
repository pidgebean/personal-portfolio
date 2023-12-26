import React from 'react'
import './Projects.css'
import projectOne from '../../assets/project-1-preview.png'

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <a href="https://arch-studio-react-inky.vercel.app/" target='_blank' rel='noreferrer' className='project-1'>
        <button className='one-btn'>
          <img src={projectOne} alt="" />
          <div className='one-desc'>
            <h3>Architect Studio Website</h3>
            <p>Completed website for a hypothetical architecture company.</p>
            <p>Built with React, HTML/CSS</p>
          </div>
          
        </button>
      </a>
    </div>
  )
}
