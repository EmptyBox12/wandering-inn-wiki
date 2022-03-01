import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const loggedIn = useState(false);
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
            <div className="nav-item">Username</div>
            <div className="nav-item">Log Out</div>
          </>
        ) : (
          <>
            <div className="nav-item">Login</div>
            <div className="nav-item">Sign In</div>
          </>
        )}
      </div>
    </div>
  );
}
