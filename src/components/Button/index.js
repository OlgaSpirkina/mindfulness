import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Button.css'

export default function Button({ text, onClickFunction, btnClass, path }){
  return(
    <div>
      <button
        onClick={onClickFunction}
        className={btnClass}
      >
        <Link to={path}>
          {text}
        </Link>
      </button>
    </div>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired
}
