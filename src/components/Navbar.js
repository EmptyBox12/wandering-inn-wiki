import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ loggedIn, user }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div
        className="title"
        onClick={() => {
          navigate("/");
        }}
      >
        The Wandering Inn
      </div>
      <div className="navbar-right">
        <div
          className="nav-item"
          onClick={() => {
            navigate("/characters");
          }}
        >
          Characters
        </div>
        {loggedIn === true ? (
          <>
            <div
              className="nav-item"
              onClick={() => {
                navigate("/characters/new");
              }}
            >
              Create Character
            </div>
            <div className="nav-item">{user.username}</div>
            <div className="nav-item">Log Out</div>
          </>
        ) : (
          <>
            <div
              className="nav-item"
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </div>
            <div
              className="nav-item"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Sign In
            </div>
          </>
        )}
      </div>
    </div>
  );
}
