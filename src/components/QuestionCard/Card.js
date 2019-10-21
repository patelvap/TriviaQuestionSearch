import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            category: '',
            question: '',
            answer: '',
            airDate: ''
        }
    }
    
    render () {
        return (
            <div className="card">
                <table class="table">
                    <tbody class="tableBody">
                        <tr>
                            <td><strong>Difficulty</strong></td>
                            <td>{this.props.value}</td>
                        </tr>
                        <tr>
                            <td><strong>Category</strong></td>
                            <td>{this.props.category}</td>
                        </tr>
                        <tr>
                            <td><strong>Question</strong></td>
                            <td>{this.props.question}</td>
                        </tr>
                        <tr>
                            <td><strong>Answer</strong></td>
                            <td>{this.props.answer}</td>
                        </tr>
                        <tr>
                            <td><strong>Air Date</strong></td>
                            <td>{this.props.airDate.substring(0, 10)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}