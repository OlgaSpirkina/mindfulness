import { Fragment } from 'react'
import styles from './Search.module.css'
import '../../App.css'

const Search = ({ searchQuery, setSearchQuery }) => {
  // Label will be hidden with css, it's important to keep it here for accessibility (screen-readers)
  return(
    <Fragment>
      <form className={styles.form}>
        <label htmlFor="search">
          <span className={styles.visually_hidden}>Search with key words like: productivity, mind, love, emotions, etc</span>
        </label>
        <div className={styles.input_icon}>
          <input
  // var searchQuery contains any quote that matches the filter
            value={searchQuery}
  // while filtering is what is typed into this input
            onInput={e => setSearchQuery(e.target.value.toLowerCase())}
            id="search"
            type="text"
            name="mind"
            placeholder="Search with key words like: productivity, mind, love, emotions, stress, etc"
          />
          <i className="fas fa-search"></i>
        </div>
      </form>
    </Fragment>
  )
}

export default Search
