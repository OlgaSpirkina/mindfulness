import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
export default function SectionItem({ quote: { quote, image }}){
  return(
    <Fragment>
      <img
        src={image}
        alt="relaxing landscape"
        style={{width: '15rem'}} />
      <p>{quote}</p>
      <button><a href="/">See more</a></button>
    </Fragment>
  )
}

SectionItem.propTypes = {
  quote: PropTypes.object.isRequired
}
