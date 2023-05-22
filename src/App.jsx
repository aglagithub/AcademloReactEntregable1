import './App.css'
import dbQuotes from './db/theme1/quotes.json'
import { getRandom } from './utils/random.js'
import { useState } from "react"
import QuoteBox from './Components/QuoteBox/QuoteBox.jsx'

const bgImages = ["bg1", "bg2", "bg3", "bg4"]
function App() {

  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setbgImage] = useState(getRandom(bgImages))

  const changeQuoteBox = () => {
    setQuote(getRandom(dbQuotes))
  }

  const changeBkImage = () => {
    setbgImage(getRandom(bgImages)) //Nota podria mas bien incluirse en la función anteriro evitando enviar otra función
  }
  // console.log(getRandomQuote(dbQuotes))
  //console.log(JSON.stringify(quote))
  //console.log(quote.phrase)
  //console.log(quote.author)


  return (
    <>
      {/* Entregable1*/}
      <main className={`app ${bgImage}`}>
        <section className='app__container'>
          <h1 className='titulo'>Space Curiosities</h1>
          <QuoteBox phrase={quote.phrase} changeQuoteBox={changeQuoteBox} changeBkImage={changeBkImage}/>

          <footer className='pieDePagina'> <h3>Author: {quote.author}</h3></footer>
        </section>
      </main> 

    </>
  )
}

export default App
