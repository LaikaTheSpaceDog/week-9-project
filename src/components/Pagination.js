import React from 'react';

let pages = [1, 2, 3, 4];

const Pagination = () => (
    <ul className="pagination">
        { pages.map((value, index) => (
            <li className="page-item" key={ index }>
               <a className="page-link" href={"/page/" + value}>{ value }</a>
            </li>
        )) }
    </ul>
);

export default Pagination;