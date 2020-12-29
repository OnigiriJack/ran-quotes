
import './App.css';
import { useEffect, useState } from 'react';
import { TwitterShareButton } from 'react-twitter-embed';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({

  });
  // need to remove whitespace from author
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

          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quoteInfo.quote} &hashtags=${quoteInfo.author},FCC,React`} >Tweet Me</a>
        </div>

      </header>
    </div >
  );
}

export default App;
