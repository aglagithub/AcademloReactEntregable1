import './App.css'
import dbQuotes from './db/theme1/quotes.json'
import { getRandomQuote } from './utils/random.js'
import { useState } from "react"
import QuoteBox from './Components/QuoteBox/QuoteBox.jsx'

function App() {
  const [quote, setQuote] = useState(getRandomQuote(dbQuotes))
  const changeQuoteBox = ()=>{
    setQuote(getRandomQuote(dbQuotes))
  }
 // console.log(getRandomQuote(dbQuotes))
  //console.log(JSON.stringify(quote))
  //console.log(quote.phrase)
  //console.log(quote.author)

 

  return (
    <>
      {/* Entregable1*/}
      <main className='app'>
        <section>
          <h1>Titulo</h1>
        <QuoteBox phrase={quote.phrase} changeQuoteBox={changeQuoteBox}/>
        </section>
        <footer> <h3>Author: {quote.author}</h3></footer>
      </main>

    </>
  )
}

export default App
