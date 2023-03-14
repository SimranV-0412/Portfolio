import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { MdArrowUpward } from 'react-icons/md'
import './Footer.css'

function Footer() {
  return (
    <>
      <footer>
        <a href='/' className='footer_logo'><MdArrowUpward/></a>
        <br/>
        <div className='footer_social'>
        <a href='https://www.linkedin.com/in/simran-verma-b963851a4' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/SimranV-0412' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/simii_v' target='_blank' rel="noreferrer"><BsInstagram/></a>
        </div>
        <div className='footer_copyright'>
          <small>© 2022 - This Website is Developed by Simran Verma</small>
        </div>
      </footer>
    </>
  )
}

export default Footer