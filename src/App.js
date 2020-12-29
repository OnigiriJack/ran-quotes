import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [quoteInfo, setQuoteInfo] = useState({
    quote: "Knowing is not enough; we must apply!",
    author: "Johann Wolfgang von Goethe"
  });
  function getQuote() {
    fetch("https://api.quotable.io/random")
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        setQuoteInfo({
          quote: data.content,
          author: data.author
        })
        console.log(data);
      });
    // fetch("https://quotes.rest/quote/random?language=en&limit=1")
    //   .then(response => response.json())
    //   .then(data => console.log(data))

  }
  return (
    <div className="App">
      <header className="App-header">

        <div id="quote-box">
          <p id="text">  {quoteInfo.quote}</p>
          <p id="author"> {quoteInfo.author} </p>
          <button id="new-quote" onClick={getQuote}>new quote</button>
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
