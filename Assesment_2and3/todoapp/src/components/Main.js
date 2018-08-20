import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './../App.css';
import AddNewToDo from './AddNewToDo'
import TaskCard from './TaskCard'

class Main extends Component {
   

    render() {

        let taskCard;
        if (this.props.tasks.length > 0) {
            taskCard = (
                this.props.tasks.map(taskList => {
                    return (<TaskCard taskList={taskList} key={taskList.id} index={taskList.id}> </TaskCard>);

                })
            )
        }
        return (
            <div className="App">
                <AddNewToDo />
                <div>
                    {taskCard}
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object,
    tasks: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(Main);
