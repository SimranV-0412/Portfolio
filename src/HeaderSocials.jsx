import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <>
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/simran-verma-b963851a4' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/SimranV-0412' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/simii_v' target='_blank' rel="noreferrer"><BsInstagram/></a>
    </div>
    </>
  )
}

export default HeaderSocials