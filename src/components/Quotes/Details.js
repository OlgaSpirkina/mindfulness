import React, { Fragment } from 'react'
import { useParams } from 'react-router'
import styles from './Quote.module.css'
import breathingSpace from "../../audio/breathing-space.mp3"
import breathingSpace3min from "../../audio/breathing-space-3min.mp3"
import breathing3min from "../../audio/breathing3min.mp3"
import breathing5min from "../../audio/breathing5min.mp3"
import breathing10min from "../../audio/breathing10min.mp3"
import fiveMinBreathing from "../../audio/five-min-breathing.mp3"
import fourMinBreathing from "../../audio/four-min-breathing.mp3"
import sixMinAwarness from "../../audio/six-min-awarness.mp3"
import sounds3min from "../../audio/sounds3min.mp3"
import tenMinBreathing from "../../audio/ten-min-breathing.mp3"
import tensionRelease5min from "../../audio/tension-release-5min.mp3"

const Details = ({ quotes }) => {
  let { login } = useParams();
  let imageInDetails = '';
  let audioFigcaption = '';
  let audio = '';
  let loginNoDash = '';
  if(login.includes('-')){
    loginNoDash = login.replace(/-/g, ' ');
  }else{
    loginNoDash = login;
  }
  const soundArray = [
    breathingSpace,
    breathingSpace3min,
    breathing3min,
    breathing5min,
    breathing10min,
    fiveMinBreathing,
    fourMinBreathing,
    sixMinAwarness,
    sounds3min,
    tenMinBreathing,
    tensionRelease5min
  ];
  for(let i=0; i<quotes.length; i++){
    if(login === quotes[i].login){
      imageInDetails = `${quotes[i].image}`;
      audioFigcaption = `${quotes[i].audioFigcaption}`
      for(let j=0; j<soundArray.length; j++){
        if(i === j){
          audio = soundArray[j];
        }
      }
    }
  }
    return(
      <Fragment>
        <div className={styles.audio_parent} style={{ backgroundImage: `url(${imageInDetails})` }}>
          <div>
            <h1 style={{marginTop: '5rem'}}>{loginNoDash}</h1>
            <figure className={styles.audio}>
              <figcaption>{audioFigcaption}</figcaption>
                <audio controls>
                  <source src={audio} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
            </figure>
          </div>
        </div>
      </Fragment>
        )
}

export default Details
