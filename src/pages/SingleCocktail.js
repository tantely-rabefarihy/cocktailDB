import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { drinkId } = useParams();
  const [cocktailData, setCocktailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSingleCocktail = async (id) => {
    try {
      setLoading(true);
      const result = await fetch(`${url}${id}`);
      const data = await result.json();
      const drinkInfo = data.drinks[0];
      console.log(drinkInfo);

      let ing = Object.entries(data.drinks[0]).filter((key) =>
        key[0].includes("strIngredient")
      );

      const ingredients = ing.map((item) => item[1]);

      if (drinkInfo) {
        const {
          strDrink: drink,
          strGlass: glass,
          strDrinkThumb: image,
          strInstructions: instructions,
        } = drinkInfo;

        setCocktailData({ drink, glass, image, instructions, ingredients });
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

  // console.log(cocktailData);

  return loading ? (
    <Loading />
  ) : (
    <div className="section cocktail-section">
      <Link className="btn btn-primary" to="/">
        Back to Homepage
      </Link>
      <h2 className="section-title">{cocktailData.drink}</h2>
      <div className="drink">
        <img src={cocktailData.image} alt={cocktailData.drink} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {cocktailData.drink}
          </p>
          {/* <p>
              <span className='drink-data'>category :</span> {category}
            </p> */}
          {/* <p>
              <span className='drink-data'>info :</span> {info}
            </p> */}
          <p>
            <span className="drink-data">glass :</span> {cocktailData.glass}
          </p>
          <p>
            <span className="drink-data">instructions :</span>{" "}
            {cocktailData.instructions}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {cocktailData.ingredients.map((item, index) => {
              return item ? <span key={index}>○ {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
