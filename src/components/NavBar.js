import React from 'react'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import '../styles/Fonts.css'
import logo from '../images/yy.svg'


function NavBar() {

  function CustomNavButton({navText}) {
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

  return (
    <>
        <Stack spacing={3} direction={'row'} sx={{
          p : 1,
          justifyContent: 'center'
          }}>
            <CustomNavButton navText={'About'}></CustomNavButton>
            <CustomNavButton navText={'Experience'}></CustomNavButton>
            <CustomNavButton navText={'Skills'}></CustomNavButton>
            <CustomNavButton navText={'Projects'}></CustomNavButton>
        </Stack>
    
    </>
  )
}

export default NavBar
