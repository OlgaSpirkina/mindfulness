import { Fragment } from 'react'
import styles from './Search.module.css'

const Search = ({ searchQuery, setSearchQuery }) => {
  // Label will be hidden with css, it's important to keep it here for accessibility (screen-readers)
  return(
    <Fragment>
      <form className={styles.form}>
        <label htmlFor="search">
          <span className={styles.visually_hidden}>Search with key words like: productivity, mind, love, emotions, etc</span>
        </label>
        <input
// var searchQuery contains any quote that matches the filter
          value={searchQuery}
// while filtering is what is typed into this input
          onInput={e => setSearchQuery(e.target.value)}
          id="search"
          type="text"
          name="mind"
          placeholder="Search with key words like: productivity, mind, love, emotions, stress, etc"
        />
      </form>
    </Fragment>
  )
}

export default Search
