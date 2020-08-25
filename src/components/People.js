import React, { Component } from 'react';

class People extends Component {
    
    handleClick() {
        console.log("Clicked");
    }

    render() {
        let { names } = this.props;

        return (
            <>
            {!names ? <p>Nobody here</p> : 
                <ul className="list-group pt-5" onClick={ this.handleClick }>
                    { names.map((value, index) => (
                        <li className="list-group-item" key={ index }>
                        { value }
                        </li>
                    ))}
                </ul>
            }
        </>
        );
    }
}


// People.defaultProps = {
//     names: ["Nobody here!"]
// }

export default People;