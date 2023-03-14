import React from 'react'
import SimranVerma_UIETKanpur from 'D:/My_portfolio/portfolio_web/src/assets/SimranVerma_UIETKanpur.pdf'

function CTA() {
  return (
    <>
        <div className='cta'>
            <a href={SimranVerma_UIETKanpur} download className='btn'>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
    </>
  )
}

export default CTA