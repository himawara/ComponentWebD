import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div>
                <Link to="/home">Home</Link>
                <br />
                <Link to="/contact">Contact</Link>
                <br />
                <Link to="/about">About</Link>
            </div>
        </>
    );
}

export default Navbar;
