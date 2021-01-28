import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

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
        <h2 className="section-title">Cocktails List</h2>
        <div className="cocktails-center">
          {cocktails.map((drink, index) => {
            return (
              <Cocktail
                key={index}
                id={drink.id}
                drink={drink.name}
                pic={drink.pic}
                instructions={drink.instructions}
                glass={drink.glass}
                type={drink.alcoholic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CocktailList;
