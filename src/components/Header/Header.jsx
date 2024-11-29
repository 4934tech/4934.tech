import { useState } from "react";
import "./style.css";
import { NavLink, redirect} from "react-router-dom";

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
                        onClick={() => redirect("/")}
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
                                    <li className="dropdown-item"><NavLink to="/about/company">Company</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/about/team">Team</NavLink></li>
                                    <li className="dropdown-item"><NavLink to="/about/careers">Careers</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/hackathon">Hackathons</NavLink>
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
