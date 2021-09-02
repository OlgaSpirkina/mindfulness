import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'
import Button from '../Button'
import Categories from '../Categories'
import styles from './Quote.module.css'


const Quotes = ({ filter, buttons, filteredQuotes, searchQuery, setSearchQuery }) => {
  const [toggle, setToggle] = useState(true);

  return(
    <Fragment>
      <div className={styles.categories_container}>
        <Categories buttons={buttons} filter={filter}  />
      </div>
      <section className={styles.quote_section}>
      {filteredQuotes.map((quote, index) => {
        if(index <= 8){
          return(
              <div key={index} className={styles.item_quote_div}>
                <Quote
                  quote={quote}
                  setSearchQuery={setSearchQuery}
                />
              </div>
          )
        }return(
          <div
            key={index}
            className={toggle ? `${styles.item_quote_div} ${styles.invisible}` : `${styles.item_quote_div}`}
          >
{/* toggle-button makes appear all the quotes or only first 8 */}
            <Quote
              quote={quote}
            />
          </div>
        )
    })}
      </section>
      <div className={styles.seemore}>
{/*
  if a search-bar is used the toggle button disappears with an 'invisible' class added and display:none
  when nothing is written into the search-bar the toggle button reappears because the class is removed
 */}

        <Button
          text={toggle ? "See more" : "See less"}
          onClickFunction={()=>setToggle(!toggle)}
          btnClass={searchQuery ? `${styles.invisible}` : ''}
          path='/'
        />
      </div>
    </Fragment>
  )
}

Quotes.propTypes = {
  filteredQuotes: PropTypes.array.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  buttons: PropTypes.array,
  filter: PropTypes.func
}
export default Quotes
