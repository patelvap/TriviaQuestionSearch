import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            category: '',
            minDate: '',
            maxDate: ''
        }
    }

    updateSearch = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
        this.props.history.push(`value=${this.state.value}&caggttegory=${this.state.category}&min_date=${this.state.minDate}&max_date=${this.state.maxDate}`);
        const { value, category, minDate, maxDate } = this.state;
        this.props.getQuestions(value, category, minDate, maxDate);
    }

    render() {
        return (
            <div className="outerContainer">
                <form onSubmit={this.submit}>
                    <div className="inputs">
                        <div className="searchDiv">
                            <input className="search" name="value" type="text" placeholder="Value of Question" onChange={this.updateSearch}></input>
                            <label htmlFor="value">Value of Question</label>
                        </div>
                        <div className="searchDiv">
                            <input className="search" name="category" type="text" placeholder="Category ID" onChange={this.updateSearch}></input>
                            <label htmlFor="category">Category ID</label>
                        </div>
                        <div className="searchDiv">
                            <input className="search" name="minDate" type="text" placeholder="Earliest Date" onChange={this.updateSearch}></input>
                            <label htmlFor="minDate">Earliest Date</label>
                        </div>
                        <div className="searchDiv">
                            <input className="search" name="maxDate" type="text" placeholder="Latest Date" onChange={this.updateSearch}></input>
                            <label htmlFor="maxDate">Latest Date</label>
                        </div>
                    </div>
                    <input type="submit" className="submitButton" value="Search"/>
                </form>
            </div>
        )
    }
}