import React, { useState, useEffect } from 'react';
import './header.css';
import Cta from '../cta/cta';


const Card = ({ data }) => {
    const { backgroundImgMain, floatingImg1, floatingImg2, floatingTxt1, floatingTxt2, direction } = data;

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const cardClassName = `card ${direction}`;
   
    return (
        <>
            <div className={cardClassName}
            
                style={{
                    transform: `translateY(-${offsetY * 0.5}px)`,
                }}>
                     <Cta text={"Hover Here"}/>
                <div className="card--image">
                    <img src={backgroundImgMain} alt="image" />
                </div>
                <div className="card--info info--1">
                    <span className="info--text">{floatingTxt1}</span>
                    <div className="icon">
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="info--image">
                        <img src={floatingImg1} alt="info image" />
                    </div>
                </div>
                <div className="card--info info--2">
                    <span className="info--text">{floatingTxt2}</span>
                    <div className="icon">
                        <ion-icon name="add-outline"></ion-icon>
                    </div>
                    <div className="info--image">
                        <img src={floatingImg2} alt="info image" />
                    </div>
                </div>
               
            </div>
            
        </>
    );
};

export default Card;