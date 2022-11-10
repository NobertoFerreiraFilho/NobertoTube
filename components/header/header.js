import react from "react";
//config
import config from "../../config.json";

//Styles
import { StyledHeader } from "./header-styles";



const Header = () => {
  return (
    <StyledHeader>
      <div className="banner"/>
      <div className="user-info">
        <img
          src={`https://github.com/${config.github}.png`}
          alt="User photo"
          className="user__photo"
        />
        <div className="user__data">
          <h2 className="user__name">{config.name}</h2>
          <p className="user__job">{config.job}</p>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
