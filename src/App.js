import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Description from './components/Description.js'
import Search from './components/Search/index.js'
import Quotes from './components/Quotes'
import Details from './components/Quotes/Details'
import About from './components/pages/About'
import Footer from './components/Footer'
import './App.css';
import styles from './components/Quotes/Quote.module.css'

function App() {
  const [quotes, setQuotes] = useState([]);
/* category buttons used in Categories component */
  const [category, setCategory] = useState([]);
  let allCategories = []; // will be used in useEffect to get all the group names
/* filtering the group names in Categories component */
  const filter = (button) => {
    if(button === 'All'){
      return quotes
    }
    const filteredData = quotes.filter(item => item.group === button);
    setQuotes(filteredData);
  }
//  End filteredData
  
// call an json-server to display all the quotes
  useEffect(() => {
    async function searchQuotes(){
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/mindfulness/quotes');
      const data = await res.json();
      setQuotes(data);
/*
  spread operator helps to use group names of all cards
*/
      allCategories = ['All', ...data.map(item => item.group)];
      setCategory(allCategories);
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
    <HashRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' render={props => (
              <Fragment>
                <Description />
                <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
                <Quotes
                  filter={filter}
                  category={category}
                  filteredQuotes={filteredQuotes}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
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
        <Footer />
      </Fragment>
    </HashRouter>

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
