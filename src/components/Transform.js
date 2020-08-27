import React, { Component } from 'react';

class Transform extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        this.setState({ value: e.currentTarget.value })
    }

    render() {

        let { value } = this.state; 
        let { transform } = this.props;
        
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Square</label>
                        <div className="input-group mb-3">
                            <input type="number" className="form-control" onChange={ this.handleChange } value={ value } />
                        </div>
                    </div>
                </form>
                <p>{ transform(value) }</p>
            </>
        );
    }
}

export default Transform;