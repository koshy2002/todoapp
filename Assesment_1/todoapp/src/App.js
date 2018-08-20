import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AddNewToDo from './AddNewToDo';
import TaskCard from './TaskCard';
import Main from './Main';

class App extends Component {


  render() {
    return (
      <Main></Main>
    );
  }
}

export default App;
