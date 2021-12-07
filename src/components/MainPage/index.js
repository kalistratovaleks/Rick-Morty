import React from "react";
import { Link } from "react-router-dom";
import { StyledSection, MenuDiv } from "./styled";

export const MainPage = () => {
  return (
    <div>
      <StyledSection>
        <Link to={`/characters/1`}>
          <MenuDiv>
            <img
              src="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/02/Rick-And-Morty-Characters-Cropped.jpg"
              alt="characters"
            />
            <h2>CHARACTERS</h2>
          </MenuDiv>
        </Link>
        <Link to={`/location/1`}>
          <MenuDiv>
            <img
              src="https://i.ytimg.com/vi/-Z3yNCYgWr0/maxresdefault.jpg"
              alt="locations"
            />
            <h2>LOCATIONS</h2>
          </MenuDiv>
        </Link>
        <Link to={`/episode/1`}>
          <MenuDiv>
            <img
              src="https://assets3.thrillist.com/v1/image/1874782/1584x870/scale;webp=auto;jpeg_quality=60;progressive.jpg"
              alt="episodes"
            />
            <h2>EPISODES</h2>
          </MenuDiv>
        </Link>
      </StyledSection>
    </div>
  );
};
