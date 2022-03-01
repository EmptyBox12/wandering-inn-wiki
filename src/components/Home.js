import React from "react";
import CharacterCard from "./CharacterCard";

export default function Home({characters}) {

  return (
    <div className="home">
      <div className="home-title">The Wandering Inn</div>
      <div className="summary">
        <img
          className="main-image"
          src="/images/wandering-inn-main.png"
          alt=""
        />
        <p>
          The Wandering Inn , by 'pirateaba', is an ongoing Web Serial Novel
          that follows the life of a young woman named Erin Solstice who finds
          herself in a fantasy world ruled by a leveling system and classes.
          However, instead of becoming a famous adventurer or hero, she becomes
          an innkeeper.
        </p>
      </div>
      <div>
        <div className="home-characters">Main Characters</div>
        <hr />

        <div className="home-main-characters">
          {characters.map((character) => {
            return <CharacterCard character={character} />;
          })}
        </div>
      </div>
    </div>
  );
}
