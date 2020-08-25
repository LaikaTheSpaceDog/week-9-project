import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({items}) => (
    <>
        {!items ? null :
            <ul className="list-group pt-5">
                {items.map((item, index) => (
                    <BasketItem price={ item.price } name={ item.name } key={index}/>
                ))}
            </ul>
        }
    </>
);

Basket.defaultProps = {
    children: "No items to display"
}

export default Basket;

