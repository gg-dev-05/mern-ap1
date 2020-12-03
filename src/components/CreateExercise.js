import React, { Component } from 'react';

export default class CreateExercises extends Component {
    constructor(props) {
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e) {
        this.state({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.state({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.state({
            duration: e.target.value
        });
    }

    onChangeUsername(e) {
        this.state({
            username: e.target.value
        });
    }
}