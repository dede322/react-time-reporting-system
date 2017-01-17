import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import Task from '../components/tasks/Task'

class Tasks extends Component {
    render() {
        const tasks = this.props.tasks.map((task, index) => <Task key={index} name={task.name}/> );
        return (
            <div className="project">
                {tasks}
            </div>
        )
    }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    projectIndex: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.projects.items[ownProps.projectIndex].tasks || []
    };
};

Tasks = connect(mapStateToProps)(Tasks);
export default Tasks;