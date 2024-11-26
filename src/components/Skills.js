import React, { useEffect, useState } from 'react'
import '../styles/Skills.css'

//mui imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';


const languages = ['JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML', 'CSS'];

const frameworksLib = ['React.js', 'Node.js', 'Mocha', 'Chai'];

const tools = ['FireBase','JUnit', 'Git', 'GitHub'];


function Skills() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300)

      return () => clearTimeout(timer);
  }, [])


  return (
    
    <div className={`skills-container ${isVisible ? 'fade-in' : ''}`}>
        <h2 className='skills-header'>Skills</h2>

        <div className='tables-div'>
        <Stack 
        direction='column' 
        spacing={3}
        textAlign={'center'}
        sx={{
          justifyContent: 'center',
          p : '10px',
          color: '#CED4DA'
        }}
      >
        <h3 style={{ fontSize : '22px'}}>Languages</h3>
        {languages.map((entry) => {
          return <p style={{ fontSize : '18px'}} className='skills-content'>{entry}</p>
        })}
      </Stack>

      <Stack 
        direction='column' 
        spacing={3}
        textAlign={'center'}
        sx={{
          justifyContent: 'center',
          p : '10px',
          color: '#CED4DA'
        }}
      >
        <h3 style={{ fontSize : '22px'}}>Frameworks / Libraries</h3>
        {frameworksLib.map((entry) => {
          return <p style={{ fontSize : '18px'}} className='skills-content'>{entry}</p>
        })}
      </Stack>


      <Stack 
        direction='column' 
        spacing={3}
        textAlign={'center'}
        sx={{
          justifyContent: 'center',
          p : '10px',
          color: '#CED4DA'
        }}
      >
        <h3 style={{ fontSize : '22px'}}>Tools</h3>
        {tools.map((entry) => {
          return <p style={{ fontSize : '18px'}} className='skills-content'>{entry}</p>
        })}
      </Stack>
    
    

        </div>      






    </div>
    
    
  )
}

export default Skills
