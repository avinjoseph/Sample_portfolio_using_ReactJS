import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import {GiAchievement} from 'react-icons/gi'
import {MdPeople} from 'react-icons/md'
import {VscProject} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiAchievement className="about__icon"/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className="about__card">
            <MdPeople className="about__icon"/>
              <h5>Clients</h5>
              <small>200+</small>
            </article>

            <article className="about__card">
            <VscProject className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ </small>
            </article>
          </div>

          <p className="about__content">
            Chelsea Football Club is an English professional football club based in Fulham, West London. Founded in 1905, the club competes in the Premier League, the top division of English football. 
            Domestically, the club has won six league titles, eight FA Cups, five League Cups, and four FA Community Shields.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About