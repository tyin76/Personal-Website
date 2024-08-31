import logo from './logo.svg';
import './App.css';
import yinYang from './images/yy.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={yinYang} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
