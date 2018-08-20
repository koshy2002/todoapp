import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as TaskActions from '../actions/TaskActions';

class AddNewToDo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            taskCard: '',
            checkError: '1'
        };
        this.Add = this.Add.bind(this);
    }

    componentWillMount() {

    }
    Add() {
        if (this.state.name !== '') {
            let savePromise = this.props.actions.createTask({ "title": this.state.name });
            savePromise.then((response) => {
                if (this.props.tasks.length > 0) {

                }
                this.setState({ name: '' });
            });

        }
        else {
            this.setState({ checkErrorname: "0" });
        }

        this.setState({ name: '' });
    }

    handleChange = name => event => {
        this.setState({ checkErrorname: "1" });
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        return (
            <div className="AddToDoTask">

                <div>
                    <TextField
                        required
                        id="name"
                        label="TO-DO Title"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        error={this.state.checkErrorname === "0"}
                        helperText={this.state.checkErrorname === "0" ? 'Empty field!' : ' '}
                    />
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={this.Add}>
                        Add new To-Do
                </Button>
                </div>

            </div>
        );
    }
}

AddNewToDo.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewToDo);