import React from 'react'
import portrait from '../images/portrait.JPG'
import '../styles/AboutMe.css'
import croppedPortrait from '../images/cropped portrait.jpg'

function AboutMe() {
  return (
    <>
        <div className='about-me-comp'>
            <h3 className='about-me-text-comp'>Hi, my name is Terence. <br />
            I am a Computer Science student <br />
            at The University of British Columbia!</h3>
            <img src={croppedPortrait} className='portrait'></img>
        </div>
    
    </>
  )
}

export default AboutMe
