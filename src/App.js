import logo from './logo.svg';
import './App.css';
import './styles/Fonts.css'
import yinYang from './images/yy.svg'
import NavBar from './components/NavBar.js'
import AboutMe from './components/AboutMe.js';
import Skills from './components/Skills.js'
import Projects from './components/Projects.js'
import { useRef } from 'react';

function App() {

  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior : 'smooth' })
  }

  return (
    <div className='app-container'>
      <div className="App">
      
        <header className="App-header">
          <NavBar 
          scrollToAbout={() => scrollToComponent(aboutMeRef)}
          scrollToSkills={() => scrollToComponent(skillsRef)}>

          </NavBar>
        </header>

        <div className='about-me' ref={aboutMeRef}>
            <AboutMe></AboutMe>
        </div>

        <div className='separator'>
        </div>

        
        <div className='skills-div' ref={skillsRef}>
          <Skills>

          </Skills>
        </div>

        <div className='separator'>
        </div>

        <div className='projects-div'>
            <Projects>
              
            </Projects>

        </div>


      </div>
    </div>
  );
}

export default App;
