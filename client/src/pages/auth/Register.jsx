import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {};

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        class='form-control'
        placeholder='Enter your email ...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
      />

      <button type='submit' className='btn btn-info mt-2 float-end'>
        Register
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register</h4>
          <br />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
