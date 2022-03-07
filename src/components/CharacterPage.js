import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

export default function CharacterPage({
  characters,
  user,
  loggedIn,
  setCharacters,
}) {
  const { slug } = useParams();
  const [character, setCharacter] = useState({});
  const [editIntroduction, setEditIntroduction] = useState(false);
  const [editAppearance, setEditAppearance] = useState(false);
  const [editPersonality, setEditPersonality] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
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
  ]);

  useEffect(() => {
    setCharacter(characters.find((item) => item.slug === slug));
  }, []);

  function makeComment() {
    let newComment = { content: comment, author: user.username };
    let newComments = [newComment, ...comments];
    setComments(newComments);
    setComment("");
  }
  function handleEdit(e, editName) {
    let index = characters.findIndex((item) => item.slug === slug);
    let newCharacters = [...characters]
    newCharacters[index][editName] = e.target.value 
    setCharacters(newCharacters);
    setCharacter(newCharacters[index]);
  }

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
          <div>Level</div> <div>{character.level}</div>
        </div>
        <div className="detail-info">
          <div>Gender</div> <div>{character.gender}</div>
        </div>
        <div className="detail-quote">
          <div className="quote-title">Quote</div>
          <div className="quote">“{character.quote}”</div>
        </div>
      </div>
      <div className="detail-right">
        <div className="right-section">
          <div className="section-title" style={{ marginTop: "15px" }}>
            <div>Introduction</div>
            {editIntroduction ? (
              <button
                onClick={() => {
                  setEditIntroduction(false);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditIntroduction(true);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Edit
              </button>
            )}
          </div>
          {editIntroduction ? (
            <textarea
              className="comment-area"
              cols="30"
              rows="10"
              onChange={(e) => {
                handleEdit(e, "description");
              }}
              value={character.description}
            ></textarea>
          ) : (
            <div>{character.description}</div>
          )}
        </div>
        <div className="right-section">
          <div className="section-title">
            <div>Appearance</div>
            {editAppearance ? (
              <button
                onClick={() => {
                  setEditAppearance(false);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditAppearance(true);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Edit
              </button>
            )}
          </div>
          {editAppearance ? (
            <textarea
              className="comment-area"
              cols="30"
              rows="10"
              onChange={(e) => {
                handleEdit(e, "appearance");
              }}
              value={character.appearance}
            ></textarea>
          ) : (
            <div>{character.appearance}</div>
          )}
        </div>
        <div className="right-section">
          <div className="section-title">
            <div>Personality</div>
            {editPersonality ? (
              <button
                onClick={() => {
                  setEditPersonality(false);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditPersonality(true);
                }}
                className="edit-button"
                style={loggedIn ? { display: "block" } : { display: "none" }}
              >
                Edit
              </button>
            )}
          </div>
          {editPersonality ? (
            <textarea
              className="comment-area"
              cols="30"
              rows="10"
              onChange={(e) => {
                handleEdit(e, "personality");
              }}
              value={character.personality}
            ></textarea>
          ) : (
            <div>{character.personality}</div>
          )}
        </div>
        <div className="right-section">
          <div className="section-title">Powers and Abilities</div>
          <div className="sub-title">
            <div>Classes/Levels:</div>
            <ul>
              {character.classes &&
                character.classes.map((item) => {
                  return <li>{item}</li>;
                })}
            </ul>
          </div>
          <div className="sub-title">
            <div>Skills:</div>
            <ul>
              {character.skills &&
                character.skills.map((item) => {
                  return <li>{item}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="comments-container">
          <div className="section-title">Comments</div>
          <div className="comment-area-container">
            <textarea
              className="comment-area"
              cols="30"
              rows="7"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            ></textarea>
            <button
              onClick={makeComment}
              disabled={loggedIn ? false : true}
              style={loggedIn ? {} : { filter: "brightness(0.1)" }}
            >
              Comment
            </button>
          </div>
          {comments.map((comment) => {
            return <Comment comment={comment} />;
          })}
        </div>
      </div>
    </div>
  );
}
