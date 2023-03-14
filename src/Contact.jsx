import React from 'react'
import { MdEmail } from 'react-icons/md'
import './Contact.css'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ri5arxi', 'template_jtmrhf4', form.current, 'LPZ7ZhZJzF8oKONKz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
   <>
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <MdEmail className='con_icon'/>
          <h4>Email</h4>
          <h5 className='text-light'>vermasimran261@gmail.com</h5>
          <a href='mailto:vermasimran261@gmail.com'>Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
   </>
  )
}

export default Contact