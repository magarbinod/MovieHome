import React from 'react'
import "../index.css"

const MovieCard = ({movie, index}) => {


    //Adding a error handling for image Function
    const handleError = (e) => {
            e.target.src = "/images/default.jpg";
    };
    
    //Movie Card Rating Function 
    const ratingClass = (rating) => {
        if (rating >= 8) 
            return "rating-good"
        
        if (rating >=5 && rating < 8) 
            return "rating-ok";
        
        return "rating-bad";
    }

  return (
    <>
      <div className="card w-100 shadow-xl">
        <figure>
          <img
            className="movie-image"
            src={`/images/${movie.image}`}
            onError={handleError}
            alt={movie.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{movie.title}</h2>
          <p className="text-gray-400">{movie.genre}</p>
          <p className={`${ratingClass(movie.rating)}`}>{movie.rating}</p>
          <div className="card-actions justify-start">
            <button className="btn bg-red-700 text-white border-0">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;