import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux/dist/react-redux";
import Project from './Project';
import {refreshProject} from "../actions/index";


class Projects extends Component {
    render() {
        const projects = this.props.projects.map((project, index) => {
            return (
                <Project
                    key={project.id}
                    index={index}
                    {...project}
                    onRefreshProject={() => { this.props.onRefreshProject(project); }}
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
        onRefreshProject: (project) => { dispatch(refreshProject(project)) }
    }
};

Projects = connect(mapStateToProps, mapDispatchToProps)(Projects);
export default Projects;
