import React from "react";
import { Rating } from "react-simple-star-rating";

const FilterMovie = ({ filterStars, filterValue, handlerating, handlefilter,el }) => {
  return (
    <div className="header-container">
      <h3> MOVIE APP</h3>
      <div className="header-input">
        <h4>search</h4>
        <input
          value={filterValue}
          onChange={handlefilter}
          type="text"
          placeholder="enter a movie.."
        />
        <Rating
          ratingValue={filterStars}
          
          onClick={handlerating}
         
        />
      </div>
    </div>
  );
};

export default FilterMovie;
