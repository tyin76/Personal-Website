import React, { useState, useEffect } from 'react'
import '../styles/Projects.css'
import HomePagePic from '../images/HomePage.svg'

//mui imports
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';


const f1ProjectPoints = ['Developed and deployed with React and FireBase', 'Displays real-time driver and team rankings, comprehensive statistics, race schedules, an interactive quiz, and detailed results for both current and past races.' ];

const F1Photos = [
  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-1.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-2.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-3.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-5.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-6.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-7.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-8.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-9.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-10.png')
  },

  {
    title : 'Home Page',
    img: require('../F1 Showcase Demo Photos/F1-11.png')
  },

]

const vitAlertProjectPoints = ['Developed and deployed with React and FireBase', 'Nutrient tracking website using Edamam Food API that alerts users of deficiencies and possible side effects.']

const vitAlertPhotos = [
  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-1.png')
  },

  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-3.png')
  },

  {
    title: 'Photo',
    img: require('../VitAlert Demo Photos/Vit-2.png')
  },
]

const ScriberPoints = ["Scriber is a web application designed to make video transcription effortless. With Scriber, users can transcribe any YouTube video in just seconds. By logging in with their Google account, users can save and download their transcriptions and access a personalized history of past transcriptions at any time. Scriber offers an interactive learning feature: AI-generated quiz questions based on the transcribed video. This allows users to test their understanding for studying or any other purpose they deem fit."]

const ScriberPhotos = [
  {
    title: 'Photo',
    img: require('../images/Scriber-1.png')
  },
  {
    title: 'Photo',
    img: require('../images/Scriber-2.png')
  },
  {
    title: 'Photo',
    img: require('../images/Scriber-3.png')
  },
  {
    title: 'Photo',
    img: require('../images/Scriber-4.png')
  },
  {
    title: 'Photo', 
    img: require('../images/Scriber-5.png')
  },
  {
    title: 'Photo',
    img: require('../images/Scriber-6.png')
  }
]

const sundaePoints = ["Sum-Up Sundae lets users upload a short video to their group once a week, every Sunday. Groups of friends can consistently share and watch each other’s weekly updates, making it easy to stay connected. Users can join existing groups or create new ones, then record and enjoy everyone's highlights together. Make sure to post or else you can't watch other's videos!"]

const sundaePhotos = [
  {
    title: 'Photo',
    img: require('../images/sum-1.png')
  },
  {
    title: 'Photo',
    img: require('../images/sum-2.png')
  },
  {
    title: 'Photo',
    img: require('../images/sum-4.jpeg')
  },

  {
    title: 'Photo',
    img: require('../images/sum-3.png')
  },
]

const InsightPoints = ["UBC Insights is a web application that allows users to upload and query course data from over 60 000 sections to gain insights about averages, professors, and trends"];

const InsightPhotos = [
  {
    title: 'Photo',
    img: require('../images/Insight-1.png')
  },
  {
    title: 'Photo',
    img: require('../images/Insight-2.png')
  },
  {
    title: 'Photo',
    img: require('../images/Insight-3.png')
  },
  {
    title: 'Photo',
    img: require('../images/Insight-4.png')
  },
  {
    title: 'Photo',
    img: require('../images/Insight-5.png')
  },
  {
    title: 'Photo',
    img: require('../images/Insight-6.png')
  }

]

