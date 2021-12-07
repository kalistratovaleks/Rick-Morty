import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, LinkSection } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      Rick & Morty
      <LinkSection>
        <Link to={`/characters/1`}>Characters</Link>
        <Link to={`/location/1`}>Locations</Link>
        <Link to={`/episode/1`}>Episodes</Link>
      </LinkSection>
    </StyledHeader>
  );
};
