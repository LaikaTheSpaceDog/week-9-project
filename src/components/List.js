import React, { Component } from 'react';

class List extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            arr: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleChange(e) {
        this.setState({ input: e.currentTarget.value })
    }

    handleClick(e) {
        let arr = this.state.arr;
        this.setState({ arr: arr.concat(this.state.input)});
        this.setState({ input: "" })
    }

    render() {

        return (
            <>
                
                <div className="form-group">
                    <label>List</label>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" onClick={ this.handleClick }>Add</button>
                        </div>
                        <input type="text" className="form-control" onChange={ this.handleChange } value={ this.state.input } />
                    </div>
                </div>
                
                <ul className="list-group">
                    {this.state.arr.map((item, index) => (
                        <li className="list-group-item" key={ index }>{ item }</li>
                    ))}
                </ul>
            </>
        );
    }
}

export default List;