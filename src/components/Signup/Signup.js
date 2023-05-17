import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
const Signup = () => {
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const { signupWithEmailPassword } = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        if(email === ''){
            setError('email cannot be empty');
            return;
        }
        if(password.length < 6){
            setError('password must be 6 character');
            return;
        }

        if(password !== confirm){
            setError('Your password did not match');
            return;
        }

        signupWithEmailPassword(email, password)
        .then(result =>{
            setUser(result.user)
            form.reset();
        })

        .catch(error =>{
            setError(error.message);
        })

    }
    return (
        <div className='form-container'>
            <h1 className='form-title'>Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" name="confirm"/>
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="signup" />
            </form>
            <p className='create-account'>Already have an account? <Link to='/login' className='msg'>login</Link> </p>
        </div>
    );
};

export default Signup;