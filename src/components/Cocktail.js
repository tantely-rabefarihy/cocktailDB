import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, drink, pic, instructions, glass, type }) => {
  return (
    <div className="cocktail">
      <div className="img-container">
        <img src={pic} alt={drink} />
      </div>
      <div className="cocktail-footer ">
        <h3>{drink}</h3>
        <p>Type of Glass: {glass}</p>
        <p>Instructions: {instructions}</p>
        <p>Beverage type: {type}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
