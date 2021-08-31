import Quote from './Quote'
import styles from './Quote.module.css'

function Quotes({ menuItem }){
  return(
    <div>
      {
        menuItem.map((quote, index) => {
          return(
            <div
              key={index}
              className={styles.item_quote_div}>
              <Quote
                quote={quote}
              />
            </div>
          )
        })
      }
    </div>
  )
}
export default Quotes
