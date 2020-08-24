import React from 'react';

const Header = props => (
    <header>
        <h1>{ props.text }</h1>
    </header>
);

Header.defaultProps = {
    text: "Hello, world!"
}

export default Header;