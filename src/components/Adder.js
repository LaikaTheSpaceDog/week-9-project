import React, { Component } from 'react';

class List extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            input: 0,
            total: 0,
            arr: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleChange(e) {
        this.setState({ input: e.currentTarget.value })
    }

    handleClick(e) {
        e.preventDefault();
        let arr = this.state.arr;
        let current = + this.state.total;
        this.setState({ arr: arr.concat(this.state.input)});
        this.setState({total: current + Number(this.state.input)});
        this.setState({ input: "" });
    }

    render() {

        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Adder</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button type="submit" className="btn btn-outline-secondary" onClick={ this.handleClick }>Add</button>
                            </div>
                            <input type="number" className="form-control" onChange={ this.handleChange } value={ this.state.input } />
                        </div>
                    </div>
                </form>
                <ul className="list-group">
                    {this.state.arr.map((item, index) => (
                        <li className="list-group-item" key={ index }>{ item }</li>
                    ))}
                    <li className="list-group-item">Total: { this.state.total }</li>
                </ul>
            </>
        );
    }
}

export default List;