import {
  faAngleLeft,
  faAngleRight,
  faReceipt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ArrowSliders from "../ui/ArrowSliders";
import Buttons from "../ui/Buttons";
import { Link } from "react-router-dom";
import Title from "../ui/Title";
import TitleSm from "../ui/TitleSm";

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

const GamesSlider = ({ nameSection }) => {
  // Handler Slider Buttons

  const [currentID, setCurrentID] = useState(0);

  const handlerNextSlide = () => {
    setCurrentID((prevID) => (prevID === test.length - 1 ? 0 : prevID + 1));
  };

  const handlerPrevSlide = () => {
    setCurrentID((prevID) => (prevID === 0 ? test.length - 1 : prevID - 1));
  };

  return (
    <div className="relative h-screen w-full">
      {/* Map array of name, price, images */}
      {test.map((product, idx) => (
        <ul
          key={product.id}
          className="absolute left-0 right-0 my-10 text-center"
        >
          <li>
            <Link to={`/game/${product.id}`}>
              <img
                src={product.img}
                alt={`Slide ${product.id}`}
                className={`absolute bottom-0 left-0 right-0 top-0 h-screen w-screen cursor-pointer transition-opacity duration-700 ${
                  idx === currentID
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              />
            </Link>
          </li>
          <li
            className={`absolute right-0 h-screen w-1/3 bg-gradient-to-bl from-pizazz-10 pt-10 text-2xl text-pizazz-1 
            transition-opacity duration-700 ${
              idx === currentID
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            <section className="mt-44 py-2">
              <TitleSm name={product.name} />
              <h3>{product.price} </h3>
              <div className="no-wrap my-10 flex flex-col">
                <Buttons btnName={"Buy Now"} icon={faReceipt} />
                <Buttons btnName={"Add to Cart"} icon={faShoppingCart} />
              </div>
            </section>
          </li>
        </ul>
      ))}
      {/* Slider, Buttons and title each of the slider*/}
      <div className="py-2/3 absolute left-0 right-0 flex items-center justify-around bg-gradient-to-r from-pizazz-500 to-pizazz-200 text-pizazz-10">
        <button className="text-white rounded-r-md" onClick={handlerPrevSlide}>
          <ArrowSliders arrow={faAngleLeft} />
        </button>

        <h3 className="font-lighter text-base">{nameSection}</h3>

        <button className="text-white rounded-r-md " onClick={handlerNextSlide}>
          <ArrowSliders arrow={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default GamesSlider;
