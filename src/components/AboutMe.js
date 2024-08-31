import React, { useEffect, useState } from 'react'
import croppedPortrait from '../images/cropped portrait.jpg'
import '../styles/AboutMe.css'

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure the component is mounted before applying the effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-me-comp ${isVisible ? 'fade-in' : ''}`}>
      <h3 className='about-me-text-comp'>
        Hi, my name is <b>Terence</b>. <br />
        I am a Computer Science student <br />
        at The University of British Columbia!
      </h3>
      <img src={croppedPortrait} className='portrait' alt="Terence's portrait" />
    </div>
  )
}

export default AboutMe