import { Fragment } from 'react'
import styles from './About.module.css'

const About = () =>{
  return(
    <Fragment>
      <section className={styles.about}>
        <h1>About This App</h1>
        <p>Version: 1.0.0</p>
      </section>
    </Fragment>
  )
}

export default About
