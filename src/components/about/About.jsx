import React from 'react'
import './about.css'
import ME from "../../assets/me.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {BsFolder} from "react-icons/bs"


const About = () => {
  return (
    <section id ='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>8 months Creating</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Team</h5>
              <small>+ 10 Assigments Completed</small>
            </article>
            <article className='about__card'>
              <BsFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed </small>
            </article>
          </div>
          <p>"From I was young, I loved learning and study for long hours. I skipped the last year in my high school by taking 12 final exams in a few months. I was blessed with a religious education and right principles that motivated me to serve as a voluntary missionary for the church of Jesus Christ of Latter-day saints. 
            I'm amazed for how technology can improve our lives. I use to spend long hours in VS Code and watching tutorials to learn as much I can and develop my professional career. I have goals and I'm sticking to them "
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      
      </div>

    </section>
  )
}

export default About