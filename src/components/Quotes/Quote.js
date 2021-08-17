import { Fragment } from 'react'
import PropTypes from 'prop-types'

// Display single element created from api as a card
export default function Quote({ quote: { image, quote } }){
  return(
    <Fragment>
      <img
        src={image}
        alt="relaxing landscape"
        style={{width: '15rem'}} />
      <p>{quote}</p>
    </Fragment>
  )
}
Quote.propTypes = {
  quote: PropTypes.object.isRequired
}
