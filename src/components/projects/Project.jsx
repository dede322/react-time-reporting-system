import React, { Component, PropTypes } from 'react';
import Button from '../common/Button';
import Spinner from '../common/Spinner';
import "./Project.css";
import Tasks from '../../containers/Tasks';

class Project extends Component {
    render() {
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
                    <Tasks tasks={this.props.tasks} projectIndex={this.props.index}/>
                </div>
                <Button text='Refresh tasks' onClick={this.props.onRefreshProject}/>
                <form className='col-md-4' onSubmit={this.props.onMoveToProject}>
                    <button type='submit'>Move to project</button>
                </form>
            </div>
        )
    }
}

Project.propTypes = {
    tasks: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onRefreshProject: PropTypes.func.isRequired,
    onMoveToProject: PropTypes.func.isRequired
};

export default Project;
