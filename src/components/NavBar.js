import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../styles/Fonts.css'
import '../styles/NavBar.css'
import logo from '../images/TY Logo.svg'
import greenLogo from '../images/Group 2.svg'


export function CustomNavButton({navText}) {
  return (
    <Button variant='text' sx={{
    color: '#86C232',
    fontFamily: 'Roboto-BoldItalic',
    fontSize: '20px',
    '&:hover' : {
      backgroundColor: '#474B4F'
    }
  }}>{navText}</Button>
  )
}


function NavBar() {
  return (
    <>
    <div className='navbar-container'>
    {/* <Logo width='195px' height='80px' className='navbar-logo' /> */}
    <div className='logo-div'>
    <img src={greenLogo} width='195px' height='80px' className='navbar-logo'></img>
    </div>

        <div className='stack-container'> 
      <Stack 
        direction='row' 
        spacing={3} 
        sx={{
          justifyContent: 'center',
        }}
      >
        <CustomNavButton navText='About' />
        <CustomNavButton navText='Experience' />
        <CustomNavButton navText='Skills' />
        <CustomNavButton navText='Projects' />
        <CustomNavButton navText='Contact Me' />
      </Stack>
        </div> 
        
      </div>

      </>

    
  )
}

export default NavBar
