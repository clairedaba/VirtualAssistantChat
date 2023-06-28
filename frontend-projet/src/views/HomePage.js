import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';
import pictureHome from '../images/pictureHome.svg';
import chat from '../images/Chat.png';

function HomePage() {
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
            <div className='container2'>
                <img src={pictureHome} className='PictureHome1' alt="Home" />
                <div className='Ecritures'>
                    <p>MathBot</p>
                    <p>Your Personal Math Problem Solver!</p>
                    <Link Link to="/Login" className="BoutonHome">
                        Start
                    </Link>
                </div>

            </div>
            <div>
                <footer className="footer">
                    <p>Team: Claire Daba Diop, Kattia Martinez</p>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;
