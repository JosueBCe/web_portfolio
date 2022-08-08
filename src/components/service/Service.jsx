import React from 'react'
import "./service.css"
import { FaRegCheckSquare } from "react-icons/fa"

const Services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare />
              <p> Wire-frame creation for each project.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p> Presentation of Site-Plan.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p> Benchmark analysis.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p> Best practices approach.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Continued improvement process.
              </p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare />
              <p>Full Responsive Design.</p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Flexible and Scalable Web Apps. </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Customized colors and design.</p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Customized architecture.

              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Single Page aplicacation.</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare />
              <p>Flexible approach.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Audience analysis and hooking writing techniques.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Web pages in Portuguese, English or Spanish.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Planning for regular Updating Content.
              </p>
            </li>
            <li>
              <FaRegCheckSquare />
              <p>Search Engine Optimization.</p>
            </li>
          </ul>
        </article>
        {/*CONTENT CREATION*/}

      </div>



    </section>
  )
}

export default Services