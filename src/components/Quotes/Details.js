import React, { Fragment } from 'react'
import { useParams } from 'react-router'

const Details = ({ quotes }) => {
  const { login } = useParams();
  let detail = '';
  for(let i=0; i<quotes.length; i++){
    if(login === quotes[i].login){
      detail = `${quotes[i].image}`;
      console.log(`Voici: ${quotes[i].image}`);
    }
  }
    return(
      // return (`${login}` ? <img src={image} alt="paysage" /> : <h1>bonjour</h1>)
      <Fragment>
        <h1 style={{marginTop: '5rem'}}>{login}</h1>
        <img src={detail} alt="paysage" />
      </Fragment>
        )
}

export default Details
