import styled from "styled-components";
import config from "../../../config.json";

export const StyledHeader = styled.div`

  background-color: ${({theme}) => theme.backgroundLevel1};
  color: ${({theme}) => theme.backgroundLevel1};
  width: 100%;
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    color: ${({theme}) => theme.textColorBase};
  }

  img {
    width: 80px;
    border-radius: 50%;
  }

  .user__data {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    margin-left: 150px;
  }
`;

export const StyledBanner = styled.div`
  background-color: blue;
  background: url(${({ bg }) => bg});
  /* background-image: url(${config.bg}); *//*Forma alternativa de carregar o banner vindo do config.json */ 
  background-size: contain ;
  height: 230px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-left: 150px;
  }
`;
