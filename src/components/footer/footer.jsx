import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram,BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Avin_Joseph</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>

      <div className="footer__socials">
        <a href="#https://facebook.com"><FaFacebookF/></a>
        <a href="#https://instagram.com"><BsInstagram/></a>
        <a href="#https://twitter.com"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Avin_Joseph. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer