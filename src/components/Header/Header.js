import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className={({ isActive }) => isActive ? "active" : undefined} to="/">Shop</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/orders">Orders</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({isActive}) => isActive ? 'active': undefined} to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;