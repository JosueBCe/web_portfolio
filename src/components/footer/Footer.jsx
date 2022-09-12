import React from 'react'
import "./footer.css"
import { GrFacebook } from "react-icons/gr"
import { GrInstagram } from "react-icons/gr"
import { BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >Developing Excellence</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/josue.centurion1" target="_blank" ><GrFacebook /></a>
        <a href="https://www.instagram.com/josuebce/" target="_blank" ><GrInstagram /></a>
        <a href="https://twitter.com/JosueBCe" target="_blank" ><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small><strong>&copy;Developing Excellence. All rights reserved</strong></small>
      </div>
      
    </footer>
  )
}

export default Footer