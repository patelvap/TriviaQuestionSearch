import React, { Component } from 'react';

export default class Card extends Component {
    constructor() {
        super()
        this.state = {
            difficulty: '',
            category: '',
            question: '',
            answer: '',
            airDate: ''
        }
    }
}