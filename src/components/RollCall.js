import React, { Component } from 'react';

class RollCall extends Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.index;
        let { names } = this.props;
        if (current < (names.length - 1)) {
            this.setState({index: current + 1})
        } else {
            this.setState({index: 0})
        }   
    }

    render() {

        return (
            <>
                <p>{this.props.names[this.state.index]}</p>
                <button onClick={ this.handleClick }>Next</button>
            </>
        );
    }
}

export default RollCall;