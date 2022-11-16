import React, { useState, useEffect } from "react";
import Logo from "../logo";
import { StyledSideBar } from "./SideBar-styles";

const SideBar = (props) => {
  /*   const [toggleSideBar, setToggleSideBar] = useState(false); */
  const [screenWidth, setScreenWidth] = useState();

  /*   const toggleMenu = () => {
    setToggleSideBar(!toggleSideBar);
  }; */

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <>
      {screenWidth > 768 && (
        <StyledSideBar>
          <Logo />
          <ul className="side__list">
            <li className="side__item">
              <a href="/index.js" className="item__link">
                <img src="image.png" alt="" className="item__logo" />
                <span className="item__name">Início</span>
              </a>
            </li>
            <li className="side__item">
              <a href="#" className="item__link">
                <img src="" alt="" className="item__logo" />
                <span className="item__name">Biblioteca</span>
              </a>
            </li>
            <li className="side__item">
              <a
                href="https://github.com/NobertoFerreiraFilho/NobertoTube"
                className="item__link"
                target={"_blank"}
              >
                <img src="" alt="" className="item__logo" />
                <span className="item__name">GITHUB</span>
              </a>
            </li>
          </ul>
        </StyledSideBar>
      )}
    </>
  );
};

export default SideBar;
