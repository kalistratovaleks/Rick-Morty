import React from "react";
import { StyledCard } from "./styled";

export const EpisodeCard = ({ id, name, air_date }) => {
  return (
    <StyledCard>
      <h1>#{id}</h1>
      <h2>{name}</h2>
      <p>{air_date}</p>
    </StyledCard>
  );
};
