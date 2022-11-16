import react from "react";
//components
import Logo from "../logo";
import DarkModeSwitch from "./components/ModeSwitch/DarkModeSwitch";
import Search from "./components/Search/search";
//Styles
import { StyledMenu } from "./menu-styles";

const Menu = ({ valorDoFiltro, setValorDoFiltro }) => {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search
        valorDoFiltro={valorDoFiltro}
        setValorDoFiltro={setValorDoFiltro}
      />
      <DarkModeSwitch />
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
