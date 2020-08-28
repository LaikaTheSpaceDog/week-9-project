import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

class Headline extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            background: "#004DCF",
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeComplete = this.handleChangeComplete.bind(this);
    }
    
    handleClick() {
        let { clicked } = this.state;
        this.setState({ clicked: !clicked })
    }

    handleChangeComplete(color, event) {
        this.setState({ background: color.hex })
    }

    render(){
        let {message} = this.props;

        return (
            <header>
                <h1 onClick={this.handleClick} style={{ color: this.state.background }} >{ message }</h1>
                {this.state.clicked === true ? <SketchPicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } /> : null}
            </header>
        );
    }
}

Headline.defaultProps = {
    children: "Hello, world!"
}

export default Headline;