import styled from "styled-components";

export const StyledSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: gray;
  padding: 11% 0;
`;

export const MenuDiv = styled.div`
  width: 350px;
  height: 350px;
  background-color: black;
  border-radius: 15px;
  text-align: center;
  & > img {
    width: 100%;
    height: 250px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
  & > h2 {
    color: limegreen;
  }
`;
