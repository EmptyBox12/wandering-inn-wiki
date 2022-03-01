import React from "react";
import CharacterCard from "./CharacterCard";

export default function Home() {
  const mainCharacters = [
    {
      name: "Erin Solstice",
      slug: "erin-solstice",
      img: "/images/erin.jpg",
      description:
        "Erin Solstice is the main protagonist of The Wandering Inn. She is a [Magical Innkeeper] and a master-class chess player. She first wandered into this world on her way to the bathroom and has been stuck ever since.",
    },
    {
      name: "Pisces Jealnet",
      slug: "pices-jealnet",
      img: "/images/pisces.png",
      description:
        "Pisces Jealnet is a [Necromancer], and regular customer of The Wandering Inn. He is a Gold-ranked adventurer and member of the Horns of Hammerad.",
    },
    {
      name: "Ceria Springwalker",
      slug: "ceria-springwalker",
      img: "/images/ceria.png",
      description:
        "Ceria Springwalker is a half-Elf [Arctic Cryomancer] and captain of the Horns of Hammerad.",
    },
    {
      name: "Pawn",
      slug: "pawn",
      img: "/images/pawn.png",
      description:
        "Pawn is an Individual Worker Antinium that belongs to Liscor's Antinium Hive. He is the first Antinium to become a named individual in the Innverse. Chapters primarily featuring Pawn are often labeled with an L.",
    },
    {
      name: "Flos Reimarch",
      slug: "flos-reimarch",
      img: "/images/flos.jpg",
      description:
        "Flos Reimarch, also known as Flos, the King of Destruction, is a [King] whose Kingdom, Reim, is located in central Chandrar, beside the Great Desert. He is infamous worldwide, having managed to conquer almost half of the civilized world twenty years ago. The current era of history, A.F., is named for him.",
    },
  ];
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
          {mainCharacters.map((character) => {
            return <CharacterCard character={character} />;
          })}
        </div>
      </div>
    </div>
  );
}
