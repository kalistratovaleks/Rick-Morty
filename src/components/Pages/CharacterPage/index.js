import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card } from "../../Card";
import { StyledSection, PaginationSection } from "./styled";

export const CharactersPage = () => {
  const { page } = useParams();
  const [card, setCard] = useState([]);
  console.log(page);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((json) => setCard(json.results));
  }, [page]);

  return (
    <div>
      <PaginationSection>
        {page !== "1" ? (
          <Link to={`/characters/${+page - 1}`}>Prev</Link>
        ) : null}
        <span>{page}/42</span>
        {page !== "42" ? (
          <Link to={`/characters/${+page + 1}`}>Next</Link>
        ) : null}
      </PaginationSection>
      <StyledSection>
        {card.map(({ id, name, image, species }) => (
          <Card key={id} name={name} image={image} species={species} />
        ))}
      </StyledSection>
    </div>
  );
};
