import React from "react";
import { StyledCard, StyledCardSection, CardInformation } from "./styled";

export const Card = ({ name, image, species }) => {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <StyledCardSection>
        <img src={image} alt={name} />
        <CardInformation>
          <p>{species}</p>
        </CardInformation>
      </StyledCardSection>
    </StyledCard>
  );
};
