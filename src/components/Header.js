import React, { Component } from 'react';

class Header extends Component {
    render(){
        let {children} = this.props;

        return (
            <header>
            <h1>{ children }</h1>
            </header>
        );
    }
}

Header.defaultProps = {
    children: "Hello, world!"
}

export default Header;