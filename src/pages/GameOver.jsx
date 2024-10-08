import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/GameOver.scss";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
const GameOver = () => {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/");
  };

  const score = parseInt(localStorage.getItem("score"), 10);
  const bestScore = parseInt(localStorage.getItem("bestScore"), 10);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar score={score} bestScore={bestScore} />
      <div className="game-over">
        <h2>Game Over</h2>
        <button onClick={handleRestart}>Restart</button>
      </div>
      <Footer />
    </motion.div>
  );
};

export default GameOver;
