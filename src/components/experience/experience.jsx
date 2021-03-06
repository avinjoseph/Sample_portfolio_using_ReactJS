import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
      <h5>What Skill's I Have</h5>
      <h2>My Experience</h2>

      <div className="experience__container container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>AngularJs</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backened Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>AngularJs</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <  BsPatchCheckFill className="experience__details-icons"/>
              <div>
              <h4>BootStrap</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience