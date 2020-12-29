import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [quoteInfo, setQuoteInfo] = useState({

  });

  useEffect(() => {
    getQuote();
    //if I added a state varibale in the array the app will rerender when it senses the change of the value
  }, []);
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


  }
  return (
    <div className="App">
      <header className="App-header">

        <div id="quote-box">
          <p id="text">  {quoteInfo.quote}</p>
          <p id="author"> {quoteInfo.author} </p>
          <button id="new-quote" onClick={getQuote}>new quote</button>
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quoteInfo.quote} - ${quoteInfo.author}`} >i am clickable</a>
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
