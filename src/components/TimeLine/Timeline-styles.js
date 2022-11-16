import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 1rem;
  overflow: hidden;

  .playlist__name {
    font-size: 16px;
    margin-bottom: 16px;
    padding-left: 1rem ;
    text-transform: capitalize;
    font-weight: bold;
    align-self: flex-start;

  }
  .video__image {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
    border-radius: 10px;
  }
  .playlist {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    padding: 0 0 2rem;
    
    div {
      width: calc(100vw);
      display: grid;
      grid-column-gap: 8px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 0.5rem;
          display: block;
          padding-right: 1rem;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-left: 150px;
  }
`;