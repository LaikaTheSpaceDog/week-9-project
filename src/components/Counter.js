import React, { Component } from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: props.initial,
        }

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);

    }

    handleClickUp() {
        let current = this.state.counter;
        if (current < this.props.max) {
            this.setState({counter: current + 1})
        }
    }

    handleClickDown() {
        let current = this.state.counter;
        if (current > 0) {
            this.setState({counter: current - 1})
        }
    }

    render() {

        let { max } = this.props;

        return (
            <>
                <p>{this.state.counter >= max || this.state.counter <= 0 ? "Limit reached" : this.state.counter}</p>

                        <button onClick={ this.handleClickDown }>-</button>
                        <button onClick={ this.handleClickUp }>+</button>
            </>
        );
    }
}

export default Counter;