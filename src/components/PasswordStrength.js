import React, { Component } from 'react';
import { Form } from 'react-bootstrap';


class PasswordStrength extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    alert(e) {
        if (this.state.input.length === 0){
            return "none";
        } else if (this.state.input.length < 9){
            return "red"
        } else if (this.state.input.length < 16) {
            return "orange"
        } else if (this.state.input.length >= 16) {
            return "green"
        }
    }
    
    handleChange(e) {
        this.setState({ input: e.currentTarget.value })
    }

    render() {

        return (
            <Form>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password Checker</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={ this.handleChange } name={ this.props.name } value={this.state.input} style={{ backgroundColor: this.alert() }} />
                </Form.Group>
            </Form>
            
            // <div className="formGroup">
            //     <label>{ this.props.label }</label>
            //     <input onChange={ this.handleChange } className="form-control"  name={ this.props.name } value={this.state.input} type="text" style={{ marginTop: 10, marginBottom: 10, backgroundColor: this.alert()}}/>
            // </div>
        );
    }
}

export default PasswordStrength;