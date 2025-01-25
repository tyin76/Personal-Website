import React, { useEffect, useState } from 'react';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import croppedPortrait from '../images/cropped portrait.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: 'auto',
  padding: theme.spacing(3),
  paddingTop: '70px',
  opacity: 0,
  transition: 'opacity 0.5s ease-in-out',
  '&.fade-in': {
    opacity: 1,
  },
}));

const Portrait = styled('img')(({ theme }) => ({
  width: '300px', // Fixed width for larger screens
  height: '300px', // Fixed height for larger screens
  objectFit: 'cover',
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[5],
  [theme.breakpoints.down('md')]: {
    width: '200px', // Smaller size for mobile
    height: '200px',
  },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: '#E9ECEF',
  margin: theme.spacing(0, 1),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: '#E9ECEF',
  },
}));

const CustomTypography = styled(Typography)({
  fontFamily: 'Roboto-Medium',
  color: '#CED4DA'
});

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const email = 'terence.yin76@gmail.com';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const SocialIcons = () => (
    <Box display="flex" gap={1}>
      <SocialIcon 
        component="a"
        href="https://github.com/tyin76"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </SocialIcon>

      <SocialIcon
        component="a"
        href="https://www.linkedin.com/in/terence-yin-0aabba29a/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </SocialIcon>

      <SocialIcon
        component={Link}
        to={`mailto:${email}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${email}`;
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </SocialIcon>
    </Box>
  );

  return (
    <StyledGrid 
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={isVisible ? 'fade-in' : ''}
    >
      <Grid 
        container
        item
        spacing={{ xs: 4, md: 8 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          maxWidth: { xs: '100%', md: '1200px' },
        }}
      >
        {/* Portrait */}
        <Grid item>
          <Portrait
            src={croppedPortrait}
            alt="Terence's portrait"
          />
        </Grid>

        {/* Text Content */}
        <Grid item>
          <Box 
            textAlign="center"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <CustomTypography variant="h4" component="h3">
              Hi, my name is <Box component="span" fontWeight="bold">Terence Yin</Box>.
            </CustomTypography>
            <CustomTypography variant="h5">
              I am a Full-Stack Developer and Computer Science student
            </CustomTypography>
            <CustomTypography variant="h5">
              at The University of British Columbia!
            </CustomTypography>
          </Box>
        </Grid>

        {/* Social Icons */}
        <Grid item>
          <SocialIcons />
        </Grid>
      </Grid>
    </StyledGrid>
  );
}

export default AboutMe;