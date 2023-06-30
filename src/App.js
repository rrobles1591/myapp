import logo from './logo.svg';
import './App.css';
import {add, multiply} from './helpers'

function App() {
  console.log(multiply(4, 9))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hellonjlhlhjhj
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
