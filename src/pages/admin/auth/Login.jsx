import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import styles from './style.module.css';

const Login = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='from-Wrapper'>
      <div className={styles.formContent}>
        <div className='col-sm-6 offset-sm-3'>

          <h3 className={styles.heading}>Login Form</h3>

          <form onSubmit={handleLogin}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password' />
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;