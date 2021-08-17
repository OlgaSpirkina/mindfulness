import React from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'
import styles from './Quote.module.css'


const Quotes = ({ filteredQuotes }) => {
  return(
    <section className={styles.quote_section}>
    {filteredQuotes.map((quote, index) => {
      return(
        <div key={index} className={styles.item_quote_div}>
          <Quote
            quote={quote}
          />
        </div>
      )
  })}
    </section>
  )
}
Quotes.propTypes = {
  filteredQuotes: PropTypes.array.isRequired
}
export default Quotes
