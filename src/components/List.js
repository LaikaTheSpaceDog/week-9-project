import React, { Component } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';


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
        e.preventDefault()
        let arr = this.state.arr;
        this.setState({ arr: arr.concat(this.state.input)});
        this.setState({ input: "" })
    }

    render() {

        return (
            <>
                <Form>
                    <Form.Group>
                        <Form.Label>List</Form.Label>
                        <Form.Control onChange={ this.handleChange } type="text" value={ this.state.input } placeholder="Add item to list"></Form.Control>
                        <Button variant="primary" type="submit" onClick={ this.handleClick }>Click me</Button>
                    </Form.Group>
                    <ListGroup>
                        {this.state.arr.map((item, index) => (
                            <ListGroup.Item className="list-group-item" key={ index }>{ item }</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Form>
                
                
                {/* <div className="form-group">
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
                </ul> */}
            </>
        );
    }
}

export default List;