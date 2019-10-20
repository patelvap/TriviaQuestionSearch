import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: '',
            category: '',
            minDate: '',
            maxDate: ''
        }
    }

    updateSearch = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="inputs">
                        <div className="search">
                            <input name="value" type="text" placeholder="Difficulty Level" onChange={this.updateSearch}></input>
                            <label htmlFor="value">Difficulty Level</label>
                        </div>
                        <div className="search">
                            <input name="category" type="text" placeholder="Category" onChange={this.updateSearch}></input>
                            <label htmlFor="category">Category</label>
                        </div>
                        <div className="search">
                            <input name="minDate" type="text" placeholder="Start Date" onChange={this.updateSearch}></input>
                            <label htmlFor="minDate">Start Date</label>
                        </div>
                        <div className="search">
                            <input name="maxDate" type="text" placeholder="End Date" onChange={this.updateSearch}></input>
                            <label htmlFor="maxDate">End Date</label>
                        </div>
                    </div>
                    <input type="submit" className="submitButton" value="search"/>
                </form>
            </div>
        )
    }
}

export default Search;