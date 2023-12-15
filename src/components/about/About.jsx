import React, { useState } from 'react';
import './about.css';
import me from '../../assets/me2.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolder } from 'react-icons/bs';
import video from '../../assets/videoMobile.mp4';
import Typical from 'react-typical';
import Cta from '../cta/cta';

function About() {
  const [fullWidth, setFullWidth] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState('me-intro');
  const [media, setMedia] = useState(me);

  const handleArticleHover = (articleName) => {
    setHoveredArticle(articleName);
  };

  const handleImageClick = () => { 
    setFullWidth(!fullWidth)
    if (fullWidth) {
      setMedia(me)
    } else {
      setMedia(video)
    }
  }
  const handleArticleLeave = () => {
    setHoveredArticle('me-intro');
  };

  return (
    <section id="about" style={fullWidth ? { marginTop: '0' } : {}}>
      {fullWidth && (
        <div style={{ height: '105vh', marginBottom: '1rem' }}>
          <video
            style={{ height: '105vh' }}
            src={media}
            autoPlay
            muted
            loop
            alt="About Image"
            onClick={() =>  handleImageClick(false)}
          />
        </div>
      )}
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container" style={fullWidth ? { gridTemplateColumns: '1fr' } : {}}>
        {!fullWidth && (
          <div className="about__me">
            <div className="about__me-image">
              <img
                src={media}
                autoPlay
                muted
                loop
                alt="About Image"
                onClick={() =>  handleImageClick(true)}
              />
            </div>
          </div>
        )}

        <div className="about__content">
          
        <Cta text={"Hover One of these"}/>
          <div className="about__cards">
            <article
              className="about__card"
              onMouseEnter={() => handleArticleHover('experience')}
              onMouseLeave={handleArticleLeave}
            >
            
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>A year Creating</small>
            </article>
            <article
              className="about__card"
              onMouseEnter={() => handleArticleHover('team')}
              onMouseLeave={handleArticleLeave}
            >
              <FiUsers className="about__icon" />
              <h5>Team</h5>
              <small>+ 10 Assignments Completed</small>
            </article>
            <article
              className="about__card"
              onMouseEnter={() => handleArticleHover('projects')}
              onMouseLeave={handleArticleLeave}
            >
              <BsFolder className="about__icon" />
              <h5>Projects</h5>
              <small>+10 Completed</small>
            </article>
          </div>
          <p>
            {hoveredArticle === 'me-intro' && (
              <Typical
                
                speed={""}
                steps={[
                  'Since I was young, I loved learning and studying for long hours.',
                  10,
                  'I skipped the last year in high school by taking 12 final exams in a 6 month periof.',
                  10,
                  "I was blessed with a religious education and right principles that motivated me to serve as a volunteer missionary for the church of Jesus Christ of Latter-day Saints.",
                  10,
                  "I'm amazed at how technology can improve our lives.",
                  10,
                  'I spend long hours working as a Web developer interacting with the full development cycle, learning and improving best practices in my workflow.',
                  10,
                  "I'm constantly working toward my long-term goals.",
                  10,
                ]}
                loop={Infinity}
              />
            )}
            {hoveredArticle === 'experience' && (
              <Typical steps={['I have a year of professional experience in web development and more than 3 years in academic and personal project studeis', 10]} />
            )}
            {hoveredArticle === 'team' && <Typical steps={["I've collaborated with more than a dozen of teams in multiple scalable projects, from simple web applications, to complete windows form applications", 10]} />}
            {hoveredArticle === 'projects' && (
              <Typical steps={["I've created an collaborated in a couble of dozen projects, including web, mobile and desktop applications. Incorporing security, user authentication and testing automation", 10]} />
            )}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;