import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const EmphasizedBlock = ({
                                    className,
                                    overlapClassName,
                                    rectangleClassName,
                                    groupClassName,
                                    text = "Hop in!",
                                    akarIconsArrow = "akar-icons-arrow-right.svg",
                                    text1 = "Sign up with your email",
                                    elementClassName,
                                    element = "7.png",
                                }) => {
    return (
        <div className={`emphasized-block ${className}`}>
            <div className={`overlap ${overlapClassName}`}>
                <div className={`rectangle ${rectangleClassName}`} />

                <div className={`group ${groupClassName}`}>
                    <p className="want-to-contribute">
            <span className="text-wrapper">
              Want to contribute?
              <br />
            </span>

                        <span className="span">Join us!</span>
                    </p>

                    <div className="div">
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <div className="hop-in">{text}</div>

                                <img
                                    className="akar-icons-arrow"
                                    alt="Akar icons arrow"
                                    src={akarIconsArrow}
                                />
                            </div>
                        </div>

                        <div className="frame">
                            <div className="sign-up-with-your-wrapper">
                                <p className="sign-up-with-your">{text1}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className={`element ${elementClassName}`}
                    alt="Element"
                    src={element}
                />
            </div>
        </div>
    );
};

EmphasizedBlock.propTypes = {
    text: PropTypes.string,
    akarIconsArrow: PropTypes.string,
    text1: PropTypes.string,
    element: PropTypes.string,
};
