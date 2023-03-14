import React from 'react'
import './Nav.css'
import {MdHomeFilled} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaUserGraduate} from 'react-icons/fa'
import {useState} from 'react'

function Nav() {
  const [activeNav, setactiveNav] = useState('#')
  return (
    <>
    <nav>
    <a href='\' className={activeNav==='#' ? 'active' : ''}>
      <MdHomeFilled/>
    </a>
    <a href='#about' onClick={() => setactiveNav('#about')} className={activeNav==='#about' ? 'active' : ''}>
      <BiUser/>
    </a>
    <a href='#experience' onClick={() => setactiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}>
      <BsBook/>
    </a>
    <a href='#education' onClick={() => setactiveNav('#education')} className={activeNav==='#education' ? 'active' : ''}>
      <FaUserGraduate/>
    </a>
    <a href='#contact' onClick={() => setactiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}>
      <MdEmail/>
    </a>
    </nav>
    </>
  )
}

export default Nav;