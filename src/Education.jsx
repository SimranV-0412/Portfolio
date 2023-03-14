import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Education.css'

function Education() {
  return (
    <>
      <section id='education'>
      <h2>Education</h2>
      <div className='container edu_container'>
        <article className='edu'>
          <div className='edu_head'>
            <h3>POST GRADUATION</h3>
          </div>
          <ul className='edu_list'>
            <li>
              <p>
                UIET Kanpur
                <br/>
                <span className='text-light'>University in Kanpur, Uttar Pradesh</span>
              </p>
              <p>
                MCA <span className='text-light'>2022</span>
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                Scored 76%
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                Rank #1
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                College Topper
              </p>
            </li>
          </ul>
        </article>
        <article className='edu'>
          <div className='edu_head'>
            <h3>GRADUATION</h3>
          </div>
          <ul className='edu_list'>
            <li>
              <p>
                VSICS
                <br/>
                <span className='text-light'>Kanpur, Uttar Pradesh</span>
              </p>
              <p>
                BCA <span className='text-light'>2018</span>
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                Scored 67%
              </p>
            </li>
          </ul>
        </article>
        <article className='edu'>
          <div className='edu_head'>
            <h3>INTERMEDIATE</h3>
          </div>
          <ul className='edu_list'>
            <li>
              <p>
              Chacha Nehru Balika Inter College
                <br/>
                <span className='text-light'>Kanpur, Uttar Pradesh</span>
              </p>
              <p>
                12th <span className='text-light'>2015</span>
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                Scored 74%
              </p>
            </li>
          </ul>
        </article>
        <article className='edu'>
          <div className='edu_head'>
            <h3>HIGH SCHOOL</h3>
          </div>
          <ul className='edu_list'>
            <li>
              <p>
              Vivekanand Girls Inter College
                <br/>
                <span className='text-light'>Kanpur, Uttar Pradesh</span>
              </p>
              <p>
                10th <span className='text-light'>2013</span>
              </p>
            </li>
            <li>
            <BiCheck className='edu_icons'/>
              <p>
                Scored 80%
              </p>
            </li>
          </ul>
        </article>
      </div>
      </section>
    </>
  )
}

export default Education