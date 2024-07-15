import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './StarRating.css';


const StarRating = ({ noOfStars =5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index) => {
    setHover(index + 1);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <div className='star-rating'>
        <h1>Rate Us !!!</h1>
      {Array.from({ length: noOfStars }, (_, index) => (
        <FaStar
          key={index}
          size={72}
          color={index < (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating;
