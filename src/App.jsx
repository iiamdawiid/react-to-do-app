import React, { Component } from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import CreateTask from './CreateTask';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arrayOfTasks: []
    }
  }

  storeTaskInfo = (e) => {
    e.preventDefault();
    const taskTitle = e.target.title.value;
    const taskDesc = e.target.description.value;
    console.log(taskTitle, taskDesc);

    const newTask = {
        title: taskTitle,
        desc: taskDesc
    };

    this.setState({
        arrayOfTasks: [...this.state.arrayOfTasks, newTask]
    });

    //clear input fields
    e.target.title.value = '';
    e.target.description.value = '';
  }

  deleteTaskInfo = (index) => {
    const tasks = [...this.state.arrayOfTasks];

    tasks.splice(index, 1)

    this.setState({arrayOfTasks: tasks})
  }

  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create_task' element={<CreateTask arrayOfTasks={this.state.arrayOfTasks} storeTaskInfo={this.storeTaskInfo} deleteTaskInfo={this.deleteTaskInfo} />} />
        </Routes>
        
        
      </div>
    )
  }
}
