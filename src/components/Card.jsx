import React from 'react';
import "../scss/Card.scss";
import ReactParallaxTilt from 'react-parallax-tilt';
import cardBackImage from '../assets/kame-house.jpg';

const Card = ({ src, name, isFlipped, handleCardClick }) => {
    const cardClasses = `front-and-back ${isFlipped ? 'rotate' : ''}`;
    return (
        <ReactParallaxTilt
            glareEnable={true}
            glareMaxOpacity={0.75}
            glarePosition='bottom'
            glareColor='#ffffff'
            glareBorderRadius='20px'
        >
            <div className={cardClasses} onClick={handleCardClick}>
                {!isFlipped ? (
                    <div className='image-card'>
                        <img src={src} alt="" />
                        <h4>{name}</h4>
                    </div>
                ) : (
                    <div className='card-back'>
                        <img src={cardBackImage} alt="Card Back" />
                    </div>
                )}
            </div>
        </ReactParallaxTilt>
    );
}

export default Card;