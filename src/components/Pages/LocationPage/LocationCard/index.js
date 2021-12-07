import React from "react";
import { StyledCard } from "./styled";

export const LocationCard = ({ name, type }) => {
  return (
    <StyledCard>
      <h2>{name}</h2>
      <p>{type}</p>
    </StyledCard>
  );
};
