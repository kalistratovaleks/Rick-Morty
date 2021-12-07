import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: gray;
`;
export const PaginationSection = styled.div`
  text-align: center;
  background-color: gray;
  & > a {
    color: green;
    font-weight: bold;
    font-size: 18px;
  }
  & > a:hover {
    color: yellow;
  }
  & > span {
    font-size: 24px;
    font-weight: bold;
    margin: 0 20px;
  }
`;
