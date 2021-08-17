import React from 'react'
import SectionItem from './SectionItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import styles from './Section.module.css'


const Section = ({ quotes, loading }) => {
  if(loading){
    return(
      <Spinner />
    )
  }else{
    return(
      <section className={styles.quote_section}>
      {quotes.map((quote, index) => {
        return(
          <div key={index} className={styles.item_quote_div}>
            <SectionItem
              quote={quote}
            />
          </div>
        )
    })}
    </section>
  )
  }
}
Section.propTypes = {
  quotes: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}
export default Section
