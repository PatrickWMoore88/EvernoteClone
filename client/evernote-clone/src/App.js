import logo from './logo.svg';
import './App.css';

function App() {
  let Click = () => {
    let response = fetch('http://localhost:8080/getNote')
    .then((data) => console.log("Axios complete"))
  }

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <button name="button" value="Ok" type="button" onClick={Click}>Click Me</button>
    </div>
  );
}

export default App;
