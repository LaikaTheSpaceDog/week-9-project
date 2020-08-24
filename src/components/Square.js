import React from 'react';

const Square = props => (
    <div style={{backgroundColor: `${props.colour}`, width: 200, height: 200 }}></div>
);

Square.defaultProps = {
    colour: "black"
}

export default Square;