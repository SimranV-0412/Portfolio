import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import SIMM from 'D:/My_portfolio/portfolio_web/src/assets/SIMM.jpg';
import './Header.css';
import Greeting from './Greeting';

function Header() {
  return (
    <>
    <header>
        <div className='container header_container'>
            <h5><Greeting/> I'm</h5>
            <h2>SIMRAN VERMA</h2>
            <h5 className="text-light">Frontend Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className='me'>
                <img src={SIMM} alt='My Pic' />
            </div>
            <a href='#contact' className='scroll_down'> Scroll Down </a>
        </div>
    </header>
    </>
  )
}

export default Header;