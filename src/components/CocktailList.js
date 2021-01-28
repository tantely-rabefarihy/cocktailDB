import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria.
      </h2>
    );
  }
  return (
    <div>
      <div className="section">
        <h2 className="section-title">Cocktail List component</h2>
        <div className="cocktails-center">
          {cocktails.map((drink, key) => {
            return (
              <div>
                <p>{drink.name}</p>
                <img src={drink.pic} />
                <p>Type of Glass: {drink.glass}</p>
                <p>Instructions: {drink.instructions}</p>
                <p>Beverage type: {drink.alcoholic}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CocktailList;
