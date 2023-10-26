import React from 'react'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsername = localStorage.getItem('username');
        const storedHashedPassword = localStorage.getItem('password');

        const loginUsername = e.target.username.value;
        const loginPassword = e.target.password.value;

        const bcrypt = require('bcryptjs');
        const isPasswordValid = bcrypt.compareSync(loginPassword, storedHashedPassword);

        if (storedUsername === loginUsername && isPasswordValid) {
            const userToken = getToken(32);
            localStorage.setItem(`${localStorage.getItem('username')} token`, userToken)
            window.location.reload();
        }
    }

    const getToken = (length) => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
        return token;
    }

    return (
        <div>
            {localStorage.getItem(`${localStorage.getItem('username')} token`) ? (
                <div>
                    <p id='login-success'>Login successful!</p>
                    <h1 className='text-center mt-5'>Login</h1>
                    <form onSubmit={handleLogin} style={{ maxWidth: '400px' }} className='mx-auto mt-3'>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control border border-dark" id="username" name='username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control border border-dark" id="password" name='password' />
                        </div>
                        <button type="submit" className="btn btn-success border border-dark">Submit</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h1 className='text-center mt-5'>Login</h1>
                    <form onSubmit={handleLogin} style={{ maxWidth: '400px' }} className='mx-auto mt-3'>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control border border-dark" id="username" name='username' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control border border-dark" id="password" name='password' />
                        </div>
                        <button type="submit" className="btn btn-success border border-dark">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Login