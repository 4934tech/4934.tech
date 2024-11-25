import React from "react";
import "./style.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="link">
        <div className="logo" />

        <div className="product">
          <div className="text-wrapper">Projects</div>

          <img
            className="expand-more"
            alt="Expand more"
            src="/header/expand-more.png"
          />
        </div>

        <div className="div-wrapper">
          <div className="div">Team</div>
        </div>

        <div className="div-wrapper">
          <div className="div">Licensing</div>
        </div>

        <div className="div-2">
          <div className="text-wrapper">Solutions</div>

          <img
            className="expand-more"
            alt="Expand more"
            src="/header/expand-more-1.png"
          />
        </div>

        <div className="div-2">
          <div className="div">Reach Out</div>
        </div>

        <div className="pricing">
          <div className="text-wrapper">Socials</div>

          <img
            className="expand-more"
            alt="Expand more"
            src="/header/expand-more-2.png"
          />
        </div>
      </div>

      <div className="frame">
        <div className="search-bar">
          <div className="frame-2">
            <div className="text-wrapper-2">Search</div>

            <div className="code-icon">
              <img className="line" alt="Line" src="/header/line-1-1.svg" />
            </div>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="text-wrapper-3">Sign in</div>
        </div>

        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-4">Join Us</div>

            <div className="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
