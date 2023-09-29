import React from 'react'
import background2 from "../../assets/portfolio1.png"
import './header.css';
import { useState, useEffect } from 'react';
import Card from './Cart';

function FloatingElem() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const data = 
            [{
                backgroundImgMain:"https://psc2.cf2.poecdn.net/e944020d22b119fb6472c9cf9c39703b79a95418/_next/static/media/assistant.b077c338.svg",
                floatingImg1:"https://source.unsplash.com/-HxIhfS_dUk", 
                floatingImg2:"https://source.unsplash.com/-HxIhfS_dUk",
                floatingTxt1:"https://source.unsplash.com/-HxIhfS_dUk", 
                floatingTxt2:"https://source.unsplash.com/-HxIhfS_dUk",
                direction: "right"      
            }, {
                backgroundImgMain:"https://source.unsplash.com/-HxIhfS_dUk",
                floatingImg1:"https://source.unsplash.com/-HxIhfS_dUk", 
                floatingImg2:"https://source.unsplash.com/-HxIhfS_dUk",
                floatingTxt1:"https://source.unsplash.com/-HxIhfS_dUk", 
                floatingTxt2:"https://source.unsplash.com/-HxIhfS_dUk",
                direction: "left"
            }]

    return (<>
      {data.map((card, index) => (
        <Card key={index} data={card} />
      ))}
      </>
    );
  }

export default FloatingElem