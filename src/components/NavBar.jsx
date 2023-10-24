import React from 'react'
import dbz from "../assets/Dragon_Ball_Z.webp"
import "../scss/Navbar.scss"
import { useNavigate } from 'react-router-dom'
const NavBar = ({ score, bestScore }) => {
    const navigate = useNavigate();
    const handleShowGamePage = () => {
        navigate("/");
    }
    return (
        <div className='nav'>
            <div className='dbz-btn'>
                <button
                    onClick={handleShowGamePage}
                >
                    <img src={dbz} alt="dragon ball z" draggable="false"/>
                </button>
            </div>

            <div className='score'>
                <h3>Score : {score}</h3>
                <h3>Best score : {bestScore}</h3>
            </div>
        </div>
    )
}

export default NavBar