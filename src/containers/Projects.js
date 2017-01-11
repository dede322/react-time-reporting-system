import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux/dist/react-redux";
import Project from './Project';


class Projects extends Component {
    render() {
        const projects = this.props.projects.map((project, index) => {
            return (
                <Project
                    key={project.id}
                    index={index}
                    name={project.name}
                    description={project.description}
                    tasks={project.tasks}
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
        projects: state.projects || []
    };
};

Projects = connect(mapStateToProps)(Projects);
export default Projects;
