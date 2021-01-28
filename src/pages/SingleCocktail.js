import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { drinkId } = useParams();

  console.log(drinkId);
  const [cocktailData, setCocktailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSingleCocktail = async (id) => {
    try {
      setLoading(true);
      const result = await fetch(`${url}${id}`);
      const data = await result.json();
      const drinkInfo = data.drinks[0];

      if (drinkInfo) {
        const {
          strDrink: drink,
          strGlass: glass,
          strDrinkThumb: image,
          strInstructions: instructions,
        } = drinkInfo;

        setCocktailData({ drink, glass, image, instructions });
      } else {
        setCocktailData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(`SOMETHING TO FIX : ${error}`);
    }
  };

  useEffect(() => {
    getSingleCocktail(drinkId);
  }, [drinkId]);

  console.log(cocktailData);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <h2 style={{ fontWeight: 100 }}>single cocktail page </h2>

      <div className="drink">
        <img src={cocktailData.image} />
      </div>
      <div>
        <p>{cocktailData.drink}</p>
        <p>{cocktailData.glass}</p>
        <p>{cocktailData.instructions}</p>
      </div>
    </div>
  );
};

export default SingleCocktail;
