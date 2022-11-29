import React from 'react'
import "./portafolio.css"

import IMG2 from "../../assets/portfolio2.png"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
// import IMG5 from "../../assets/portfolio5.png"
// import IMG6 from "../../assets/portfolio6.jpg"
// import IMG1 from "../../assets/portfolio1.png"

/* steps 
1. Copy all 
2. npm i and run build  
3. create new repository locally 
4. create online repository 
*/

const Portafolio = () => {
  return (
    <section id='portafolio' >
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className="container portafolio__container">
        {/* <article className='portafolio__items'>
          <div className="portafolio__item-image">
            <img src={IMG1} alt="portafolio1" />
          </div>
          <h3>Water Rafting</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/JosueBCe/wdd-130-/tree/main/wwr" className='btn' target={"_blank"}>GitHub</a>
            <a href="https://josuebce.github.io/wdd-130-/wwr/index.html" className='btn btn-primary' target={"_blank"}>Live Demo</a>
          </div>
        </article> */}
        <article className='portafolio__items'>
          <div className="portafolio__item-image">
            <img src={IMG2} alt="portafolio2" />
          </div>
          <h3>Multitrack Challenge </h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com/JosueBCe/M_Track_challenge" className='btn' target={"_blank"}>GitHub</a>
            <a href="https://josuebce.github.io/M_Track_challenge/#" className='btn btn-primary' target={"_blank"}>Live Demo</a>
          </div>
        </article>
         <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG3} alt="portafolio3" />
        </div>
        <h3> Chamber of Commerce Site-Plan </h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com/JosueBCe/wdd230/tree/main/lesson3" className='btn'  target={"_blank"}>GitHub</a>
          <a href="https://josuebce.github.io/wdd230/lesson3/index.html" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG4} alt="portafolio4" />
        </div>
        <h3>Argentine Chamber of Commerce </h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com/JosueBCe/wdd230/tree/main/chamber" className='btn'>GitHub</a>
          <a href="https://josuebce.github.io/wdd230/chamber/index.html" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <h2>In Development Process: </h2>
        <h3>The Fruit's Sweet</h3>
        <div className="portafolio__item-cta">
          <a href="https://www.figma.com/file/mG94KLAMDpSjWU858R5fSd/Fruit's-Sweet-Wireframe?node-id=0%3A1&t=URO9Hw7gojpHyKCo-1" target="_blank" className='btn'>Figma Wireframe</a>
          </div>
          <a href="https://josuebce.github.io/wdd230/lesson-12/index.html" className='btn btn-primary' target="_blank">Live Demo</a>
          <h3>Final Semester Project</h3>
          <a href="https://github.com/JosueBCe/final-project-" target="_blank" className='btn'>GitHub</a>
          <h3> AWS E-commerce </h3>
          <a href="https://www.figma.com/file/Shh50gTndPqLpp2RdvfMUN/Ecommerce-Cloud-Computing-WireFrame?t=tazsIggrDM9V0j04-1" target="_blank" className='btn'>Figma Wireframe</a> 
      </article>
      {/*
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG5} alt="portafolio5" />
        </div>
        <h3>This is a portafolio item title</h3>
          <div className="portafolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG6} alt="portafolio6" />
        </div>
        <h3>This is a portafolio item title</h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
        </div>
      </article> */}
      </div>

    </section>

  )
}


export default Portafolio