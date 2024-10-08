import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import { imagesData } from "../data/data";
import "../scss/GamePage.scss";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import flip from "../music/flip.mp3";
import { useUser } from "../hooks/useUser";

const GamePage = () => {
  const [cards, setCards] = useState(getRandomCards(imagesData, 4));
  const [selectedCards, setSelectedCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const audio = new Audio(flip);
  const navigate = useNavigate();

  const updateBestScore = async (score) => {
    if (score >= bestScore) {
      console.log("it is greater");
      const userId = localStorage.getItem("token");
      try {
        const response = await fetch(
          `https://memory-card-api-v2.vercel.app/api/v1/users/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bestScore, gamesPlayed: 1 }),
          }
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
        toast.error("Error while updating best score");
      }
    } else {
      console.log("It is not greater");
      console.log(score);
      console.log(bestScore);
    }
  };

  const { user } = useUser();
  console.log(user);
  
  useEffect(() => {
    const storedBestScore = localStorage.getItem("bestScore");
    setBestScore(storedBestScore);
    if (user) {
      setBestScore(user.bestScore);
      localStorage.setItem("bestScore", user.bestScore);
    }
  }, []);

  const handleCardClick = (cardName) => {
    if (!isFlipped) {
      if (!selectedCards.includes(cardName)) {
        audio.play();
        setIsFlipped(true);
        setTimeout(() => {
          setIsFlipped(false);
          setCards(getRandomCards(imagesData, 4));
        }, 1000);

        setSelectedCards((prev) => [...prev, cardName]);
        setScore((prevScore) => prevScore + 1);
      } else {
        updateBestScore(score);
        navigate("/gameover");
        setScore(0);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    localStorage.setItem("score", score.toString());
    if (score > (bestScore || 0)) {
      setBestScore(score);
      localStorage.setItem("bestScore", score.toString());
    }
  }, [score]);

  function getRandomCards(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  // console.log(cards);
  return (
    <motion.div
      className="game"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar bestScore={bestScore} score={score} />
      <div className="cards">
        {cards.map((card) => (
          <div className="card" key={card.name}>
            <Card
              key={card.name}
              name={card.name}
              src={card.src}
              isFlipped={isFlipped}
              handleCardClick={() => handleCardClick(card.name)}
            />
          </div>
        ))}
      </div>
      <Footer isSoundActive={true} />
    </motion.div>
  );
};

export default GamePage;
