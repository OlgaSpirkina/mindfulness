import React, { Fragment } from 'react'
import { useParams } from 'react-router'
import AudioPlayer from '../AudioPlayer'
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
import mountainMeditation from "../../audio/mountainMeditation.mp3"
import fiveMinBells from "../../audio/five-min-bells.mp3"
import mountain8Min from "../../audio/mountain-8min.mp3"
import bodyScan4Min from "../../audio/body-scan-4min.mp3"
import bodyScan15Min from "../../audio/body-scan-15min.mp3"
import soundBody from "../../audio/sound-body.mp3"
import tara10min from "../../audio/tara-10min.mp3"
import basicBS from "../../audio/basic-body-scan.mp3"
import befriending from "../../audio/befriending.mp3"
import appriciation from "../../audio/appriciation.mp3"
import gratitude from "../../audio/gratitude.mp3"
import affectionate from "../../audio/affectionatebreathing.mp3"

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
    tensionRelease5min,
    mountainMeditation,
    fiveMinBells,
    mountain8Min,
    bodyScan4Min,
    bodyScan15Min,
    soundBody,
    tara10min,
    basicBS,
    befriending,
    appriciation,
    gratitude,
    affectionate
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
          <div className={styles.audio_container}>
            <h1 style={{marginTop: '5rem'}}>{loginNoDash}</h1>
            <figure className={styles.audio}>
              <figcaption>{audioFigcaption}</figcaption>
              <AudioPlayer source={audio}/>
            </figure>
          </div>
        </div>
      </Fragment>
        )
}

export default Details

/*
<audio controls>
  <source src={audio} type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
*/
