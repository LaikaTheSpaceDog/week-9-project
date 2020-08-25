import React from 'react';

const BasketItem = ({price, name}) => (
    <>
        <li className="list-group-item">{name}, £{price}</li>
    </>
);

export default BasketItem;