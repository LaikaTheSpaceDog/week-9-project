import React, { Component } from 'react';

class CatchMeIfYouCan extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.counter;
        this.setState({counter: current + this.props.jump})
    }

    render() {

        return (
            <>
                <button onClick={ this.handleClick } style={{position: "relative", top: this.state.counter}}>Catch me!</button>
            </>
        );
    }
}

export default CatchMeIfYouCan;