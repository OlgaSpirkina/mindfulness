import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'
import styles from './Quote.module.css'


const Quotes = ({ filteredQuotes }) => {
  const [toggle, setToggle] = useState(true);
  return(
    <Fragment>
      <section className={styles.quote_section}>
      {filteredQuotes.map((quote, index) => {
        if(index <= 8){
          return(
            <div key={index} className={styles.item_quote_div}>
              <Quote
                quote={quote}
              />
            </div>
          )
        }return(
          <div
            key={index}
            className={toggle ? `${styles.item_quote_div} ${styles.invisible}` : `${styles.item_quote_div}`}
          >
            <Quote quote={quote} />
          </div>
        )
    })}
      </section>
      <div className={styles.seemore}>
        <button onClick={()=>setToggle(!toggle)} >See more</button>
      </div>
    </Fragment>
  )
}
Quotes.propTypes = {
  filteredQuotes: PropTypes.array.isRequired
}
export default Quotes
