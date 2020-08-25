import React, { Component } from 'react';

class Paragraph extends Component {
    render() {
        let { children } = this.props;

        return (
            <p>{ children }</p>
        );
    }
}

export default Paragraph;