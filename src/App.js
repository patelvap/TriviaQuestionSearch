import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      results : 'none', //becomes array with returned items from fetch call
      hasNext : false,
      hasPrev : false,
      currPage: 1,
    }
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          
        </div>
      </Router>
    )
  }
}

export default App;
