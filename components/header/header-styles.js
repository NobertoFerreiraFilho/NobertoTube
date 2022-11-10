import styled from "styled-components";

export const StyledHeader = styled.div`
  .banner {
    position: absolute;
    width: 1512px;
    height: 230px;
    left: 0px;
    top: 55px;
    background: url(https://github.com/NobertoFerreiraFilho/NobertoTube/blob/main/img/banner.jpg);
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }

  img {
    width: 80px;
    border-radius: 50%;
  }

  .user__data {
    display: flex;
    flex-direction: column;
  }
`;
