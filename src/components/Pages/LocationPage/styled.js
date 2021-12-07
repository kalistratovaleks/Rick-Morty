import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
export const EmptyCard = styled.div`
  width: 300px;
  margin-top: 15px;
  padding: 15px;
`;
