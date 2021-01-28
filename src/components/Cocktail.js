import React from "react";

const Cocktail = ({ drink, pic, instructions, glass, type }) => {
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
      </div>
    </div>
  );
};

export default Cocktail;
