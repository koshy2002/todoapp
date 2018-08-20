import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class AddNewToDo extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            taskCard: '',
            checkError :'1'
        };
    }

    componentWillMount() {

    }
    handleAddTask = () => {
        if (this.state.name != '') {
            this.props.onAddTask(this.state.name);
        }
        else {
            this.setState({checkErrorname:"0"});
           // alert('Title is mandatory');
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
                        label="TO-DO:"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        error={this.state.checkErrorname === "0"}
                        helperText={this.state.checkErrorname === "0" ? 'Empty field!' : ' '}
                            />
                </div>
                <div>
                        <Button variant="contained" color="primary" onClick={this.handleAddTask}>
                            Add new To-Do
                </Button>
                    </div>

                </div>
                );
            }
        }
        
export default AddNewToDo;