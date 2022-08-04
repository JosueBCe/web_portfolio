import React from 'react'
import "./portafolio.css"
import IMG1 from "../../assets/portfolio1.png"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

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
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG1} alt="portafolio1" />
        </div>
        <h3>Water Rafting Web Page</h3>
          <div className="portafolio__item-cta">
            <a href="https://github.com" className='btn'>GitHub</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG2} alt="portafolio2" />
        </div>
        <h3>This is a portafolio item title</h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG3} alt="portafolio3" />
        </div>
        <h3>This is a portafolio item title</h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
      <article className='portafolio__items'>
        <div className="portafolio__item-image">
          <img src={IMG4} alt="portafolio4" />
        </div>
        <h3>This is a portafolio item title</h3>
        <div className="portafolio__item-cta">
          <a href="https://github.com" className='btn'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
      </article>
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
      </article>
    </div>

  </section>
  
  )
}


export default Portafolio