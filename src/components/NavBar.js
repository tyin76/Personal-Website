import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Fonts.css'
import '../styles/NavBar.css'
import greyLogo from '../images/grey Logo.svg'


export function CustomNavButton({navText, clickEvent}) {
  return (
    <Button variant='text' sx={{
    color: '#CED4DA',
    fontFamily: 'Roboto-BoldItalic',
    fontSize: '20px',
    '&:hover' : {
      backgroundColor: '#474B4F',
      borderBottom: '1px solid #CED4DA'
    }
  }}
  onClick={clickEvent}
  >{navText}</Button>
  )
}

const email = 'terence.yin76@gmail.com'


function NavBar({ scrollToAbout, scrollToSkills, scrollToProjects }) {
  return (
    <>
    <div className='navbar-container'>
    <div className='logo-div'>
    <img src={greyLogo} width='195px' height='80px' className='navbar-logo'></img>
    </div>

        <div className='stack-container'> 
      <Stack 
        direction='row' 
        spacing={3} 
        sx={{
          justifyContent: 'center',
        }}
      >
        <CustomNavButton navText='About' clickEvent={scrollToAbout}/>
        <CustomNavButton navText='Skills' clickEvent={scrollToSkills}/>
        <CustomNavButton navText='Projects' clickEvent={scrollToProjects}/>
        <CustomNavButton navText='Contact Me' clickEvent={(e) => {
          window.location.href=`mailto:${email}`
          }}/>
      </Stack>
        </div> 
        
      </div>

      </>

    
  )
}

export default NavBar
