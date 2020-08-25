import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.toggled;
        this.setState({toggled: !current})
    }

    render() {
        let { colour } = this.props;

        return (
            <>
            {this.state.toggled === false ? <div style={{backgroundColor: "green", width: 200, height: 200 }} onClick={ this.handleClick }></div> :
            <div style={{backgroundColor: `${colour}`, width: 200, height: 200 }} onClick={ this.handleClick }></div>}
            </>
        );
    }
}

Square.defaultProps = {
    colour: "green"
}

export default Square;