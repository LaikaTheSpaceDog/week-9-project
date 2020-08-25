import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({items}) => (
    <>
        <BasketItem price={ item.price } name={ item.name }/>
    </>
);

Basket.defaultProps = {
    children: "No items to display"
}

export default Basket;