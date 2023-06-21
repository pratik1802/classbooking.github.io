import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [userType, setUserType] = useState('');

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleLogin = () => {
    if (userType !== '') {
      onLogin(userType);
    }
  };

  return (
    <div className='container'>
      <h1 className='text-center mt-5' >Login</h1>
      <div className='d-flex justify-content-center mt-5'>
      <select value={userType} onChange={handleUserTypeChange}>
        <option value="">Select User Type</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <button className='btn btn-primary ms-3' onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
