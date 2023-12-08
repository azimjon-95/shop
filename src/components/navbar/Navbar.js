import React, { useState } from 'react';
import Login from '../login/Login';
// import { Link } from 'react-router-dom';
import ali from './svgs/ali.svg'
import svg_1 from './svgs/1.svg'
import svg_2 from './svgs/2.svg'
import svg_3 from './svgs/3.svg'
import svg_4 from './svgs/4.svg'
import './style.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openlogin, setOpenlogin] = useState(false)
    return (
        <div className='Navbar'>
            {/* <h1>Logo</h1>

            <div className="btn-right">
                <button className='btn'>Home</button>

                <Link to="/about">
                    <button className='btn'>About</button>
                </Link>

                <button className='btn'>Contact</button>
                <button onClick={() => setOpenlogin(true)} className='SignIn'>SignIn</button>
            </div> */}

<div class="container1">
               <div class="navbar">
                    {/* <img src={ali} class="ali_svg"/> */}
                    <h1 className='ali_svg'>SHOPSITe</h1>
                    <ul class="navbar_ul">
                         <li class="navbar_li">
                              <a href="#">
                                   <img src={svg_4} class="svg_1"/>
                                   <h3 class="svg_h3">Katalog</h3>
                              </a>
                         </li>
                         <li class="abcd">
                              <a href="#">
                                   <input type="text" class="hasbro" placeholder="hasbro" onclick="hasbro()"/>
                                   <button class="search">Search</button>
                              </a>
                              <div class="div">
                                   <ul class="div_ul">
                                        <li>krutka</li>
                                        <li>zakazi</li>
                                        <li>krushka</li>
                                   </ul>
                              </div>
                         </li>
                         <li class="navbar_li">
                              <a href="#">
                                   <img src={svg_1} class="svg_1"/>
                                   <h3 class="svg_h3">Zakazi</h3>
                              </a>
                         </li>
                         <li class="navbar_li">
                              <a href="#">
                                   <img src={svg_2} class="svg_1" onclick=" korzinka()"/>
                                   <h3 class="svg_h3" onclick=" korzinka()">Korzinka</h3>
                              </a>
                         </li>
                         <li class="navbar_li">
                              <a href="#">
                                   <img src={svg_3} class="svg_1"/>
                                   <h3 class="svg_h3">Voyti</h3>
                              </a>
                         </li>
                         <li>
                              <button onClick={() => setOpenlogin(true)} className='SignIn'>Sign Up</button>
                         </li>
                    </ul>
               </div>
          </div>

            {openlogin && <Login />}

        </div>
    );
};

export default Navbar;