import './QuoteBox.css'

const QuoteBox = ({phrase,changeQuoteBox,changeBkImage}) => {
    return (
    <>
    <section className="quoteBox">
        <button className="quoteBox__btn" onClick={()=>{changeQuoteBox();changeBkImage() } } >Try your luck!</button>
        <article className="quoteBox__phrase">
            <p>{phrase}</p>
        </article>
    </section>
    </>
    )
}
export default QuoteBox