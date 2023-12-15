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
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiBlazor } from "react-icons/si";


import { SiPython } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandPhp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

import html from "../../assets/animations/html.json";
import css from "../../assets/animations/css.json";
import js from "../../assets/animations/js.json";
import python from "../../assets/animations/python.json";
import mongodb from "../../assets/animations/mongodb.json";
import ts from "../../assets/animations/ts.json";
import native from "../../assets/animations/native.json";
import boostrap from "../../assets/animations/boostrap.json";
import tailwind from "../../assets/animations/tailwind.json";
import jest from "../../assets/animations/jest.json";
import angular from "../../assets/animations/angular.json";
import netblazor from "../../assets/animations/netblazor.json";
import java from "../../assets/animations/java.json";
import mysql from "../../assets/animations/mysql.json";
import php from "../../assets/animations/php.json";
import node from "../../assets/animations/node.json";
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
    icon: <IoLogoJavascript className="experience__details-icon" />,
    animationData: js,
    level: "Advanced"
  },
  {
    id: 4,
    skill: "TS",
    icon: <SiTypescript className="experience__details-icon" />,
    animationData: ts,
    level: "Intermediate"
  },
  {
    id: 5,
    skill: "React Native",
    icon: <TbBrandReactNative className="experience__details-icon" />,
    animationData: native,
    level: "Intermediate"
  },
  {
    id: 3,
    skill: "Boostrap",
    icon: <FaBootstrap className="experience__details-icon" />,
    animationData: boostrap,
    level: "Advanced"
  },
  {
    id: 3,
    skill: "TailWind",
    icon: <SiTailwindcss className="experience__details-icon" />,
    animationData: tailwind,
    level: "Advanced"
  },
  {
    id: 3,
    skill: "Angular",
    icon: <SiAngular className="experience__details-icon" />,
    animationData: angular,
    level: "Advanced"
  },
  {
    id: 3,
    skill: "Jest",
    icon: <SiJest className="experience__details-icon" />,
    animationData: jest,
    level: "Advanced"
  },
  {
    id: 3,
    skill: ".Net Blazor/Razor",
    icon: <SiBlazor className="experience__details-icon" />,
    animationData: netblazor,
    level: "Advanced"
  },

];

const backendArticlesData = [
  {
    id: 1,
    skill: "Python",
    icon: <SiPython className="experience__details-icon" />,
    animationData: python,
    level: "Advanced"
  },
  {
    id: 2,
    skill: "MongoDB",
    icon: <SiMongodb className="experience__details-icon" />,
    animationData: mongodb,
    level: "Intermediate"
  },
  {
    id: 2,
    skill: "Java",
    icon: <FaJava className="experience__details-icon" />,
    animationData: java,
    level: "Intermediate"
  },
  {
    id: 2,
    skill: "MySQL",
    icon: <SiMysql className="experience__details-icon" />,
    animationData: mysql,
    level: "Intermediate"
  },
  {
    id: 2,
    skill: "PHP",
    icon: <TbBrandPhp className="experience__details-icon" />,
    animationData: php,
    level: "Intermediate"
  },
  {
    id: 2,
    skill: "Node.js",
    icon: <FaNodeJs className="experience__details-icon" />,
    animationData: node,
    level: "Advanced"
  },

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