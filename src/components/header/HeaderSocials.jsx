import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/josuebcenturion/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/JosueBCe" target="__blank"><FaGithub/></a>
        <a href="https://www.facebook.com/josue.centurion1" target="__blank"><FaFacebookSquare/></a>
    </div> )
}

export default HeaderSocials