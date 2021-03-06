import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

/*
Using Link instead of <a> keeps the state intact (if I search something using my search-bar)
I can go to About page and come back and the result of research is still there
No complete refresh as with <a></a>
*/
const Navbar = ({ title, icon, burger }) => {
  const [toggle, setToggle] = useState(false);
  const toggleBurgerMenu = () => {
    setToggle(!toggle);
  }
  return(
    <nav className={styles.navbar}>
      <div className={styles.brand}><h1><i className={icon} ></i> {title}</h1></div>
      <div className={styles.toggle_button}><i className={burger} onClick={toggleBurgerMenu}></i></div>
      <div className=
      {toggle ? `${styles.active} ${styles.navbar_links}` : `${styles.navbar_links}`}
      >
        <ul
          onClick={toggleBurgerMenu}
          className=
        {!toggle ? `${styles.active} ${styles.navbar_links}` : `${styles.navbar_links}`}
      >
          <li>
            <Link to='/'
              style={{ textDecoration:'none', color:'inherit' }}>Home</Link>
          </li>
          <li>
            <Link to='/about' style={{ textDecoration:'none', color:'inherit' }}>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
Navbar.defaultProps={
  title: 'Mindfulness',
  icon: "fas fa-spa",
  burger: "fa fa-bars"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  burger: PropTypes.string.isRequired
}
export default Navbar
