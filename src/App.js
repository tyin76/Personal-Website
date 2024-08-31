import logo from './logo.svg';
import './App.css';
import './styles/Fonts.css'
import yinYang from './images/yy.svg'
import NavBar from './components/NavBar.js'
import AboutMe from './components/AboutMe.js';

function App() {
  return (
    <div className='app-container'>
      <div className="App">
      
        <header className="App-header">
          <NavBar></NavBar>
        </header>

        <div className='about-me'>
            <AboutMe></AboutMe>

        </div>


      </div>
    </div>
  );
}

export default App;
