import styled from "styled-components";

export const StyledSideBar = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 150px;
  padding: 0 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: none;
  z-index: 200;
  .side__item {
    list-style: none;
    height: 4rem;
    text-align: center;

  }

  .item__link,
  .item__name{
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

  }

  .item__link:active{
    text-decoration: none;
  }

  .logo {
    width: 100%;
    margin: 0 0.3rem 1rem;
    padding: 1rem 0rem 2rem;
    @media (min-width: 600px) {
      max-width: 127px;
    }

    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;
