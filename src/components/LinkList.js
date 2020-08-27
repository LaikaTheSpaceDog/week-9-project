import React from "react";

import { Link } from "react-router-dom";

const LinkList = () => (
    <ul className="nav">
        <li className="nav-item">
            <Link class="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link class="nav-link" to="/content">Another odd page</Link>
        </li>
        <li className="nav-item">
            <Link class="nav-link" to="/god">God Counter</Link>
        </li>
        <li className="nav-item">
            <Link class="nav-link" to="/password">Password Checker</Link>
        </li>
        <li className="nav-item">
            <Link class="nav-link" to="/basket">A random shopping basket</Link>
        </li>
        <li className="nav-item">
            <Link class="nav-link" to="/catch">Button catcher</Link>
        </li>
    </ul>
);

export default LinkList;