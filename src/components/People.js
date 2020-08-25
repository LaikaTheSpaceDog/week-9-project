import React from 'react';

const People = ({names}) => (
    <>
        {!names ? <p>Nobody here</p> : 
            <ul className="list-group">
                { names.map((value, index) => (
                    <li className="list-group-item" key={ index }>
                    { value }
                    </li>
                ))}
            </ul>
        }
    </>

);

// People.defaultProps = {
//     names: ["Nobody here!"]
// }

export default People;