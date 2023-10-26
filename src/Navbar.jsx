import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" style={{ color: 'rgb(33, 217, 9)' }} to='/'>
                        TODOApp
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="d-flex">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link nav-home" aria-current="page" to='/'>
                                        Home
                                    </Link>
                                </li>
                            </ul>
                            {localStorage.getItem(`${localStorage.getItem('username')} token`) ? (
                                <>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link nav-create-task" to='/create_task'>
                                                Create Task
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav-comp-task" to='/completed_tasks'>
                                                Completed Tasks
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link onClick={this.props.logOut} className="nav-link nav-comp-task" to='/'>
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item">
                                            <Link className="nav-link nav-comp-task" to='/register'>
                                                Register
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link nav-comp-task" to='/login'>
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
