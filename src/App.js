import React, { Fragment, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Search from './components/Search/index.js'
import Quotes from './components/Quotes'
import Details from './components/Quotes/Details'
import About from './components/pages/About'
import './App.css';

function App() {
  const [quotes, setQuotes] = useState([]);
// call an json-server to display all the quotes
  useEffect(() => {
    async function searchQuotes(){
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/mindfulness/quotes');
      const data = await res.json();
      setQuotes(data);
    }

    searchQuotes();
  }, [])


// START Search & Filter function
// search bar navigates us to a new URL when we perform a search. We grab this value from the URL:
  const { thesearch } = window.location;
  const query = new URLSearchParams(thesearch).get('mind'); // 'mind' is a name of the input
/*
useState changes the state of queries when filtered, if the filter matches variable searchQuery contains correspondant
quote

*/
  const [searchQuery, setSearchQuery] = useState(query || '');
// filtering quotes based on the input values
  const filterQuotes = (quotes, query) => {
    if(!query){
      return quotes;
    }
    return quotes.filter((quote) => {
      const quoteText = quote.quote.toLowerCase();
      const quoteGroup = quote.group.toLowerCase();
      return (quoteText.includes(query) || quoteGroup.includes(query) );
    });
  };
  const filteredQuotes = filterQuotes(quotes, searchQuery);
// FINISH Search & Filter

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => (
              <Fragment>
                <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <Quotes
                  filteredQuotes={filteredQuotes}
                  searchQuery={searchQuery}
                />
              </Fragment>
          )} />
          <Route exact path='/about' component={About} />
          <Route exact path='/details/:login' render={props => (
            <Details
              {...props}
              quotes={quotes}
            />
          )} />
        </Switch>
      </Fragment>
    </Router>

  )
}

export default App;














/*
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section/'
import Search from './components/Section/Search'
import './App.css';

export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)

  const searchQuotes = (text) => {
    console.log(quotes)
  }

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/mindfulness/quotes');
      const data = await res.json();
      setQuotes(data);
      setLoading(false);
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Search searchQuotes={searchQuotes}  />
      <Section
        loading={loading}
        quotes={quotes}
      />
    </div>
  )
}

*/
