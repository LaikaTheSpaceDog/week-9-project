import React, { Component } from 'react';

class RollCall extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.counter;
        if (current < (this.props.names.length - 1)) {
            this.setState({counter: current + 1})
        } else {
            this.setState({counter: current = 0})
        }   
    }

    render() {

        return (
            <>
                <p>{this.props.names[this.state.counter]}</p>
                <button onClick={ this.handleClick }>Next</button>
            </>
        );
    }
}

export default RollCall;