
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import Star from './Star.js';

const StarRaiting = ({count}) => {
console.log(count)
const [rating, setRating] = useState(0)
const stars = Array.from({length: 5}, () => FaStar);


const changeRating = (newRating) => {
  setRating(newRating);
  onChange?.(newRating);
};

  return (
   
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= rating}
          onClick={() => changeRating(value)}
        />
      ))}
    </span>
  );

}

export default StarRaiting;