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


const languages = ['JavaScript', 'Java', 'C++', 'C', 'HTML/CSS'];

const frameworksLib = ['React.js', 'Node.js', 'Material UI (MUI)'];

const tools = ['FireBase','GitHub','JUnit','WordPress','VS-Code'];


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
        <TableContainer sx={{width: '33%', height: '100%'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            '& td, & th': {
                fontFamily: 'Roboto-Italic',
                fontSize: '22px',
                backgroundColor:'#212529',
                color: '#CED4DA'
              }
              }}>
            <TableCell align="center">Languages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {languages.map((lang) => (
            <TableRow
              
              sx={{ 
              '& td, & th': {
                fontFamily: 'Roboto-Bold',
                fontSize: '16px',
                backgroundColor:'#212529',
                color: '#CED4DA'
              }
            }}
            >
              <TableCell component="th" scope="row" align='center'>
                {lang}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


    <TableContainer sx={{width: '33%', height: '100%'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            '& td, & th': {
                fontFamily: 'Roboto-Italic',
                fontSize: '22px',
                backgroundColor:'#212529',
                color: '#CED4DA'
              }
              }}>
            <TableCell align="center">Frameworks / Libraries</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {frameworksLib.map((entry) => (
            <TableRow
              
              sx={{ 
              '& td, & th': {
                fontFamily: 'Roboto-Bold',
                fontSize: '16px',
                backgroundColor:'#212529',
                color: '#CED4DA',
                borderBottom: '1px solid #CED4DA',
              }
            }}
            >
              <TableCell component="th" scope="row" align='center'>
                {entry}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    
    <TableContainer sx={{width: '33%', height: '100%'}} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{
            '& td, & th': {
                fontFamily: 'Roboto-Italic',
                fontSize: '22px',
                backgroundColor:'#212529',
                color: '#CED4DA'
              }
              }}>
            <TableCell align="center">Tools</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tools.map((entry) => (
            <TableRow
              
              sx={{ 
              '& td, & th': {
                fontFamily: 'Roboto-Bold',
                fontSize: '16px',
                backgroundColor:'#212529',
                color: '#CED4DA'
              }
            }}
            >
              <TableCell component="th" scope="row" align='center'>
                {entry}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

        </div>      






    </div>
    
    
  )
}

export default Skills
