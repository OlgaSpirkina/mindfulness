import React from 'react'
import SectionItem from './SectionItem'
import styles from './Section.module.css'


const Section = ({ quotes, loading }) => {
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

export default Section
