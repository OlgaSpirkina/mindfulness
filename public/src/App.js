import React, { Fragment, useState } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import data from './data';
import Navbar from './components/Navbar'
import Description from './components/Description.js'
import Search from './components/Search/index.js'
import Quotes from './components/Quotes'
import Details from './components/Quotes/Details'
import About from './components/pages/About'
import Footer from './components/Footer'
import './App.css';

/* an array of categories used in Categories component */
const allCategories = ['All', ...new Set(data.map(item => item.group))];

function App() {

  const [quotes, setQuotes] = useState(data);
  const [buttons, setButtons] = useState(allCategories);

  // Filter Function check the name of each category
  const filter = (button) =>{
    if(button === 'All'){
      setQuotes(data);
      return;
    }
    const filteredData = data.filter(item => item.group ===  button);
    setQuotes(filteredData)
  }

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
                  filteredQuotes={filteredQuotes}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  buttons={buttons}
                  filter={filter}
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
Calling fake API as well as useEffect hook were removed because of the category buttons issue: difficulty to rerender the quotes when using category buttons
Using data.js to get the quotes, images, etc.
*/
/*
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
*/
