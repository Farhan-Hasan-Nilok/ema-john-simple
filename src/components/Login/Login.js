import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log in</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='create-account'>New to ema-john <Link to='/signup' className='msg'>create a new account</Link> </p>
        </div>
    );
};

export default Login;