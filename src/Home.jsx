import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
    return (
        <div className='home-text' style={{'textAlign': 'center', animation: 'spinAndChangeColor 4s linear infinite'}}>Boring Home Page</div>
    )}
}
