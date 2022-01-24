export const bringPokemon = async (randomNumber) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomNumber}/`
  );
  const data = await response.json();
  return data;
};
