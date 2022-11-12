import React from "react";
import { StyledFavorites } from "./favorites-styles";

const Favorites = (props) => {
  const {favorites} = props;

  return (
    <StyledFavorites>
    <h2 className="favorites__title">Favorites Profiles</h2>
      <div className="favorites-wrapper">
      {favorites.map((Favorite, index) => {
        return (
          <div className="favorite" key={index} >
                  <a href={Favorite.url} className="favorite__profile" >
                    <img src={Favorite.thumb} alt="" className="profile__image" />
                    <span className="profile__name">@{Favorite.title}</span>
                  </a>
          </div>
        );
      })}
      
      </div>
    </StyledFavorites>
  );
};

export default Favorites;