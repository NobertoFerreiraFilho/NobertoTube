import styled from "styled-components";

export const StyledHeader = styled.div`
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
 export const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    /* background-image: url(${config.bg}); */
    height: 230px;
`;
