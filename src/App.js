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

function AppTextArea(props) {
  return <textarea className="App-textarea"></textarea>;
}

function AppHeader(props) {
  return (
    <header className="App-header">
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
      <div className="Author-links">
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
    </header>
  );
}

function AppBody() {
  return (
    <div className="App-body">
      Enter dashboard permalinks below:
      <AppTextArea></AppTextArea>
      <AppButton onClick={main}>Compare Dashboards</AppButton>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppBody />
    </div>
  );
}

function scrapeDashboards() {
  console.log('scrapeDashboards: Not yet implemented.');
}

function compareDashboards() {
  console.log('compareDashboards: Not yet implemented.');
}

function main() {
  scrapeDashboards();
  compareDashboards();
}

export default App;
