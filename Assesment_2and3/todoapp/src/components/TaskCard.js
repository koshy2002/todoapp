import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';
import ViewToDo from './ViewToDo';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import * as TaskActions from '../actions/TaskActions';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

class TaskCard extends Component {


    handleCompleteTask = () => {
        let savePromise = this.props.actions.completeTask(this.props.taskList.id);
        savePromise.then((response) => {
            if (this.props.tasks.length > 0) {
                console.log('Completed---');
            }
        });
    }

    handleDeleteTask = () => {
        let savePromise = this.props.actions.deleteTask(this.props.taskList.id);
        savePromise.then((response) => {
            if (this.props.tasks.length > 0) {
                console.log('deleted---');
            }
        });
    }



    render() {

        if (this.props.taskList.completed) {
            return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" style={{ "margin": "5px", "padding": "5px" }}>
                        <Card >
                            < CardContent >
                                <div className="row">
                                    <div className="col-lg-6  col-md-6  col-sm-12">
                                        <strike> <Link to={{ pathname: "/view/" + this.props.taskList.id }}> {this.props.taskList.title} </Link> </strike>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12" >
                                        <Button variant='contained' onClick={this.handleCompleteTask} disabled>
                                            Complete
                                        </Button >
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12" >

                                        <Tooltip title="Delete">
                                            <IconButton aria-label="Delete" onClick={this.handleDeleteTask}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>


                                </div>
                            </CardContent >
                        </Card >
                    </div>

                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" style={{ "margin": "5px", "padding": "5px" }}>
                        <Card >
                            < CardContent >
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <Link to={{ pathname: "/view/" + this.props.taskList.id }}> {this.props.taskList.title} </Link>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <Button variant='contained' onClick={this.handleCompleteTask}>
                                            Complete
                                        </Button >
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12">
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="Delete" onClick={this.handleDeleteTask}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>

                                    </div>

                                </div>
                            </CardContent >
                        </Card >
                    </div>
                </div>
            );
        }

    }
}


TaskCard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskCard);
