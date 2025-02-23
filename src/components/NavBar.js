import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/items">Items</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
);

export default NavBar;


