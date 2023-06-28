import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import '../styles/Pages.css';
import chat from '../images/Chat.png';




const SignUp = () => {
    return (
        <div className='containerPrincipal'>
            <nav className="navbar">
                <img src={chat} alt='Logo' className='logo' />
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/team" className="nav-link">Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/support" className="nav-link">Support</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className='container2SignUp'>
                <p className='SignUp'>Sign up</p>
                <div className='Alignform'>
                    <div className='ContainerformSign'>
                        <label htmlFor='Username'></label>
                        <input type='text' id='Username' placeholder='Username' />
                    </div>
                    <div className='ContainerformSign'>
                        <label htmlFor='Email'></label>
                        <input type='text' id='Email' placeholder='Email' />
                    </div>
                </div>
                <div className='ContainerformSign'>
                    <label htmlFor='password'></label>
                    <input type='text' id='password' placeholder='Password' />
                </div>

                <button className='BoutonS'>Sign up</button>
                <div>
                    <p className='AlreadyAccount'>Already have an account? <a className='SignUPs' href="/Login">Login</a></p>
                </div>
            </div>



            <div>
                <footer className="footerLogin">
                    <p>Team: Claire Daba Diop, Kattia Martinez</p>
                </footer>
            </div>


        </div >

    );
};

export default SignUp;