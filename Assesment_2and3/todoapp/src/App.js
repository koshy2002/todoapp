import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import ViewToDo from './components/ViewToDo'

class App extends Component {


  render() {
    return (
      <div>
        <switch>
        <Route path="/view/:taskID" component={ViewToDo} />
        <Route path="/" exact component={Main} />
        </switch>
      </div>
    );
  }
}

export default App;
