import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class TempConverter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input1: 0,
            input2: 32
        }

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    convertToCelsius(num) {
        let result = + ((num - 32) / 1.8).toFixed(2);
        return result;  
    }

    convertToFahrenheit(num){
        let result = + ((num * 1.8) + 32).toFixed(2);
        return result;
    }
    
    handleChange1(e) {
        this.setState({ 
            input2: this.convertToFahrenheit(e.currentTarget.value),
            input1: e.currentTarget.value
        })
    }

    handleChange2(e) {
        this.setState({ 
            input1: this.convertToCelsius(e.currentTarget.value),
            input2: e.currentTarget.value
        })
    }

    render() {

        return (

            <Form>
                <Form.Group>
                    <Form.Label>Celsius</Form.Label>
                    <Form.Control onChange={ this.handleChange1 } type="number" value={ this.state.input1 }></Form.Control>
                    <Form.Label>Fahrenheit</Form.Label>
                    <Form.Control onChange={ this.handleChange2 } type="number" value={ this.state.input2 }></Form.Control>
                </Form.Group>
            </Form>

            // <div className="formGroup">
            //     <label>Celsius</label>
            //     <input onChange={ this.handleChange1 } className="form-control"  name="celsius" value={this.state.input1} style={{ marginTop: 10, marginBottom: 10}}/>
            //     <label>Fahrenheit</label>
            //     <input onChange={ this.handleChange2 } className="form-control"  name="Fahrenheit" value={this.state.input2} style={{ marginTop: 10, marginBottom: 10}}/>
            // </div>
        );
    }
}

export default TempConverter;