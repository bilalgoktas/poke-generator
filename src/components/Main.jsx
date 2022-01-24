import React from "react";
import { Card } from "./card";
import Loader from "./Loader";

const Main = ({ isLoading, pokemon }) => {
  if (isLoading) {
    return <Loader />;
  }
  if (pokemon) {
    return <Card pokemon={pokemon} />;
  }
  return <></>;
};

export default Main;
