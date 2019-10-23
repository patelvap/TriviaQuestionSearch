import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    return (
        <div className="mainDiv">
            <div className="header">
                <h1> Welcome to Trivia Search </h1>
            </div>
            <div className="instructions">
                <h3>How to use this site</h3>
                <p>On the next page you will have 4 inputs to search by. These inputs allow you to refine your search of the trivia questions by 
                    the value of the questions (from 100-500 in increments of 100), by the category ID of the questions (a number between 1 and 18418), and by the earliest or by the latest date
                    a question was shown based on the air date. 
                </p>
                <p>Thanks for coming to the site! Click the button below to be taken to start searching!</p>
                <div className="button"><Link to="/search" style={{ color: '#3393FF', fontSize: 20 }}> Enter </Link></div>
            </div>
        </div>
    )
}

export default Homepage;