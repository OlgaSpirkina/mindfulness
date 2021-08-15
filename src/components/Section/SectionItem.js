import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
export default function SectionItem({ quote: {image, text }}){
  return(
    <Fragment>
      <img
        src={image}
        alt="relaxing landscape"
        style={{width: '15rem'}} />
      <p>{text}</p>
      <button><a href="/">See more</a></button>
    </Fragment>
  )
}

SectionItem.propTypes = {
  quote: PropTypes.object.isRequired
}
