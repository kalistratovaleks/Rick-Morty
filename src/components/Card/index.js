import React from "react";
import { Link } from "react-router-dom";
import {
  StyledCard,
  StyledCardSection,
  CardInformation,
  AboutSpan,
} from "./styled";

export const Card = ({ id, name, image, species }) => {
  return (
    <StyledCard>
      <h3>{name}</h3>
      <StyledCardSection>
        <img src={image} alt={name} />
        <CardInformation>
          <p>{species}</p>
          <Link to={`/characterInfo/${id}`}>
            <AboutSpan>About</AboutSpan> {name}
          </Link>
        </CardInformation>
      </StyledCardSection>
    </StyledCard>
  );
};
