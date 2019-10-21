import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Search from './components/Search/Search';
import Header from './components/Header/Header';
import Results from './components/Results/Results'
import Homepage from './components/Homepage/Homepage'

class App extends Component {
  constructor(){
    super();
    this.state = {
      results : 'none', //becomes array with returned items from fetch call

      value: '',      //keep track of search queries
      category: '',
      minDate: '',
      maxDate: ''
    }
  }

  getQuestions = (value, category, minDate, maxDate) => {
    let queryString = '?';

    //check to see if parameters are empty or undefined
    const checkVal = (value === undefined || value === '');
    const checkCategory = (category === undefined || category === '');
    const checkMinDate = (minDate === undefined || minDate === '');
    const checkMaxDate = (maxDate === undefined || maxDate === '');

    //just entered search page so display nothing
    if (value === undefined && category === undefined && minDate === undefined && maxDate === undefined){
      queryString = '';
    }
    else if (checkVal && checkCategory && checkMinDate && checkMaxDate) {
      queryString = '';
    }
    else { // build query string
      if (!checkVal){
        queryString += 'value=' + value + '&';
      }
      if (!checkCategory){
        queryString += 'category=' + category + '&';
      }
      if (!checkMinDate) {
        queryString += 'min_date=' + minDate + '&';
      }
      if (!checkMaxDate) {
        queryString += 'max_date=' + maxDate + '&';
      }
    }
    
    fetch(`http://jservice.io/api/clues${queryString}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          results: data,
          value: value,
          category: category,
          minDate: minDate,
          maxDate: maxDate
        })
      })
      .catch(() => {
        this.setState({
          results: 'none',
          value: value,
          category: category,
          minDate: minDate,
          maxDate: maxDate
        });
      });
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header />
          <Route path="/" exact strict component={Homepage} />
          <Route path="/search" exact render={(props) => (
            <div>
              <Search getQuestions={this.getQuestions} {...props} />
              <Results results={this.state.results} />
            </div>
          )} />
        </div>
      </Router>
    )
  }
}

export default App;
