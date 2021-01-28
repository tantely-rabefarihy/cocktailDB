import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
      <h2>Homepage</h2>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
