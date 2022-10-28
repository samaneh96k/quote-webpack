import axios from 'axios';
import "./style.css";
// import { localQuotes} from"./quotes"

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newquoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
//show Loading
function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
//hide Loading
function removeLoadingSpinner() {
  if (!loader.hidden) {
    quoteContainer.hidden = false;
    loader.hidden = true;
  }
}
//Show New Quote
const newQuote = () => {
  showLoadingSpinner();
  //make random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  if (!quote.author) {
    authorText.textContent = "UnKnown";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  removeLoadingSpinner();
};

//Get Quotes From API
async function getQuote() {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await axios.get(apiUrl);
    apiQuotes = res.data;
    console.log(apiQuotes)
    newQuote();
    removeLoadingSpinner();
  } catch (error) {
    console.log(error);
  }
}
//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}
    -${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
//Event Listeners
newquoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
getQuote();
