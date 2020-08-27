import React, { Component } from 'react';

class StepCounter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);

    }

    handleClickUp() {
        let current = this.state.counter;
        if (current < this.props.max) {
            this.setState({counter: current + Number(this.props.step)})
        }
    }

    handleClickDown() {
        let current = this.state.counter;
        if (current > 0) {
            this.setState({counter: current - Number(this.props.step)})
        }
    }

    render() {

        let { max } = this.props;

        return (
            <>
                <p>{this.state.counter >= max || this.state.counter < 0 ? "Limit reached" : "Step Counter"}</p>
                <p>{this.state.counter}</p>

                        <button onClick={ this.handleClickDown }>-</button>
                        <button onClick={ this.handleClickUp }>+</button>
            </>
        );
    }
}

export default StepCounter;