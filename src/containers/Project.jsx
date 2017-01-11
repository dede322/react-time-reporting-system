import React, { Component, PropTypes } from 'react';
import { dispatch } from 'redux';
import { connect } from 'react-redux'
import Task from '../components/Task'
import Button from './Button'
import {refreshProject} from '../actions/index';

class Project extends Component {
    render() {
        const tasks = this.props.tasks.map((task, index) => <Task key={index} name={task.name}/> );
        return (
            <div>
                <div><h3>{this.props.name}</h3></div>
                <div>{this.props.description}</div>
                <div>
                    Tasks:
                    <br/>
                    {tasks}
                </div>
                <Button text='Refresh tasks' onClick={this.refreshTasks}/>
            </div>
        )
    }

    refreshTasks = () => {
        dispatch(refreshProject(this.props.index));
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
