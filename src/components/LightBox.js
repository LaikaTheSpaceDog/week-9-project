import React, { Component } from 'react';

const lightBoxStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
};

class LightBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggled: false,
        }

        this.handleHide = this.handleHide.bind(this);
        this.handleShow = this.handleShow.bind(this);

    }

    handleHide() {
        this.setState({toggled: false});
    }

    handleShow(e) {
        e.stopPropagation();
        this.setState({toggled: true});
    }

    componentDidMount() {
        window.addEventListener("click", this.handleHide);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.handleHide);
    }

    render() {

        const { toggled } = this.state;
        const { src } = this.props;

        return (
            <>
                <p>Click me...</p>
                <div style={ toggled ? lightBoxStyle : {} }>
                <img
                    className="img-thumbnail"
                    onClick={ this.handleShow }
                    style={ {
                        width: toggled ? "" : 200,
                        margin: "0 auto",
                        zIndex: 2,
                    } }
                    src={ toggled ? "https://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2018/10/Untitled.jpeg" : src }
                    alt='A confused dog who angers upon click'
                />
            </div>
            </>
        );
    }
}

export default LightBox;