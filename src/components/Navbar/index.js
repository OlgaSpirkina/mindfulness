import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

/*
Using Link instead of <a> keeps the state intact (if I search something using my search-bar)
I can go to About page and come back and the result of research is still there
No complete refresh as with <a></a>
*/
const Navbar = ({ title, icon }) => {
  return(
    <nav className={styles.nav}>
      <h1><i className={icon}></i> {title}</h1>
      <Fragment>
        <ul>
          <li>
            <Link to='/' style={{ textDecoration:'none', color:'inherit' }}>Home</Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration:'none', color:'inherit' }}>About</Link>
          </li>
        </ul>
      </Fragment>
    </nav>
  )
}
Navbar.defaultProps={
  title: 'Mindfulness',
  icon: "fas fa-spa"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default Navbar
