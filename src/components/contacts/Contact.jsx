import React from 'react'
import "./contact.css"
import { AiTwotoneMail } from "react-icons/ai"
import { BsMessenger } from "react-icons/bs"
import { BsWhatsapp } from "react-icons/bs"
import { SiGmail } from "react-icons/si"
import { useRef } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jjyuhzc', 'templaye_t81p8se', form.current, 'TQr3Jwe6NEbkvvR0f')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'  >
            <SiGmail className='contact__option-icon' />
            <h4>Gmail</h4>
            <h5>josuebcenturion@ </h5>
            <a href="mailto:josuebcenturion@gmail.com" target="_blank">Send a Message</a>
          </article >
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Josue Centurion</h5>
            <a href="https://m.me/josue.centurion1" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option' >
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5> 3625 451282</h5>
            <a href="https://wa.me/5493625451282" target="_blank" >Send a Message</a>
          </article>
          {/* END OF CONTACT OPTIONS */}

        </div>
        <form action="https://formsubmit.co/josuebcenturion@gmail.com" method="POST">
          <input  type="text" name='name' placeholder='Name' required />
          <input  type="email" name="email" placeholder='Email' required />
          <textarea  name="message" rows="10" placeholder='Message' required></textarea>
          <button type='submit'  className='btn btn-primary '>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact


