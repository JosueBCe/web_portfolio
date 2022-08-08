import React from 'react'
import "./nav.css"
import { AiOutlineHome } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { BsFillJournalBookmarkFill } from "react-icons/bs"
import { AiOutlineLaptop } from "react-icons/ai"
import { TiMessages } from "react-icons/ti"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BsFillJournalBookmarkFill /></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}> <AiOutlineLaptop /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}> <TiMessages /></a>
    </nav>
  )
}

export default Nav