function Project({projectName, photoAlbum, projectPoints, cols, repo, siteURL, techStack=['hello', 'bye'], showSite=true, showDevpost=false, devpost=''}) {
  return (
    <div className='project'>
      <Box component={'section'}
          sx={{ p: 2, border: '1px solid grey',
                width:'80%',
                margin: '0 auto',
                backgroundColor: '#ADB5BD',
                borderRadius: '1em',
                boxShadow: '0 0 2rem #6C757D',
                marginBottom: '30px' 
          }}>
            
      <Stack
      direction={'column'}
      textAlign={'center'}>
        <h2 style={{ color: '#212529', marginTop : 0, fontFamily: 'Roboto-BoldItalic'}}>{projectName}</h2>
        <ul style={{ paddingLeft: 40, textAlign: 'left', marginTop: 0, fontSize: '20px'}}>
          {projectPoints.map((entry) => {
            return <li style={{ color: '#212529', fontFamily: 'Roboto-MediumItalic'}}>{entry}</li>
          })}

        </ul>
        
        <Box sx={{
          textAlign: 'left',
          color: '#212529',
          fontFamily: 'Roboto-MediumItalic',
          fontSize: '20px', 
        }}>
        <Typography sx={{
          fontFamily: 'Roboto-BoldItalic',
          fontSize: '20px',
          paddingLeft: '20px'
        }}>Tech Stack:</Typography>
        <ul>
          {techStack.map((entry, index) => {
            return <li key={index}>{entry}</li>
          })}
        </ul>
        </Box>

        <div className='links'>
        
        {showSite && <a
        href={siteURL}
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontFamily: 'Roboto-BoldItalic', width: 'auto'}}>
        <Button variant='contained'
        sx={{ fontFamily: 'Roboto-BoldItalic', backgroundColor: '#343A40', 
        color: '#CED4DA', 
        width:'auto', 
        display: 'inline-block'}}>
          Visit Site</Button>
        </a>
        }

        <a
        href={repo}
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontFamily: 'Roboto-BoldItalic'}}>
        <Button variant='contained'
        sx={{ fontFamily: 'Roboto-BoldItalic', backgroundColor: '#DEE2E6', color: '#343A40'}}>
        GitHub Repo</Button>
        </a>

        {showDevpost && <a
        href={devpost}
        target="_blank" 
        rel="noopener noreferrer"
        style={{ fontFamily: 'Roboto-BoldItalic'}}>
        <Button variant='contained'
        sx={{ fontFamily: 'Roboto-BoldItalic', backgroundColor: '#343A40', color: '#CED4DA'}}>
        Visit Devpost</Button>
        </a>}
        
        </div>
      

        <ImageList sx={{ width: '100%', height: 'auto', marginTop : 0 }} cols={cols} rowHeight='auto'>
      {photoAlbum.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius : '2em' }}
          />
        </ImageListItem>
      ))}
    </ImageList>


      </Stack>
      </Box>



    </div>
  )
}

function Projects() {
  return (
    <div className='projects-container'>
      <h2 className='projects-header'>Projects</h2>

          
          <Project projectName={'Sum-Up Sundae - nwHacks 2025 Winner'} photoAlbum={sundaePhotos} projectPoints={sundaePoints} cols={2}
                   siteURL={'https://sum-up-sundae.web.app/'} repo={'https://github.com/tyin76/sum-up-sundae'} techStack={['React', 'JavaScript', 'Tailwind', 'Express', 'Node', 'MongoDB', 'Livepeer']} devpost={'https://devpost.com/software/sum-up-sundae'} showDevpost={true}>
          </Project>
          
          <Project projectName={'Scriber'} photoAlbum={ScriberPhotos} projectPoints={ScriberPoints} cols={2}
                   siteURL={'https://scriber-126cc.web.app/'} repo={'https://github.com/tyin76/Scriber'} techStack={['React', 'JavaScript', 'Node', 'MongoDB', 'Express', 'OpenAI', 'FireBase']}>
          </Project>

          <Project projectName={'UBC-Insights'} photoAlbum={InsightPhotos} projectPoints={InsightPoints} cols={2}
                   siteURL={''} repo={'https://github.com/tyin76/UBC-Insights'} techStack={['React', 'TypeScript', 'Node', 'Express', 'Mocha', 'Chai']} showSite={false}>
          </Project>

          <Project projectName={'F1-Showcase'} photoAlbum={F1Photos} projectPoints={f1ProjectPoints} cols={2}
                   siteURL={'https://f1-showcase.web.app/'} repo={'https://github.com/tyin76/Upgraded-Formula-1-Showcase'} techStack={['React', 'JavaScript', 'HTML', 'CSS', 'FireBase']}
          ></Project>
          
          <Project projectName={'VitAlert'} photoAlbum={vitAlertPhotos} projectPoints={vitAlertProjectPoints} cols={3}
                   siteURL={'https://nw-hackers.web.app/'} repo={'https://github.com/tyin76/VitAlert-nwHacks-2024'} techStack={['React', 'TypeScript', 'HTML', 'CSS', 'FireBase']}
          ></Project>
          
          
          
    </div>
  )
}

export default Projects
