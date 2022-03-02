import React from "react";
import CharacterCard from "./CharacterCard";

export default function Characters({ characters }) {
  return (
    <div className="characters-page">
      <div className="home-title" style={{"fontSize":"25px"}}>Characters</div>
      <div className="characters-list">
        {characters.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </div>
    </div>
  );
}
