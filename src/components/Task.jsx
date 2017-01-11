import React, { Component, PropTypes } from 'react'

class Task extends Component {
    render() {
        return (
            <div>
                <i>{this.props.name}</i>
            </div>
        )
    }
}

Task.propTypes = {
    name: PropTypes.string.isRequired
};
export default Task;