import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux/dist/react-redux";
import Project from '../components/projects/Project';
import {refreshProject} from "../actions/index";
import { browserHistory } from 'react-router';


class Projects extends Component {
    onMoveToProject(index, eventClick) {
        eventClick.preventDefault();
        browserHistory.push(`/project-detail/${index}`);
    }

    render() {
        const projects = this.props.projects.map((project, index) => {
            return (
                <Project
                    key={project.id}
                    index={index}
                    {...project}
                    onRefreshProject={() => { this.props.onRefreshProject(project, index); }}
                    onMoveToProject={(eventClick) => { this.onMoveToProject(index, eventClick); }}
                />
            )
        });

        return (
            <div>
                {projects}
            </div>
        )
    }
}


Projects.propTypes = {
    projects: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        projects: state.projects.items || []
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRefreshProject: (project, index) => { dispatch(refreshProject(project, index)) }
    }
};

Projects = connect(mapStateToProps, mapDispatchToProps)(Projects);
export default Projects;
