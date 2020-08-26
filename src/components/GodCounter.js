import React, { Component } from 'react';

class GodCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.counter;
        this.setState({counter: current + 1})
    }

    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleClick);
    }

    render() {

        return (
            <>
                <h1>God Counter</h1>
                <h2>{ this.state.counter }</h2>
            </>
        );
    }
}

export default GodCounter;