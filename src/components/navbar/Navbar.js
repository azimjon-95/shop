import React, { useState } from 'react';
import './style.css';
import Login from '../login/Login';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openlogin, setOpenlogin] = useState(false)

    const switchSave = () => {
        setOpenlogin(false)
    }
    return (
        <div className='Navbar'>
            <h1>Logo</h1>

            <div className="btn-right">
                <button className='btn'>Home</button>

                <Link to="/about">
                    <button className='btn'>About</button>
                </Link>

                <button className='btn'>Contact</button>
                <button onClick={() => setOpenlogin(true)} className='SignIn'>SignIn</button>
            </div>

            {openlogin && <Login  onClose={switchSave} />}

        </div>
    );
};

export default Navbar;