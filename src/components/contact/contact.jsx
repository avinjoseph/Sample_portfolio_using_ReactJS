import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j6875io', 'template_lbok1ok', form.current, 'vIdtZQCLGYAhEin0W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
  return (
    <section>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail/>
            <h4>Email</h4>
            <h5>avin@gmail.com</h5>
            <a href="mailto:avin@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram />
            <h4>Instagram</h4>
            <h5>avin_joseph_</h5>
            <a href="avin@insta">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>avin_joseph_</h5>
            <a href="avin@whatsapp">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact