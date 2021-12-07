import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: black;
  color: limegreen;
  text-align: center;
  padding: 10px 0;
  font-size: 30px;
  font-weight: bold;
`;
export const LinkSection = styled.div`
  font-size: 16px;
  & > a {
    color: green;
    margin-right: 15px;
  }
  & > a:hover {
    color: yellow;
  }
`;
