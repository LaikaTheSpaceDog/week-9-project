import React, { Component } from 'react';

class Length extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "Test",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value })
    }

    render() {

        return (
            <div className="formGroup">
                <label>{ this.props.label }</label>
                <input onChange={ this.handleChange } className="form-control"  name={ this.props.name } value={this.state.input} type="text" style={{ marginTop: 10, marginBottom: 10}}></input>
            </div>
        );
    }
}

export default Length;