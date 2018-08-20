import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

class TaskCard extends Component {


    handleCompleteTask = () => {
        this.props.onCompleteTask(this.props.taskList.id);
    }

    handleDeleteTask = () => {
        this.props.onDeleteTask(this.props.taskList.id);
    }



    render() {

        if (this.props.taskList.completed == "1") {
            return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12" style={{ "margin": "5px", "padding": "5px" }}>
                        <Card >
                            < CardContent >
                                <div className="row">
                                    <div className="col-lg-6  col-md-6  col-sm-12">
                                        <strike>  {this.props.taskList.title}  </strike>
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12" >
                                        <Button variant='contained' onClick={this.handleCompleteTask} disabled>
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
                                        {this.props.taskList.title}
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

export default TaskCard;
