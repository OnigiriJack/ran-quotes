
import './App.css';
import "./japaneseQuotes.json";
import { useEffect, useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({
  });
  const [languageState, setLangugageState] = useState(
    "en"
  )
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
  const changeLanguage = () => {
    if (languageState === "en") setLangugageState("jp")
    if (languageState === "jp") setLangugageState("en")
    console.log(languageState)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <Switch
            onChange={changeLanguage}
            name="lan"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <p id="text">  {quoteInfo.quote}</p>
          <p id="author">- {quoteInfo.author} </p>
          <div id="buttons-row">
            <Button variant="contained" size="small" color="primary" id="new-quote" onClick={getQuote} disableElevation>new quote</Button>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quoteInfo.quote} &hashtags=${quoteInfo.author},FCC,React`} >< TwitterIcon fontSize="large" /></a>
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
