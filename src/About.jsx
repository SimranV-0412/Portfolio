import React from 'react'
import './About.css'
import SimranV from 'D:/My_portfolio/portfolio_web/src/assets/SimranV.jpg'

const About = () => {
  return (
   <>
   <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <img src={SimranV} alt='my pic' className='image'/>
        </div>
        <div className='about_content'>
          <p>
          I grew up in Kanpur, Uttar Pradesh and I am a hardworking engineering graduate specializing 
          in computer application with an overall 76%. Along with my degree, I completed HTML, CSS,
          JavaScript, REACT courses on udemy. These all various technologies
          I learned have helped me develop my final year project called "Asset Management System". 
          I love talking about Programming, Music, Food, Art & Spirituality. 
          Feel free to write me with any info, and job offers on the remote form.
          </p>
          <br/>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
   </section>
   </>
  )
}

export default About;