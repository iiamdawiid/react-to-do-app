import React, { Component } from 'react';


export default class CreateTask extends Component {
    constructor() {
        super();
        // this.state = {
        //     arrayOfTasks: []
        // }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.storeTaskInfo} id='to-do-form'>
                    <h2 className='mt-5' style={{'textAlign': 'center', color: 'white', textShadow: '2px 2px 4px #000000'}}>Create Task</h2>
                    <input className='mt-3' placeholder='Enter title' name='title' />
                    <input className='mt-3' placeholder='Enter description' name='description' />
                    <button className='mt-3 btn btn-success' type="submit">Submit</button>
                </form>
                
                <div>
                    <h2 className='mt-5' style={{textAlign: 'center', color: 'white', textShadow: '2px 2px 4px #ffc800'}}>Pending Tasks</h2>
                    <ul>
                        <div className='container'>
                            <div className="row justify-content-center">
                                {this.props.arrayOfTasks.map((task, index) => (
                                    <div className="card taskCard" style={{width: '18rem'}} key={index}>
                                        <div className="card-body">
                                            <h5 style={{'textAlign': 'center'}} className="card-title">{task.title}</h5>
                                            <p style={{'textAlign': 'center'}} className="card-text">{task.desc}</p>
                                            <button className='btn btn-success cardBtn' onClick={() => this.props.storeCompletedTask(index)}>Complete</button>
                                            <button className='btn btn-danger cardBtn' onClick={() => this.props.deleteTaskInfo(index)}>Delete Task</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
