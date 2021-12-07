import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { StyledSection, PaginationSection } from "./styled";
import { LocationCard } from "./LocationCard";

export const LocationPage = () => {
  const { page } = useParams();
  const [location, setLocation] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${page}`)
      .then((res) => res.json())
      .then((json) => setLocation(json.results));
  }, [page]);
  return (
    <div>
      <PaginationSection>
        {page !== "1" ? <Link to={`/location/${+page - 1}`}>Prev</Link> : null}
        <span>{page}/42</span>
        {page !== "42" ? <Link to={`/location/${+page + 1}`}>Next</Link> : null}
      </PaginationSection>
      <StyledSection>
        {location.map(({ id, name, type }) => (
          <LocationCard key={id} name={name} type={type} />
        ))}
      </StyledSection>
    </div>
  );
};
