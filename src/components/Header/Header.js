import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    const signOut = () =>{
        logOut()
        .then(() => {
            navigate('/');
            console.log('logout')
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">Shop</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/orders">Orders</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/about">About</NavLink>
                {
                    user?.uid 
                    ?
                    <NavLink onClick={signOut} className={({isActive}) => isActive ? 'active': undefined} to="/inventory">Logout</NavLink>
                    : 
                    <>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/signup">Signup</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to="/login">Login</NavLink>
                    </>

                }
                
            </div>
        </nav>
    );
};

export default Header;