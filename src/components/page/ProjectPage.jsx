import React, { Component, PropTypes } from 'react';
// import Projects from '../../containers/Projects'
import Header from '../Header'
import '../../App.css';
import {refreshProject} from "../../actions/index";
import {connect} from "react-redux";

class ProjectPage extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <h2>{this.props.name}</h2>
                <table>
                    <tr>
                        <td>Description:</td>
                        <td>{this.props.description}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

ProjectPage.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    tasks: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
    return {
        ...state.projects.items[ownProps.routeParams.projectIndex] || {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefreshProject: (project, index) => { dispatch(refreshProject(project, index)) }
    }
};

ProjectPage = connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

export default ProjectPage;