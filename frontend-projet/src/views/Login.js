import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import '../styles/Pages.css';
import chat from '../images/Chat.png';
import Geometries from '../images/Geometries.png'


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new URLSearchParams();
            formData.append('username', email);
            formData.append('password', password);

            const response = await axios.post('http://localhost:8000/login', formData);
            const token = response.data.token;

        } catch (error) {
            console.error('Error al iniciar sesión:', error);

            if (error.response) {
                if (error.response.status === 400) {
                    setError('Correo o contraseña incorrectos');
                }
            } else {
                setError('Error al conectar con el servidor');
            }
        }
    };


    return (
        <div className='containerPrincipal'>
            <nav className="navbar">
                <div className='logo'>
                    <img src={chat} alt='Logo' className='logo' />
                </div>
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
            <div className='container2Login'>
                <img src={Geometries} className='PhotoGeometrie' />
                <div className='containerInput'>
                    <p className='containerInputL'>Login</p>
                    <div className='Containerform'>
                        <label htmlFor="username"></label>
                        <input type="text" id="username" placeholder='Username' />
                    </div>
                    <div className='Containerform'>
                        <label htmlFor="password"></label>
                        <input type="password" id="password" placeholder='Password' />
                    </div>
                    <a className='PasswordForgot' href="/forgot-password">Forgot password?</a>
                    <div>
                        <Link Link to="/chat" className='BoutonL'>Login</Link>
                    </div>
                    <div>
                        <p className='HaveAccount'>Don't have an account? <a className='SignUPL' href="/SignUp">Sign up</a></p>
                    </div>
                </div>

            </div>
            <div>
                <footer className="footerLogin">
                    <p>Team: Claire Daba Diop, Kattia Martinez</p>
                </footer>
            </div>
        </div>


    );
};

export default Login;