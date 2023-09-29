/* import React, { useState } from 'react'
import "./experience.css"
import { BsShieldFillCheck } from "react-icons/bs"
import { ImHtmlFive } from "react-icons/im"
import { SiCss3 } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { IoLogoSass } from "react-icons/io"
import { SiPython } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiAwsamplify } from "react-icons/si"
import { SiShopify } from "react-icons/si"
import { SiGraphql } from "react-icons/si"
import { SiJquery } from "react-icons/si"
import htmlGif from '../../assets/gifs/html-gif.gif';
import Lottie from "lottie-react"
import html from "../../assets/animations/html.json"
import css from "../../assets/animations/css.json"

function Experience() {

  const [gif, setGif] = useState(null)

  const handleArticleLeave = () => {
    setGif(null);
  };
  return (
    <section id='experience' >
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development </h3>
          <div className='experience__content'>
            <article className='experience__details'
              onMouseEnter={() => setGif("HTML")}
              onMouseLeave={handleArticleLeave}
            >
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                {gif === "HTML" && (

                  <Lottie
                    animationData={html}
                    className='gif'
                  />



                )}
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'
            onMouseEnter={() => setGif("CSS")}
            onMouseLeave={handleArticleLeave}>
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                {gif === "CSS" && (

<Lottie
animationData={css}
className='gif'
/>



)}
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React.Js</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoSass className="experience__details-icon" />
              <div>
                <h4>SCSS/SASS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiAwsamplify className="experience__details-icon" />
              <div>
                <h4>AWS Amplify</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiShopify className="experience__details-icon" />
              <div>
                <h4>Shopify </h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiJquery className="experience__details-icon" />
              <div>
                <h4>Jquery</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <SiPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiNodedotjs className="experience__details-icon" />
              <div>
                <h4>Node.Js</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiGraphql className="experience__details-icon" />
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}




export default Experience



 */

import React, { useState } from 'react';
import "./experience.css";
/* import { BsShieldFillCheck } from "react-icons/bs";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io";
import { SiNodedotjs } from "react-icons/si";
import { SiAwsamplify } from "react-icons/si";
import { SiShopify } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiJquery } from "react-icons/si"; */
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";

import { SiPython } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import html from "../../assets/animations/html.json";
import css from "../../assets/animations/css.json";
import js from "../../assets/animations/js.json";
import Lottie from "lottie-react"
const frontendArticlesData = [
  {
    id: 1,
    skill: "HTML",
    icon: <ImHtmlFive className="experience__details-icon" />,
    animationData: html,
    level: "Advanced"
  },
  {
    id: 2,
    skill: "CSS",
    icon: <SiCss3 className="experience__details-icon" />,
    animationData: css,
    level: "Advanced"
  },
  {
    id: 3,
    skill: "JS",
    icon: <SiCss3 className="experience__details-icon" />,
    animationData: js,
    level: "Advanced"
  },
  // Add more frontend articles here
];

const backendArticlesData = [
  {
    id: 1,
    skill: "Python",
    icon: <SiPython className="experience__details-icon" />,
    animationData: css,
    level: "Advanced"
  },
  {
    id: 2,
    skill: "MongoDB",
    icon: <SiMongodb className="experience__details-icon" />,
    animationData: css,
    level: "Basic"
  },
  // Add more backend articles here
];

function Experience() {
  const [frontendAnimation, setFrontendAnimation] = useState(null);
  const [backendAnimation, setBackendAnimation] = useState(null);

  const handleFrontendArticleLeave = () => {
    setFrontendAnimation(null);
  };

  const handleFrontendArticleEnter = (animationData) => {
    setFrontendAnimation(animationData);
  };

  const handleBackendArticleLeave = () => {
    setBackendAnimation(null);
  };

  const handleBackendArticleEnter = (animationData) => {
    setBackendAnimation(animationData);
  };

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {frontendArticlesData.map((article) => (
              <article
                key={article.id}
                className='experience__details'
                onMouseEnter={() => handleFrontendArticleEnter(article.animationData)}
                onMouseLeave={handleFrontendArticleLeave}
              >
                {article.icon}
                <div>
                  <h4>{article.skill}</h4>
                  {frontendAnimation === article.animationData && (
                    <Lottie
                      animationData={article.animationData}
                      className='svg-animation'
                    />
                  )}
                  <small className='text-light'>{article.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            {backendArticlesData.map((article) => (
              <article
                key={article.id}
                className='experience__details'
                onMouseEnter={() => handleBackendArticleEnter(article.animationData)}
                onMouseLeave={handleBackendArticleLeave}
              >
                {article.icon}
                <div>
                  <h4>{article.skill}</h4>
                  {backendAnimation === article.animationData && (
                    <Lottie
                      animationData={article.animationData}
                      className='svg-animation'
                    />
                  )}
                  <small className='text-light'>{article.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;