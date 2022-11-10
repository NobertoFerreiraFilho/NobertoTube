import react from "react";
//components
import Logo from "./logo";
//Styles
import { StyledMenu } from './menu-styles'

const Menu = () => {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
    </StyledMenu>
  );

  /*     <div>
      <img src="" alt="" className="header__img" />
      <div className="header__logo">
        <p className="header__name">Noberto</p>
        <span className="header__name-destaque">Tube</span>
      </div>
      <div className="header__search">
        <input type="text" className="search__input" />
        <img src="" alt="" className="search__logo" />
      </div>
    </div> */
};

export default Menu;
