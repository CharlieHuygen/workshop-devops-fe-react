import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import * as data from "configData";

function App() {
  const{environment, setEnv} = useState();

  useEffect(() => {
    fetch(data).then(resp => resp.json()).then(resp => {
      console.log(resp.env)
      setEnv(resp.env)
    });
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {environment}
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
