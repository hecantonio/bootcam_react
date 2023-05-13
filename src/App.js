import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Contador />
      </header>      
    </div>
  );
}

const Contador = () => {
  const [cont, setCont] = useState(0);

  return (
    <button onClick={() => setCont(prev => prev + 1)}>{cont}</button>
  )
}

export default App;
