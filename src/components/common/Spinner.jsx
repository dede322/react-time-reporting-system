import React, { Component, PropTypes } from 'react'


class Spinner extends Component {
    render() {
        return (this.props.showSpinner ? <div className="spinner spinner-small"></div> : <span/> );
    }
}

Spinner.propTypes = {
    showSpinner: PropTypes.bool
};

Spinner.defaultProps = {
    showSpinner: false
};
export default Spinner;
