import React from "react";
import styles from "./card.module.css";

export const Card = ({ pokemon }) => {
  return (
    <div className={styles.container}>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.types[0].type.name}</p>
      <p>{pokemon.weight}</p>
    </div>
  );
};
