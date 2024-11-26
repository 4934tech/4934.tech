import React from "react";
import "./style.css";

export const Header = () => {
    function ExpandDropdown() { // TODO: Fix this function and make it do what it's supposed to do.
        const dropdown = document.getElementsByClassName("nav-dropdown-icon")[0];
        const navList = document.getElementsByClassName("nav-list")[0];
        if (navList.style.display === "none") {
            navList.style.display = "block";
            dropdown.src = "/header/expand-less.png";
        } else {
            navList.style.display = "none";
            dropdown.src = "/header/expand-more.png";
        }
    }
  return (
    <header className={"header"}>
        <container className={"header-contents"}>
        <div className={"header-left"}>
            <div className={"header-image-container"}>
                <img onClick={
                    () => {
                        window.location.href = "/";
                    }
                } className={"header-logo"} alt={"header-logo"} src={"/logo/banner/transparent-white.png"}></img>
            </div>
            <ul className={"nav-list"}>
                <li className={"nav-item"}>
                    <a onClick={ExpandDropdown}>About</a>
                    <img className={"nav-dropdown-icon"} alt={"dropdown-icon"} src={"/header/expand-more.png"} />
                </li>
                <li className={"nav-item"}>
                    <a href={"/contact"}>Contact</a>
                </li>
            </ul>
        </div>
        <div className={"header-right"}>
        <h1>Header</h1>
        </div>
        </container>
    </header>
  );
};

export default Header;
