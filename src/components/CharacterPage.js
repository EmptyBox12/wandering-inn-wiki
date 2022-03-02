import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

export default function CharacterPage({ characters, user, loggedIn }) {
  const { slug } = useParams();
  const [character, setCharacter] = useState({});
  const comments = [
    {
      author: "Ataberk",
      content: "Wow I love this character",
    },
    {
      author: "İlkay",
      content: "Wow I love this character",
    },
    {
      author: "Anıl",
      content: "Wow I love this character",
    },
    {
      author: "Eren",
      content:
        "Actually this character is mispresented by the author. So that's why I don't like this character",
    },
  ];

  useEffect(() => {
    setCharacter(characters.find((item) => item.slug === slug));
  }, []);

  return (
    <div className="detail-page">
      <div className="detail-left">
        <div className="img-container">
          <div className="detail-name">{character.name}</div>
          <img className="detail-img" src={character.img} />
        </div>
        <div className="detail-class">[{character.class}]</div>
        <div className="detail-info">
          <div>True Class</div> <div>{character.trueClass}</div>
        </div>
        <div className="detail-info">
          <div>Level</div> <div>60-70</div>
        </div>
        <div className="detail-info">
          <div>Gender</div> <div>Male</div>
        </div>
        <div className="detail-quote">
          <div className="quote-title">Quote</div>
          <div className="quote">“{character.quote}”</div>
        </div>
      </div>
      <div className="detail-right">
        <div className="right-section">
          <div className="section-title" style={{ marginTop: "15px" }}>
            Introduction
          </div>
          <div>{character.description}</div>
        </div>
        <div className="right-section">
          <div className="section-title">Appearance</div>
          <div>{character.description}</div>
        </div>
        <div className="right-section">
          <div className="section-title">Personality</div>
          <div>{character.description}</div>
        </div>
        <div className="right-section">
          <div className="section-title">Powers and Abilities</div>
          <div className="sub-title">Classes/Levels:</div>
          <div className="sub-title">Skills:</div>
          <div>{character.description}</div>
        </div>
        <div className="comments-container">
          <div className="section-title">Comments</div>
          <div className="comment-area-container">
            <textarea className="comment-area" cols="30" rows="7"></textarea>
            <button disabled = {loggedIn ? false : true} style = {loggedIn ? {} : {"filter" :"brightness(0.1)"}} >Comment</button>
          </div>
          {comments.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}
