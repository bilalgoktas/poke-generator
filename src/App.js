import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { randomPokemonId } from "./utilities";
import { bringPokemon } from "./services/service";

function App() {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    renderPokemon();
  }, []);

  const renderPokemon = () => {
    setIsLoading(true);
    setTimeout(() => {
      bringPokemon(randomPokemonId())
        .then((data) => {
          setPokemon(data);
          setError(false);
        })
        .catch(() => setError(true))
        .finally(() => setIsLoading(false));
    }, 500);
  };

  if (error) {
    return (
      <div>
        <img src="https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png" />
        <p>An error occured!</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Header onClick={renderPokemon} />
      <Main pokemon={pokemon} isLoading={isLoading} />
    </div>
  );
}

export default App;
