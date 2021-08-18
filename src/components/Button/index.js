import PropTypes from 'prop-types'
import styles from './Button.module.css'

export default function Button({ text, onClickFunction, btnClass }){
  return(
    <div>
      <button
        onClick={onClickFunction}
        className={btnClass}
      >
        {text}
      </button>
    </div>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunction: PropTypes.func.isRequired
}
