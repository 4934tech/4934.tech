import React from 'react';
import './Header.css';
import logo from '../assets/logo/transparent-white.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="header-logo">
                    <img className={"logo-box"} src={logo} alt="Logo"/>
                </div>
                <div className="nav-right">
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <button><i className="fa fa-search"></i></button>
                    </div>
                    <ul className="auth-links">
                        <li><a href="#">LOGIN</a></li>
                        <li><a href="#">REGISTER</a></li>
                        <li><a href="#">LANGUAGE</a></li>
                    </ul>
                </div>
            </div>
            <div className="header-bottom">
                <nav className="nav">
                    <div className="nav-left">
                        <button className="nav-button home-button">
                            <i className="fa fa-home"></i>
                        </button>
                        <ul className="nav-links">
                            <li className="nav-item">
                                <a href="#">Products</a>
                                <div className="dropdown">Dropdown Content Here</div>
                            </li>
                            <li className="nav-item">
                                <a href="#">Labels</a>
                                <div className="dropdown">Dropdown Content Here</div>
                            </li>
                            <li className="nav-item">
                                <a href="#">News</a>
                                <div className="dropdown">Dropdown Content Here</div>
                            </li>
                            <li className="nav-item">
                                <a href="#">Our Companies</a>
                                <div className="dropdown">Dropdown Content Here</div>
                            </li>
                            <li className="nav-item">
                                <a href="#">Online Services</a>
                                <div className="dropdown">Dropdown Content Here</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
);
};

export default Header;
