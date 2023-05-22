

const QuoteBox = ({phrase,changeQuoteBox}) => {
    return (
    <>
    <section>
        <button onClick={changeQuoteBox}>Try your luck!</button>
        <article>
            <p>{phrase}</p>
        </article>
    </section>
    </>
    )
}
export default QuoteBox