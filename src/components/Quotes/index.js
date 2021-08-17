import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'
import styles from './Quote.module.css'


const Quotes = ({ filteredQuotes, searchQuery }) => {
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
{/* toggle-button makes appear all the quotes or only first 8 */}
            className={toggle ? `${styles.item_quote_div} ${styles.invisible}` : `${styles.item_quote_div}`}
          >
            <Quote quote={quote} />
          </div>
        )
    })}
      </section>
      <div className={styles.seemore}>
        <button
{/*
  if a search-bar is used the toggle button disappears with an 'invisible' class added and display:none
  when nothing is written into the search-bar the toggle button reappears because the class is removed
 */}
          onClick={()=>setToggle(!toggle)}
          className={searchQuery ? `${styles.invisible}` : ''}
        >
          See more
        </button>
      </div>
    </Fragment>
  )
}
Quotes.propTypes = {
  filteredQuotes: PropTypes.array.isRequired
}
export default Quotes
