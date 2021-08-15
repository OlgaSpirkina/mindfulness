import React from 'react'
import PropTypes from 'prop-types'
const Navbar = ({ title, icon }) => {
  return(
    <nav>
      <h1><i className={icon}></i> {title}</h1>
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
