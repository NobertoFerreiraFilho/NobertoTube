import styled from "styled-components";
import config from "../../config.json";

export const StyledFavorites = styled.div`
  
  margin: 0 1rem 22px;

  .favorites__title {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #000000;
    margin: 0 0 1rem;
  }

  .favorites-wrapper {
    display: flex;
    gap: 0.5rem;
  }

  .favorite__profile {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  img {
    border-radius: 50%;
    width: 100px;
  }

  .profile__name {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;
