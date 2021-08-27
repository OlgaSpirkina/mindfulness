import React, { useState, useRef, useEffect } from 'react'
import styles from './AudioPlayer.module.css'
import { BsArrowLeftShort } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { FaPause } from 'react-icons/fa'

const AudioPlayer = ( {source} ) => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // ref for audio component
  const progressBar = useRef(); // ref to input
  const animationRef = useRef(); // knobby moving

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;

  },[audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
// useEffect: [when the audio is loaded]
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs/60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }
  const togglePlayPause = () => {

    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if(!prevValue){
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    }else{
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }
  // Start test
  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  // Finish test
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }
  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) - 30;
    changeRange();
  }
  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value) + 30;
    changeRange();
  }
  return(
    <div className={styles.audioPlayer}>

      <audio
        ref={audioPlayer}
        src={source}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      ></audio>
      <button
        className={styles.forwardBackward}
        onClick={backThirty}
      >
        <BsArrowLeftShort />30
      </button>
      <button
        className={styles.playPause}
        onClick={togglePlayPause}>
        { isPlaying ? <FaPause /> : <FaPlay className={styles.play}/> }
      </button>
      <button
        className={styles.forwardBackward}
        onClick={forwardThirty}
      >
        <BsArrowRightShort />30
      </button>
      {/*current time*/}
      <div className={styles.currentTime}>{calculateTime(currentTime)}</div>
      {/* progress-bar */}
      <input
        className={styles.progressBar}
        type="range"
        defaultValue="0"
        ref={progressBar}
        onChange={changeRange}
      />
      {/* duration */}
      <div className={styles.duration}>{duration && calculateTime(duration)}</div>
    </div>
  )
}

export default AudioPlayer
