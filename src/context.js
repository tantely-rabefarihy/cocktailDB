import React, { useState, useEffect, useContext, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

// TESTING
// const url =
//   "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = async () => {
    setLoading(true);
    try {
      const result = await fetch(`${url}${searchTerm}`);
      const data = await result.json();
      if (data?.drinks) {
        const newCocktails = data.drinks.map((item) => {
          //   const ingredients = item.filter((prop) => {
          //     return prop.hasOwnProperty("ingredient");
          //   });
          //   console.log(ingredients);

          return {
            id: item.idDrink,
            name: item.strDrink,
            pic: item.strDrinkThumb,
            glass: item.strGlass,
            instructions: item.strInstructions,
            alcoholic: item.strAlcoholic,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
