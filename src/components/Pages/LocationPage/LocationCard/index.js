import React from "react";
import { StyledCard } from "./styled";

export const LocationCard = ({ name, type, dimension }) => {
  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>{type}</p>
      <h4>dimension:{dimension}</h4>
    </StyledCard>
  );
};
