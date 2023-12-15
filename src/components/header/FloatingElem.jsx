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
                backgroundImgMain:"https://th.bing.com/th/id/R.c484a7eb2b65413173142519b095bbef?rik=CnpeDxhvta9MGA&riu=http%3a%2f%2fbloximages.chicago2.vip.townnews.com%2fidahostatejournal.com%2fcontent%2ftncms%2fassets%2fv3%2feditorial%2f9%2f2c%2f92c2cbb8-5d7e-11e4-b0e8-8be9856a53f7%2f544daa1775f57.image.png&ehk=McTeDiPeVj%2baImuM9h3Iy99c%2fete3fiVOtSMyhy7GWI%3d&risl=&pid=ImgRaw&r=0",
                floatingImg1:"https://th.bing.com/th/id/OIP.9uSrfdXDcol4F7jQkvCN9wAAAA?rs=1&pid=ImgDetMain", 
                floatingImg2:"https://th.bing.com/th/id/OIP.jDGNUeNm_UkOUhnGjeNWBAAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7",
                floatingTxt1:"", 
                floatingTxt2:"",
                direction: "right"      
            }, {
                backgroundImgMain:"https://64.media.tumblr.com/790a42c9c37e77d1473bcd5e2f40293d/ddc1825973fdad92-59/s512x512u_c1/8e70b85bc222c813cd2bcffb120a97b194d87fd0.jpg",
                floatingImg1:"https://th.bing.com/th/id/OIP.Q5K3ZcL44_iWH0CfOeyh-AHaHW?rs=1&pid=ImgDetMain", 
                floatingImg2:"https://cutecdn.codingdojo.com/new_design_image/onsite_bootcamp/MERN_big.png",
                floatingTxt1:"", 
                floatingTxt2:"",
                direction: "left"
            }]

    return (<>
      {data.map((card, index) => (
        <>
        <Card key={index} data={card} />
   
        </>
      ))}
      </>
    );
  }

export default FloatingElem