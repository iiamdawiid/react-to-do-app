import React, { Component } from 'react'

export default class CompletedTasks extends Component {
  render() {
    return (
    <div>
        <h2 className='mt-5' style={{'textAlign': 'center', color: '#09d60f', textShadow: '2px 2px 4px #000000'}}>Completed Tasks</h2>
        <ul>
            <div className='container'>
                <div className="row justify-content-center">
                    {this.props.completedTasks.map((task, index) => (
                        <div className="card taskCard" style={{width: '18rem'}} key={index}>
                            <div className="card-body">
                                <h5 style={{'textAlign': 'center'}} className="card-title">{task.title}</h5>
                                <p style={{'textAlign': 'center'}} className="card-text">{task.desc}</p>
                                <button className='btn btn-success cardBtn mx-auto d-block'>COMPLETED</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ul>
    </div>
    )
  }
}
