import React, { Component } from 'react';

class Clicked extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            clicked: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        let current = false;
        this.setState({clicked: !current});
    }
    
    render() {
        return (
            <>
            {this.state.clicked === false ? <p onClick={ this.handleClick}>Not clicked</p> :
            <p onClick={ this.handleClick }>Clicked</p>}
            </>
        );
    }
}

export default Clicked;