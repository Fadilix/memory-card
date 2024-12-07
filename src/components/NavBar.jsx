import React from "react";
import dbz from "../assets/Dragon_Ball_Z.webp";
import "../scss/Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

// Barre de navigation
// logo, score et best score
const NavBar = ({ score, bestScore }) => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;
  const navigate = useNavigate();
  const handleShowGamePage = () => {
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("score");
    localStorage.removeItem("bestScore");
    navigate("/login");
  };
  return (
    <div className="nav">
      <div className="dbz-btn">
        <button onClick={handleShowGamePage}>
          <img src={dbz} alt="dragon ball z" draggable="false" />
        </button>
      </div>
      <Link to="/leadboard" className="link">
        Leaderboard
      </Link>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="link"
          style={{
            outline: "none",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1rem",
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
      <div className="score">
        {isLoggedIn && (
          <>
            <h3>{localStorage.getItem("name")}</h3>
          </>
        )}
        <h3>Score : {score}</h3>
        <h3>Best score : {bestScore} / 30</h3>
      </div>
    </div>
  );
};

export default NavBar;
