import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddNewToDo from './AddNewToDo'
import TaskCard from './TaskCard'

class Main extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            taskLists: [
                {
                    "id": "1",
                    "title": "Finally take out the trash",
                    "description": " Took the trash yesteray",
                    "completed": "1"
                },
                {
                    "id": "2",
                    "title": "Take the dog for a walk",
                    "description": " Take Georgie out again. He hasn't walked in weeks",
                    "completed": "0"
                },
                {
                    "id": "3",
                    "title": "Get ready for the day",
                    "description": "Wake up early",
                    "completed": "0"
                }
            ],
            taskCardView: null
        };
    }




    handleAddTask = (taskTitle) => {
        let allTaskLists = this.state.taskLists;

        let maxid = 0;
        allTaskLists.map(function (obj) {
            if (obj.id > maxid) maxid = obj.id;
        });
        maxid = maxid + 1;

        allTaskLists.push({
            "id": maxid,
            "title": taskTitle,
            "description": "",
            "completed": "0"
        });
        this.setState({ taskLists: allTaskLists });
    }

    handleCompleteTask = (taskID) => {

        this.state.taskLists.map(obj => {
            if (obj.id == taskID) {
                obj.completed = '1';
            }
        });

        this.setState({ taskLists: this.state.taskLists });
    }

    handleDeleteTask = (taskID) => {

        let newTaskList = this.remove(this.state.taskLists, taskID);

        this.setState({ taskLists: newTaskList });
    }
    remove(array, element) {
        return array.filter(e => e.id !== element);
    }

    render() {

        let taskCard = (
            this.state.taskLists.map(taskList => {
                return (<TaskCard
                    taskList={taskList}
                    key={taskList.id} index={taskList.id}
                    allTaskList={this.state.taskLists}
                    onCompleteTask={this.handleCompleteTask}
                    onDeleteTask={this.handleDeleteTask}>
                </TaskCard>);

            })
        )
        return (
            <div className="App">
                <AddNewToDo onAddTask={this.handleAddTask} />
                <div>
                    {taskCard}
                </div>
            </div>
        );
    }
}

export default Main;
