import React, { useState, useEffect } from 'react';
import '../cta/cta.css';

function Cta({ text }) {
  const [visible, setVisible] = useState(true);

  const handleParentHover = () => {
    const timer = setTimeout(() => {
        setVisible(false);
      }, 10000); // 10 seconds
  
      return () => {
        clearTimeout(timer);
      };
  };

  return (
    <div className={`cta-parent`} onMouseEnter={handleParentHover}>
      <div className={`cta-container ${visible ? 'visible' : 'hidden'}`}>
        <p className="cta-text">{text}</p>
      </div>
    </div>
  );
}

export default Cta;