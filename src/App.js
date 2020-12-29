import logo from './logo.svg';
import './App.css';

function App() {

  function handleClick() {
    alert("button was clicked");
  }
  return (
    <div className="App">
      <header className="App-header">

        <div id="quote-box">
          <p id="text">I am text inside of quote box</p>
          <p id="author"> I am an author inside this box </p>
          <button id="new-quote" onClick={handleClick}>new quote</button>
          <a id="tweet-quote" href="https://google.com">i am clickable</a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>asdfasf sfasf asf and save to reload.
        </p>

      </header>
    </div >
  );
}

export default App;
