import React, { Component } from 'react';

class TwoCounters extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter1: 1,
            counter2: 1
        }

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);

    }

    handle1() {
        let current = this.state.counter1;
        this.setState({counter1: current + 1})
    }

    handle2() {
        let current = this.state.counter2;
        this.setState({counter2: current + 1})
    }

    componentDidMount() {
        let { counter1, counter2 } = this.state;
        document.title = counter1 + counter2;
    }

    componentDidUpdate() {
        let { counter1, counter2 } = this.state;
        document.title = counter1 + counter2;
    }

    render() {
        
        const { counter1, counter2 } = this.state;
        
        return (
            <>
                <div className="jumbotron">
                    <p>
                        <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
                        <span className="alert alert-danger mr-2 ml-2">{ counter1 }</span>
                    </p>
                    <p>
                        <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
                        <span className="alert alert-success mr-2 ml-2">{ counter2 }</span>
                    </p>
                </div>

            </>
        );
    }
}

export default TwoCounters;