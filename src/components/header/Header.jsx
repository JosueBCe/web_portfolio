import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me...png';
import HeaderSocials from './HeaderSocials';
import video from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import img from '../../assets/whoim.png';
import imgMobile from '../../assets/whoimmobile.png'
import background2 from '../../assets/backgrounds/background2.jpg';
import { useScroll } from '@react-spring/web'

const Header = () => {
  const [videoSource, setVideoSource] = useState(video2);
  const [isVideoDisplayed, setIsVideoDisplayed] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(img)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVideoDisplayed(prevIsVideoDisplayed => !prevIsVideoDisplayed);
    }, 17200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setVideoSource(video)
        setBackgroundImage(imgMobile)
      } else {
        setBackgroundImage(img)
        setVideoSource(video2)
      }
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  const parallaxRef = useRef(null);

  const handleScroll = (event) => {
    console.log(event.target.scrollTop  + event.target.scroll + event.target.scrollTop );
  };

 

  return (
    <header 
    ref={parallaxRef}
    onScrollCapture={handleScroll}
    >
      {isVideoDisplayed ? (
        <video src={videoSource} autoPlay muted loop />
      ) : (
        <video src={videoSource} autoPlay muted loop />
      )}
    </header>
  );
};

export default Header;