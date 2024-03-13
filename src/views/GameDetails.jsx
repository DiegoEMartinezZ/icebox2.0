import React from "react";
import NavBar from "../components/navbar/NavBar";
import { useParams } from "react-router-dom";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import Texts from "../components/ui/Texts";
import Buttons from "../components/ui/Buttons";
import {
  faReceipt,
  faShoppingCart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Price from "../components/ui/Price";
import ReviewSections from "../components/sections/ReviewSections";
import MainFooter from "../components/footer/MainFooter";

const GameDetails = () => {
  const test = [
    {
      id: 1,
      name: "Halo 3",
      info: "lorem",
      price: "$55.000",
      img: "img1.jpg",
    },
    {
      id: 2,
      name: "The Forest",
      info: "lorem",
      price: "$525.000",
      img: "img2.jpg",
    },
    {
      id: 3,
      name: "Monster Hunter",
      info: "lorem",
      price: "$2.050",
      img: "img3.jpg",
    },
  ];

  const { productId } = useParams();
  const oneProduct = test.find((product) => product.id === parseInt(productId));

  return (
    <>
      <NavBar />
      <section className="mt-20 flex flex-row flex-nowrap items-center justify-around">
        <ul className=" mx-10  w-1/2 text-left text-pizazz-1">
          <li>
            <h4> All Games / Indie Games / {oneProduct.name} </h4>
            <Title name={oneProduct.name} />
            {/* Permitir clasificar el juego Y que permita ver la clasificacion actual
            del juego */}
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <img src={`../${oneProduct.img}`} alt="" className="my-4" />
          </li>
        </ul>
        <div className="w-1/2">
          <Subtitle name={"Game description"} />
          <Texts
            txt={
              "lorem jkajnkdsakjnd akjndjkas ndkja ndaksjd nkjadn kjasdn kjadn kasdjn kajsdn kajsdn akjsdn kajsn dkjasnd jkasdn jkasdn kjasdnkj andkj andkj ansdjk nadjkn"
            }
          />
          <Price price={oneProduct.price} />
          <div className="flex justify-center py-4">
            <Buttons btnName={"Buy Now"} icon={faReceipt} />
            <Buttons btnName={"Add to Cart"} icon={faShoppingCart} />
          </div>
        </div>
      </section>
      <ReviewSections />
      <MainFooter />
    </>
  );
};

export default GameDetails;
