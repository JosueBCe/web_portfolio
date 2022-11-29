import React from 'react'
import "./experience.css"
import { BsShieldFillCheck } from "react-icons/bs"
import {ImHtmlFive} from "react-icons/im"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {IoLogoSass} from "react-icons/io"
import {SiPython} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiNodedotjs} from "react-icons/si"
import { SiAwsamplify } from "react-icons/si"
import { SiShopify } from "react-icons/si"
import { SiGraphql } from "react-icons/si"
import { SiJquery } from "react-icons/si"


const Experience = () => {
  return (
    <section id='experience' >
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <ImHtmlFive className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Advanced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
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