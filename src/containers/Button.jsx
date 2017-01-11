import React, { Component, PropTypes } from 'react'
import noop from "../utils/noop";

class Button extends Component {
    render() {
        return (
            <span>
                <button onClick={this.props.onClick}>
                    {this.props.text}
                </button>
            </span>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

Button.defaultProps = {
    onClick: noop
};

export default Button;