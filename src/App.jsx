import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Service from "./components/service/Service"
import Portafolio from "./components/portafolio/Portafolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contacts/Contact"
import Footer from "./components/footer/Footer"


const App = () => {
  return (/* below we will add the elements in the order of the page that we are building */
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portafolio />
      {/* <Testimonials/> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App