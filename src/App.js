
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
    {
      "value": "en",
      "label": "🇺🇸"
    }
  );



  useEffect(() => {
    getQuote();
    //if I added a state varibale in the array the app will rerender when it senses the change of the value
  }, []);

  useEffect(() => {
    getQuote();
    //if I added a state varibale in the array the app will rerender when it senses the change of the value
  }, [languageState]);


  function getQuote() {
    if (languageState.value === "en") {
      fetch("https://api.quotable.io/random")
        .then((resp) => resp.json())
        .then((data) => {
          setQuoteInfo({
            quote: data.content,
            author: data.author
          });
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
    if (languageState.value === "en") {
      setLangugageState({ "value": "jp", "label": "🇯🇵" });
    }
    if (languageState.value === "jp") {
      setLangugageState({ "value": "en", "label": "🇺🇸" });
    }

  }

  return (
    <div className="App ">
      <header className="App-header">
        <div id="quote-box" >
          <div id="top-row">
            <h2>Quote Machine</h2>

            <FormControlLabel
              id="language-switch"
              control={<Switch
                onChange={changeLanguage}
                name="lan"
                inputProps={{ 'aria-label': 'secondary checkbox' }} />}
              label={languageState.label}
              labelPlacement="start" />
          </div>
          <p id="text">  {quoteInfo.quote}</p>
          <p id="author" className={languageState.value === "en" ? 'background-blue' : 'background-red'}>- {quoteInfo.author} </p>
          <div id="bottom-row" >
            <Button variant="contained" size="small" id="new-quote" onClick={getQuote} >new quote</Button>
            <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quoteInfo.quote} &hashtags=${quoteInfo.author},FCC,React`} >< TwitterIcon fontSize="large" /></a>
          </div>
        </div>
      </header>
    </div >
  );
}

export default App;
