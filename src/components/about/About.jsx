import React, { useState } from 'react';
import './about.css';
import ME from '../../assets/me.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsFolder } from 'react-icons/bs';
import video from '../../assets/video1.mp4';
import Typical from 'react-typical';

function About() {
  const [fullWidth, setFullWidth] = useState(false);
  const [hoveredArticle, setHoveredArticle] = useState('me-intro');

  const handleArticleHover = (articleName) => {
    setHoveredArticle(articleName);
  };

  const handleArticleLeave = () => {
    setHoveredArticle('me-intro');
  };

  return (
    <section id="about" style={fullWidth ? { marginTop: '0' } : {}}>
      {fullWidth && (
        <div style={{ height: '105vh', marginBottom: '1rem' }}>
          <video
            style={{ height: '105vh' }}
            src={video}
            autoPlay
            muted
            loop
            alt="About Image"
            onClick={() => setFullWidth(false)}
          />
        </div>
      )}
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container" style={fullWidth ? { gridTemplateColumns: '1fr' } : {}}>
        {!fullWidth && (
          <div className="about__me">
            <div className="about__me-image">
              <video
                src={video}
                autoPlay
                muted
                loop
                alt="About Image"
                onClick={() => setFullWidth(true)}
              />
            </div>
          </div>
        )}
        <div className="about__content">
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
                speed="fast"
                steps={[
                  'Since I was young, I loved learning and studying for long hours.',
                  100,
                  'I skipped the last year in high school by taking 12 final exams in a few months.',
                  1000,
                  "I was blessed with a religious education and right principles that motivated me to serve as a volunteer missionary for the church of Jesus Christ of Latter-day Saints.",
                  1000,
                  "I'm amazed at how technology can improve our lives.",
                  1000,
                  'I spend long hours coding interacting with the full development cycle, learning and improving best practices in my workflow.',
                  1000,
                  "I'm constantly working toward my long-term goals.",
                  1000,
                ]}
                loop={Infinity}
              />
            )}
            {hoveredArticle === 'experience' && (
              <Typical steps={['Text for the experience article...']} />
            )}
            {hoveredArticle === 'team' && <Typical steps={['Text for the team article...']} />}
            {hoveredArticle === 'projects' && (
              <Typical steps={['Text for the projects article...']} />
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