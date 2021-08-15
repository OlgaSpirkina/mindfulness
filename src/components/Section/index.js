import React, { Fragment } from 'react'
import SectionItem from './SectionItem'


const Section = ({ quotes, loading }) => {
  return(
    <Fragment>
    {quotes.map((quote, index) => {
      return(
        <div key={index}>
          <SectionItem
            quote={quote}
          />
        </div>
      )
    })}
    </Fragment>
  )
}

export default Section
