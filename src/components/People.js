import React from 'react';

const People = props => (
    <ul className="list-group">
        { props.names.map((value, index) => (
            <li className="list-group-item" key={ index }>
               { value }
            </li>
        )) }
    </ul>
);

People.defaultProps = {
    names: ["Nobody here!"]
}

export default People;