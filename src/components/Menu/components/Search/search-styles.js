import styled from "styled-components"

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  
  input::placeholder{
    padding: 0rem 0rem;
  }

  input {
    width: 80%;
    padding: 0.3rem 1rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 10px;
    height: 35px;
    @media (min-width: 600px) {
      width: 44px;
      height: 35px;
    }
  }
`;