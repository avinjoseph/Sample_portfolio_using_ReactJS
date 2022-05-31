import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><AiOutlineContacts /></a>
    </nav>
  )
}

export default Nav