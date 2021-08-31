import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Quote from './Quote'
import Button from '../Button'
import Categories from '../Categories'
import styles from './Quote.module.css'


const Quotes = ({ category, filter, filteredQuotes, searchQuery, setSearchQuery }) => {
  const [toggle, setToggle] = useState(true);
/* make the button see more disappear when search or category */
  const search = searchQuery ? `${styles.invisible}` : '';
  const filtered = filter ? `${styles.invisible}` : '';
/* doesn't work when use both */


  return(
    <Fragment>
      <div className={styles.categories_container}>
        <Categories filter={filter} category={category}/>
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

/*
line 19
<Categories filteredQuotes={filteredQuotes} searchCategory={searchCategory} />
*/
/*
// <button
//   onClick={()=>setToggle(!toggle)}
//   className={searchQuery ? `${styles.invisible}` : ''}
// >
//   See more
// </button>
*/
Quotes.propTypes = {
  filteredQuotes: PropTypes.array.isRequired
}
export default Quotes
