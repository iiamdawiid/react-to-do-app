import React from 'react'

const Signup = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password === confirmPassword) {
      const hashedPassword = passwordHash(password);

      localStorage.setItem('username', username);
      localStorage.setItem('password', hashedPassword);
    }
  }

  const passwordHash = (userPassword) => {
    const bcrypt = require('bcryptjs');

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(userPassword, salt);
    return hashedPassword;
  }

  return (
    <div>
      <h1 className='text-center mt-5'>Register</h1>
      <form onSubmit={handleSubmit} style={{maxWidth: '400px'}} className='mx-auto mt-3'>
        <div className="mb-3">
          <label for="username" className="form-label">Username</label>
          <input type="text" className="form-control border border-dark" id="username" name='username'/>
            <div id="usernameHelp" className="form-text" style={{color: 'blue'}}>We'll never share your info with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">Password</label>
          <input type="password" className="form-control border border-dark" id="password" name='password'/>
        </div>
        <div className="mb-3">
          <label for="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control border border-dark" id="confirmPassword" name='confirmPassword'/>
        </div>
        <button type="submit" className="btn btn-success border border-dark">Submit</button>
      </form>
    </div>
  )
}

export default Signup