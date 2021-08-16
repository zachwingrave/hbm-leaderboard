import logo from './logo.svg';
import './App.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      Testing
    </button>
  );
}

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
        <Square onClick={() => alert('Hello, world!')} />
      </header>
    </div>
  );
}

export default App;
