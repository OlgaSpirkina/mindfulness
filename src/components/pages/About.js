import { Fragment } from 'react'
import styles from './About.module.css'

const freemindfulness = "https://www.freemindfulness.org/";
const headspace = "https://www.headspace.com/";
const mind = "https://mindfulnessexercises.com/free-guided-meditations-mindfulness-talks/";
const About = () =>{
  return(
    <Fragment>
      <section className={styles.about}>
        <h1>Mindfulness</h1>
        <p><small>V. 1.0.0</small></p>
        <p>Hello, my name is Olga and I'm a junior web-developer. Welcome to my Mindfulness web page where you may find some inspirational quotes and short guided meditation (from 3 minutes up to 20 minutes long). <br />Former athlete I have been working for the past 4 years as Piletes and Yoga teacher. I decided to change my career but Yoga, Meditation and Pilates are still my daily practices, so I would like to share my passion for some of these activities with you.</p>
        <p>Guided meditation from: <a href={freemindfulness} target="_blank" rel="noreferrer">FreeMindfulness</a> and <a href={mind} target="_blank" rel="noreferrer">Mindfulness Exercices</a></p>
        <p>Mindful Quotes from <a href={headspace} target="_blank" rel="noreferrer">Headspace</a></p>
      </section>
    </Fragment>
  )
}

export default About
