import React, { useEffect, useRef, useState } from 'react';
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Service from "./components/service/Service";
import Portafolio from "./components/portafolio/Portafolio";
import Contact from "./components/contacts/Contact";
import Footer from "./components/footer/Footer";
import FloatingElem from './components/header/FloatingElem';


import "./app.css"
const App = () => {

  return (
    <>
      <Nav />
      <FloatingElem />
      <Header />
      <About />
      <Experience />
      <Service />
      <div className='parentportafolio'>
        <Portafolio />
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default App;