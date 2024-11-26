import React, { useState } from "react";
import "./style.css";

export const Header = () => {
    const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownExpanded(prev => !prev);
    };

    return (
        <header className="header">
            <div className="header-contents">
                <div className="header-left">
                    <img
                        onClick={() => window.location.href = "/"}
                        className="header-logo"
                        alt="Company Logo"
                        src="/logo/banner/transparent-white.png"
                    />
                    <ul className="nav-list">
                        <li className="nav-item">
                            <button className="nav-link" onClick={toggleDropdown}>
                                About
                                <img
                                    className={`nav-dropdown-icon ${isDropdownExpanded ? 'rotate' : ''}`}
                                    alt="dropdown-icon"
                                    src="/icons/angle-down.svg"
                                />
                            </button>
                            <div className={`dropdown-menu ${isDropdownExpanded ? 'visible' : ''}`}>
                                <ul className="dropdown-content">
                                    <li className="dropdown-item"><a href="/about/company">Company</a></li>
                                    <li className="dropdown-item"><a href="/about/team">Team</a></li>
                                    <li className="dropdown-item"><a href="/about/careers">Careers</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="header-right">
                    <button className="btn btn-primary">Sign In</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
