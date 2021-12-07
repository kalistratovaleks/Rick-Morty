import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSection } from "./styled";
import { DetailsCard } from "./CharacterInfoCard";

export const CharactersInfoPage = () => {
  const { id } = useParams();
  const [characterInfo, setCharacterInfo] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((json) => setCharacterInfo(json));
  }, [id]);
  console.log(characterInfo);
  return (
    <div>
      <StyledSection>
        {characterInfo && (
          <>
            <DetailsCard
              name={characterInfo.name}
              image={characterInfo.image}
              gender={characterInfo.gender}
              status={characterInfo.status}
              species={characterInfo.species}
            />
          </>
        )}
      </StyledSection>
    </div>
  );
};
