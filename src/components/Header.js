import React from 'react';

const Header = ({children}) => (
    <header>
        <h1>{ children }</h1>
    </header>
);

Header.defaultProps = {
    text: "Hello, world!"
}

export default Header;