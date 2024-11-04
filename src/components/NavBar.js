import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../styles/Fonts.css';
import '../styles/NavBar.css';
import greyLogo from '../images/grey Logo.svg';
import { Box, Drawer, List } from "@mui/material";
import '../styles/Fonts.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function CustomNavButton({ navText, clickEvent, sx }) {
  return (
    <Button
      variant='text'
      sx={{
        color: '#CED4DA',
        fontFamily: 'Roboto-BoldItalic',
        fontSize: '20px',
        '&:hover': {
          backgroundColor: '#474B4F',
          borderBottom: '1px solid #CED4DA',
        },
        ...sx, // Apply the sx prop passed from parent here
      }}
      onClick={clickEvent}
    >
      {navText}
    </Button>
  );
}


const email = 'terence.yin76@gmail.com';

function NavBar({ scrollToAbout, scrollToSkills, scrollToProjects }) {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize to dynamically adjust drawer vs. normal navbar
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Drawer content
  const DrawerList = (
    <Box sx={{ width: 150 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        <CustomNavButton navText='About' clickEvent={scrollToAbout} />
        <CustomNavButton navText='Skills' clickEvent={scrollToSkills} />
        <CustomNavButton navText='Projects' clickEvent={scrollToProjects} />
        <CustomNavButton navText='Contact Me' clickEvent={() => {
          window.location.href = `mailto:${email}`;
        }} />
      </List>
    </Box>
  );

  // Regular navbar for larger screens
  function NormalNavBar() {
    return (
      <Stack direction='row' spacing={3} sx={{ justifyContent: 'center' }}>
        <CustomNavButton navText='About' clickEvent={scrollToAbout} />
        <CustomNavButton navText='Skills' clickEvent={scrollToSkills} />
        <CustomNavButton navText='Projects' clickEvent={scrollToProjects} />
        <CustomNavButton navText='Contact Me' clickEvent={() => {
          window.location.href = `mailto:${email}`;
        }} />
      </Stack>
    );
  }

  return (
    <>
      <Stack
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={"row"}    
      >
        <Box width='180px'>
          <img src={greyLogo} className='navbar-logo' alt="Logo" />
        </Box>

        {/* Show normal navbar if screen width >= 800px */}
        {windowWidth >= 800 && <NormalNavBar />}

        {/* Show Drawer for smaller screens */}
        {windowWidth < 800 && (
          <CustomNavButton
          navText= {<FontAwesomeIcon icon={faBars} />}
          clickEvent={() => setOpen(true)}
          sx={{
            position: 'relative',  
            right: '10px',
          }}
        />
        
        
        )}
      </Stack>

      <Drawer
        anchor='right'
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#686868", 
          },
        }}
        open={open}  
        onClose={() => setOpen(false)} 
      >
        {DrawerList}
      </Drawer>
    </>
  );
}

export default NavBar;
