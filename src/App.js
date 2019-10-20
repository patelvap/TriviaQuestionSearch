import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Search from './components/Search';
import Header from './components/Header/Header';

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

  getQuestions = (val, category, minDate, maxDate) => {
    let queryString = '?';
    let results = [];

    //check to see if parameters are empty or undefined
    const checkVal = (val === undefined || val === '');
    const checkCategory = (category === undefined || category === '');
    const checkMinDate = (minDate === undefined || minDate === '');
    const checkMaxDate = (maxDate === undefined || maxDate === '');

    //just entered search page so display none
    if (val === undefined && category === undefined && minDate === undefined && maxDate === undefined){
      queryString = '';
      results = 'none';
    }
    else if (checkVal && checkCategory && checkMinDate && checkMaxDate) {
      queryString = '';
      results = 'none';
    }
    else { // build query string
      results = [];
      if (!checkVal){
        queryString += 'value=' + val + '&';
      }
      if (!checkCategory){
        queryString += 'category=' + category + '&';
      }
      if (!checkMinDate) {
        queryString += 'min_date=' + new Date(minDate.val().toUTCstring()) + '&';
      }
      if (!checkMaxDate) {
        queryString += 'max_date=' + new Date(maxDate.val().toUTCstring()) + '&';
      }
    }

    fetch(`http://jservice.io/api/clues${queryString}`)
      .then(response => response.json())
      .then(data => {
        //console.log(data);

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
          results: data,
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
        </div>
      </Router>
    )
  }
}

export default App;