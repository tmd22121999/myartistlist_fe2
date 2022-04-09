// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './style.css';

function Transporter() {
  const [progress, setProgress] = useState(0);
  function updateProgressIndicator() {
    const windowHeight = window.innerHeight;
    // const documentFullHeight = document.body.clientHeight;

    const scrolled = window.scrollY;

    const percentageScrolled = (scrolled / (300 + 700 - windowHeight)) * 100;

    setProgress(percentageScrolled);
  }
  useEffect(() => {
    updateProgressIndicator();

    window.addEventListener('scroll', updateProgressIndicator);

    return () => {
      window.removeEventListener('scroll', updateProgressIndicator);
    };
  }, [progress]);
  return (
    <div className="Transporter">
      <h1>Game The Transporter</h1>
      <div style={{ backgroundImage: 'url(/GameLandingPage/street-sheet.png)' }} className="bgGame">
        <div style={{ backgroundImage: 'url(/GameLandingPage/grabBikeSheet2.png)', left: `${progress}vw` }} className="xemay">xemay</div>
      </div>
      <p>{progress}</p>
    </div>
  );
}

export default Transporter;
