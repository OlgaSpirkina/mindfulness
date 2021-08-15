import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section/'

import './App.css';

class App extends Component {
  state = {
    quotes: [],
    loading: false
  }
  async componentDidMount(){
    this.setState({ loading: true });

    const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/mindfulness/quotes');
    const data = await res.json()

    this.setState({ quotes: data, loading:false });

  }
  render(){
    return (
      <div className="App">
        <Navbar />
        <Section
          loading={this.state.loading}
          quotes={this.state.quotes}
        />
      </div>
    )
  }
}

export default App;
