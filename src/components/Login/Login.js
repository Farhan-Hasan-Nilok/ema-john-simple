import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../context/UserContext';
const Login = () => {
    const {logIn} = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location  = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (email === '') {
            setError('email cannot be empty');
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character');
            return;
        }

        logIn(email, password)
            .then(result => {
                console.log(result);
                setUser(result.user);
                navigate(from, {replace: true})
                form.reset();
            })

            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Log in</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p className='create-account'>New to ema-john <Link to='/signup' className='msg'>create a new account</Link> </p>
        </div>
    );
};

export default Login;