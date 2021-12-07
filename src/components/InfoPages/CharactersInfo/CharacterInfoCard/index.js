import React from "react";
import { StyledCard } from "./styled";

export const DetailsCard = ({ name, image, gender, status, species }) => {
  return (
    <div>
      <StyledCard>
        <h1>{name}</h1>
        <img src={image} alt={name} />
        <p>Gender: {gender}</p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
      </StyledCard>
    </div>
  );
};
