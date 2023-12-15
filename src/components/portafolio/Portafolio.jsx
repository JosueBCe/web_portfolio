import React, { useState, useRef } from 'react';
import { useSprings, animated, to as interpolate } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import video1 from "../../assets/gifs/html-gif.gif"
import styles from './portafolio.module.css';
import { IoOpenOutline } from "react-icons/io5";

/*  */
const cards = [
  ["https://cdn3.f-cdn.com//files/download/195947150/1.png?width=780&height=780&fit=crop",
    "https://gruposapucai.com",
  ],
  ["https://cdn2.f-cdn.com/files/download/212308005/bronze.png", "https://bronze.vistumdevelopment.com/"],
  ["https://cdn3.f-cdn.com//files/download/198514182/1.jpg?width=780&height=585&fit=crop", "https://motors-blog.000webhostapp.com/phpmotors/"],
];
const cardss = [

  "https://sparkly-nougat-fc2117.netlify.app/",

];

const to = (i) => ({
  x: -150,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 10,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [visibleCards, setVisibleCards] = useState(cards.map(() => true));
  const [gone, setGone] = useState(new Set());
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const containerRef = useRef(null);
  const deckWidth = useRef(0);

  const handleResize = () => {
    deckWidth.current = containerRef.current.offsetWidth;
  };

  const bind = useDrag(({ args: [index], down, movement: [mx] }) => {
    const limit = deckWidth.current / 2;
    const isGone = Math.abs(mx) > limit;

    if (!down && isGone) {
      setGone((prevGone) => new Set(prevGone.add(index)));
      setVisibleCards((prevVisibleCards) => {
        const updatedVisibleCards = [...prevVisibleCards];
        updatedVisibleCards[index] = false;
        return updatedVisibleCards;
      });
    }

    api.start((i) => {
      if (index !== i) return;
      const x = down ? mx : 0;
      const rot = mx / 100 + (isGone ? (mx > 0 ? 1 : -1) * 10 : 0);
      const scale = down ? 1.1 : 1;

      return {
        x,
        rot,
        scale,
        delay: 0,
        config: { friction: 50, tension: down ? 400 : isGone ? 500 : 500 },
        onRest: () => {
          if (isGone && gone.size === cards.length) {
            setGone(new Set());
            api.start((i) => to(i));
            setVisibleCards(cards.map(() => true));
            ;
          }
        },
      };
    });
  });

  return (
    <div className="container">
      <div className={styles.deckContainer} ref={containerRef}>

        <div className={styles.deckCenter}></div>
        {props.map(({ x, y, rot, scale }, i) =>
          visibleCards[i] ? (
            <animated.div className={styles.deck} key={i} style={{ x, y }}>
              <animated.div
                {...bind(i)}
                style={{
                  touchAction: 'none',
                  overflow: 'scroll',
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(${cards[i][0]})`,
                }}
              >
                <a href={cards[i][1]} target="_blank" rel="noopener noreferrer" >
                  <button className={styles.btn}>
                    Live Version <IoOpenOutline />
                  </button>
                </a>
              </animated.div>
            </animated.div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default function Portafolio() {
  return (
    <>  

      <div className={styles.containerPortafolio}>
      
        <Deck />
      </div>
    </>
  );
}