import { useState } from 'react';
import { auth } from '../../firebase';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const Register = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    sendSignInLinkToEmail(auth, email, config)
      .then(() => {
        toast.success(
          `Email is sent to ${email}.Click the link to complete your registration.`
        );
        window.localStorage.setItem('emailForRegistration', email);
        setEmail('');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        className='form-control'
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
