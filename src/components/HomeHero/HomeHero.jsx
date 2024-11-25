import React from "react";
import akarIconsArrowRight from "../../../public/homehero/akar-icons-arrow-right.svg";
import image3 from "../../../public/homehero/image-3.png";
import line2 from "../../../public/homehero/line-2.svg";
import "./style.css";

export const HomeHero = () => {
  return (
      <div className="home-hero">
        <img className="image" alt="Image" src={image3} />

        <div className="frame">
          <div className="div">
            <div className="text-wrapper">We are</div>

            <p className="element">
              <span className="span">4934</span>

              <span className="text-wrapper-2">.</span>
            </p>
          </div>

          <p className="a-team-of-carefully">
            A team of carefully crafted nerds &amp; enthusiasts who love tech!
            From hardware to software, our ambition love for technology is
            unmatched. :)
          </p>

          <img className="line" alt="Line" src={line2} />

          <div className="group">
            <div className="group-2">
              <div className="text-wrapper-3">Projects</div>

              <img
                  className="akar-icons-arrow"
                  alt="Akar icons arrow"
                  src={akarIconsArrowRight}
              />
            </div>
          </div>
        </div>
      </div>
  );
};
