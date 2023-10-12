import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import { imagesData } from '../data/data';
import "../scss/GamePage.scss";
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import flip from "../music/flip.mp3"

const GamePage = () => {
    const [cards, setCards] = useState(getRandomCards(imagesData, 4));
    const [selectedCards, setSelectedCards] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const audio = new Audio(flip);
    const navigate = useNavigate();

    useEffect(() => {
        const storedBestScore = localStorage.getItem('bestScore');
        if (storedBestScore) {
            setBestScore(parseInt(storedBestScore, 10));
        }
    }, []);

    const handleCardClick = (cardName) => {
        if (!isFlipped) {
            audio.play();
            if (!selectedCards.includes(cardName)) {
                setIsFlipped(true);
                setTimeout(() => {
                    setIsFlipped(false);
                    setCards(getRandomCards(imagesData, 4));
                }, 1000);

                setSelectedCards((prev) => [...prev, cardName]);
                setScore((prevScore) => prevScore + 1);
            } else {
                navigate("/gameover")
                setScore(0)
            }
        } else {
            return
        }
    };

    useEffect(() => {
        localStorage.setItem("score", score.toString());
        if (score > bestScore) {
            setBestScore(score);
            localStorage.setItem('bestScore', score.toString());
        }
    }, [score, bestScore]);

    function getRandomCards(array, count) {
        const shuffledArray = array.sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }

    console.log(cards);

    return (
        <motion.div
            className='game'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <NavBar bestScore={bestScore} score={score} />
            <div className='cards'>
                {cards.map((card) => (
                    <div className='card'>
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