import React from "react";
import GamesSlider from "../slider/GamesSlider";

const GamesSections = () => {
  return (
    <>
      {/* Tambien se pasara como prop la url de las imagenes de los juegos a mostrar desde la API */}
      <GamesSlider nameSection={"Featured & Recommended"} />
      <GamesSlider nameSection={"Special Offers"} />
      <GamesSlider nameSection={"Browse By Category"} />
      <GamesSlider nameSection={"Top Sellers"} />
    </>
  );
};

export default GamesSections;
