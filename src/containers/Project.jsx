import React, { Component, PropTypes } from 'react';
// import { dispatch } from 'redux';
import { connect } from 'react-redux'
import Task from '../components/tasks/Task'
import Button from '../components/common/Button'
// import {refreshProject} from '../actions/index';
import Spinner from '../components/common/Spinner'
import "./Project.css"

class Project extends Component {
    render() {
        const tasks = this.props.tasks.map((task, index) => <Task key={index} name={task.name}/> );
        return (
            <div className="project">
                <div>
                    <h3 className="project-title">{this.props.name}. loading: {this.props.isLoading}</h3>
                    <Spinner showSpinner={this.props.isLoading}/>
                </div>
                <div>{this.props.description}</div>
                <div>
                    Tasks:
                    <br/>
                    {tasks}
                </div>
                <Button text='Refresh tasks' onClick={this.props.onRefreshProject}/>
            </div>
        )
    }
}

Project.propTypes = {
    tasks: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const stateProject = (state.projects[ownProps.index]);
    const project = Object.assign({}, ownProps, stateProject);
    return { ...project };
};

Project = connect(mapStateToProps)(Project);
export default Project;
