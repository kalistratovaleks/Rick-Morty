import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { EpisodeCard } from "./EpisodeCard/";
import { PaginationSection } from "./styled";

export const EpisodePage = () => {
  const { page } = useParams();
  const [episode, setEpisode] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`)
      .then((res) => res.json())
      .then((json) => setEpisode(json.results));
  }, [page]);
  return (
    <div>
      <PaginationSection>
        {page !== "1" ? <Link to={`/episode/${+page - 1}`}>Prev</Link> : null}
        <span>{page}/42</span>
        {page !== "42" ? <Link to={`/episode/${+page + 1}`}>Next</Link> : null}
      </PaginationSection>
      {episode.map(({ id, name, air_date }) => (
        <EpisodeCard key={id} id={id} name={name} air_date={air_date} />
      ))}
    </div>
  );
};
