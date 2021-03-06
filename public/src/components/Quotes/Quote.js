import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

// Display single element created from api as a card
export default function Quote({ quote: { image, quote, login }, setSearchQuery }){
  const getDetails = () => {
    // clear the input of search bar
    setSearchQuery('');
    console.log(`Voici: ${login}`);
  }
  return(
    <Fragment>
      <img
        src={image}
        alt="relaxing landscape"
        style={{width: '15rem'}} />
      <p>{quote}</p>
      <Button
       text="Exercice"
       onClickFunction={getDetails}
       path={`/details/${login}`}
     />
    </Fragment>
  )
}
Quote.propTypes = {
  quote: PropTypes.object.isRequired,
  setSearchQuery: PropTypes.func
}
