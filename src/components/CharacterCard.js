import React from "react";
import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div
      className="card-main"
      onClick={() => {
        navigate(`/characters/${character.slug}`);
      }}
    >
      <div className="card-top">
        <div className="card-name">{character.name}</div>
        <img className="card-img" src={character.img} />
      </div>

      <div className="card-desc">{character.description}</div>
    </div>
  );
}
