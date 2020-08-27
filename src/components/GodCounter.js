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
                <img style={{ width: "20vw" }} src="https://i.guim.co.uk/img/media/14ebb1b8ae2fbe7d615d7b92456329b7eb1edd6c/47_0_1200_720/master/1200.jpg?width=1200&quality=85&auto=format&fit=max&s=258c2ccc558bada1a5a181d9bbe7502e" alt="god"></img>
                <h1>God Counter</h1>
                <h2>{ this.state.counter }</h2>
            </>
        );
    }
}

export default GodCounter;