import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router'

const Details = ({ quotes }) => {
  const { login } = useParams();
  let detail = '';
  let audio = '';
  for(let i=0; i<quotes.length; i++){
    if(login === quotes[i].login){
      detail = `${quotes[i].image}`;
      audio = `${quotes[i].audio}`
      console.log(`Voici: ${quotes[i].image}`);
    }
  }
  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  })
    return(
      <Fragment>
        <h1 style={{marginTop: '5rem'}}>{login}</h1>
        <img src={detail} alt="paysage" />
        <figure>
          <figcaption>Listen to the T-Rex:</figcaption>
            <audio controls
              className="audio-element"
            >
              <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio>

        </figure>

      </Fragment>
        )
}

export default Details
