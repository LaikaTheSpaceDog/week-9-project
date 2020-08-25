import React, { Component } from 'react';

class ToggleText extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        let current = this.state.toggled;
        this.setState({toggled: !current})
    }

    render() {

        let { initial } = this.props;
        let { alternate } = this.props;

        return (
            <>
            {this.state.toggled === false ? <p onClick={ this.handleClick }>{ initial }</p> : <p onClick={ this.handleClick }>{ alternate }</p>}
            </>
        );
    }
}

export default ToggleText;