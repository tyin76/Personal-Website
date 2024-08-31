import React, { useEffect, useState } from 'react'
import croppedPortrait from '../images/cropped portrait.jpg'
import '../styles/AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);

  const email = 'terence.yin76@gmail.com'

  useEffect(() => {
    // Set a small delay to ensure the component is mounted before applying the effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-me-comp ${isVisible ? 'fade-in' : ''}`}>
      <div>
      <h3 className='about-me-text-comp'>
        Hi, my name is <b>Terence</b>. <br />
        I am a Computer Science student <br />
        at The University of British Columbia!
        </h3>

      <a 
      href={'https://github.com/tyin76'} 
      target="_blank" 
      rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} size='2x' color='#E9ECEF' style={{ paddingRight: '20px'}}
        className='icons'/>
      </a>

      <a 
      href={'https://www.linkedin.com/in/terence-yin-0aabba29a/'}
      target="_blank" 
      rel="noopener noreferrer">
      <FontAwesomeIcon icon= {faLinkedin} size='2x' color='#E9ECEF' style={{ paddingRight: '20px'}}
        className='icons'/>
      </a>

      <Link 
      to={`mailto:${email}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href=`mailto:${email}`;
      }}>
        <FontAwesomeIcon icon={faEnvelope} size='2x' color='#E9ECEF' style={{ paddingRight: '20px'}} 
          className='icons'/>
      </Link>

      </div>
      
      <img src={croppedPortrait} className='portrait' alt="Terence's portrait" />
    </div>
  )
}

export default AboutMe