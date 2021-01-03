
import './App.css';
import { jQuotes } from './japaneseQuotes';
import { useEffect, useState } from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {

  const [quoteInfo, setQuoteInfo] = useState({
  });
  let [languageState, setLangugageState] = useState(
    "en"
  )
  // need to remove whitespace from author
  useEffect(() => {
    getQuote();
    console.log(jQuotes)

    //if I added a state varibale in the array the app will rerender when it senses the change of the value
  }, []);
  function getQuote() {
    if (languageState === "en") {
      console.log("here")
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
    else {
      let randomNum = Math.floor(Math.random() * Math.floor(jQuotes.data.length - 1))
      let JQuote = jQuotes.data[randomNum];
      setQuoteInfo(
        {
          quote: JQuote.quote,
          author: JQuote.author
        }
      )
    }

  }
  const changeLanguage = () => {

    if (languageState === "en") setLangugageState("jp")
    if (languageState === "jp") setLangugageState("en")

  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="quote-box">
          <FormControlLabel
            control={<Switch onChange={changeLanguage}
              name="lan"
              inputProps={{ 'aria-label': 'secondary checkbox' }} />}
            label={languageState} />
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
