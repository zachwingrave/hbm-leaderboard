import logo from './logo.svg';
import './App.css';

function AppButton(props) {
  return (
    <button
      className="App-button"
      onClick={props.onClick}
      children={props.children}
    ></button>
  );
}

function AppHeader(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Human Benchmark Leaderboard</h1>
      <p>
        Compare permalinked dashboards from{' '}
        <a
          className="App-link"
          href="https://humanbenchmark.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          humanbenchmark.com
        </a>
        .
      </p>
      <div class="Author-links">
        <a
          className="App-link"
          href="https://github.com/zachwingrave/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About the author
        </a>{' '}
        ·{' '}
        <a
          className="App-link"
          href="https://github.com/zachwingrave/hbm-leaderboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the code
        </a>
      </div>
      <AppButton onClick={() => alert('Hello, world!')}>
        Hello, world!
      </AppButton>
    </header>
  );
}

function App() {
  return (
    <div className="App">
      <AppHeader />
    </div>
  );
}

export default App;
