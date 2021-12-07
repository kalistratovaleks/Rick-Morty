import styled from "styled-components";

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
export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: gray;
`;
export const EmptyCard = styled.div`
  width: 40%;
  margin: 20px 20px 0 0;
  padding: 0 10px;
`;
