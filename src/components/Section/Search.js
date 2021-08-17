import React, { useState, useEffect } from 'react'

const Search = ({ searchQuotes, quotes }) => {
/*
  searchQuotes function is passed to this component down from App.js and
  we use it onSubmit when click on the button:
    1. we wright something in the input field;
    2. this changes the state of input with setText and we get what we've just wright into text variable;
    3. we call searchQuotes and pass text variable into parameters to searchQuotes;
    4. we clear the input by setting text to '' (it's initial empty state)
 */
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  }
// a submit button to search for some quotes
  const onSubmit = (e) => {
    e.preventDefault();
    searchQuotes(text);
    setText(''); // clear input
  }
  return(
    <div style={{ marginTop:'5rem' }}>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='choose any word like: productivity, love or mind'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
        />
      </form>
    </div>
  )
}

export default Search
