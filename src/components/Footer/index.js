import PropTypes from 'prop-types'
import styles from './Footer.module.css'
import website from '../../assets/www.jpeg'

export default function Footer({ github, linkedin }){
  return(
    <footer>
      <div className={styles.copyright}>Olga Spirkina &copy; 2021</div>
      <div className={styles.social_media}>
        <a href="https://www.linkedin.com/in/olga-spirkina/"><i className={linkedin}></i></a>
        <a href="https://github.com/OlgaSpirkina"><i className={github}></i></a>
        <a href="https://olgaspirkina.github.io/"><img src={website} alt="website"/></a>
      </div>
    </footer>
  )
}
Footer.defaultProps={
  linkedin: "fab fa-linkedin",
  github: "fab fa-github"
};
Footer.propTypes = {
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
}
