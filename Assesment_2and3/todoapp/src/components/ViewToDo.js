import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import * as TaskActions from '../actions/TaskActions';

class ViewToDo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: -1,
            title: '',
            description: '',
            completed: true,
            checkError: '1',
            prevTitle: '',
            prevDescription: ''
        };
        this.Cancel = this.Cancel.bind(this);
        this.Complete = this.Complete.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Update = this.Update.bind(this);
    }

    componentWillMount() {
        let taskID = this.props.match.params.taskID;
        let savePromise = this.props.actions.loadTasks();
        savePromise.then((response) => {
            if (this.props.tasks.length > 0) {
                this.props.tasks.map(ele => {
                    if (ele.id == taskID) {
                        this.setState({
                            title: ele.title,
                            prevTitle: ele.title,
                            description: ele.description,
                            prevDescription: ele.description,
                            completed: ele.completed,
                            id: ele.id
                        });
                    }

                });
            }
        });
    }

    handleTitleChange = title => event => {
        this.setState({ checkErrorname: "1" });
        this.setState({
            [title]: event.target.value,
        });
    };
    handleDescriptionChange = description => event => {
        this.setState({
            [description]: event.target.value,
        });
    };

    Cancel() {
        this.setState({ title: this.state.prevTitle, description: this.state.prevDescription });
    }

    Complete() {
        let savePromise = this.props.actions.completeTask(this.state.id);
        savePromise.then((response) => {
            document.location = '/';
        });

    }

    Delete() {
        let savePromise = this.props.actions.deleteTask(this.state.id);
        savePromise.then((response) => {
            document.location = '/';
        });
    }

    Update() {

        if (this.state.title !== '') {
           let  Task = {
                "title": this.state.title,
                "description": this.state.description
            }
            let savePromise = this.props.actions.updateTask(this.state.id, Task);
            savePromise.then((response) => {
                document.location = '/';

            });
        }
        else {
            this.setState({ checkErrorname: "0" });
        }
    }

    render() {
        let completedButton;
        if (!this.state.completed) {
            completedButton = (
                <Button variant='contained' size="small" onClick={this.Complete} >
                    Complete
                 </Button >
            )
        }
        return (
            <div className="row" style={{ "margin": "10px", "padding": "10px" }}>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Link to={"/"}> Back to Task</Link>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <TextField
                                required
                                id="title"
                                label="Task"
                                value={this.state.title}
                                onChange={this.handleTitleChange('title')}
                                margin="normal"
                                error={this.state.checkErrorname === "0"}
                                helperText={this.state.checkErrorname === "0" ? 'Empty field!' : ' '}
                            />

                            {completedButton}



                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">


                            <TextField
                                id="description"
                                label="Description"
                                multiline
                                rows="4"
                                defaultValue=""
                                margin="normal"
                                value={this.state.description}
                                onChange={this.handleDescriptionChange('description')}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Button variant="contained" size="small" color="primary" onClick={this.Update}>
                                Save
                            </Button> &nbsp;
                            <Button variant='contained' size="small" onClick={this.Cancel}>
                                Cancel
                            </Button >&nbsp;
                            <Button variant="contained" color="secondary" size="small" onClick={this.Delete} >
                                Delete
                            </Button>
                        </div>


                    </div>
                </div>
            </div>


        );
    }
}

ViewToDo.propTypes = {
    children: PropTypes.object,
    tasks: PropTypes.array
};

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}


function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(Object.assign({}, TaskActions), dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewToDo);