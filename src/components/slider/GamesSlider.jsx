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
    <div className="relative mb-1 h-screen w-full">
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
                className={`absolute bottom-0 left-0 right-0 top-0 h-screen w-screen cursor-pointer transition-opacity duration-500 ${
                  idx === currentID
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }`}
              />
            </Link>
          </li>
          <li
            className={`absolute  right-0  h-screen w-1/3 bg-gradient-to-t from-pizazz-10  pt-10 text-2xl text-pizazz-1 
            transition-opacity duration-500 ${
              idx === currentID ? "opacity-100" : "opacity-0"
            }`}
          >
            <section className="mt-44 py-2">
              <h2 className="my-2 font-bold">{product.name}</h2>
              <h3>{product.price} </h3>
              <div className="no-wrap my-10 flex flex-col">
                <Buttons btnName={"Buy Now"} icon={faReceipt} />
                <Buttons btnName={"Add to Cart"} icon={faShoppingCart} />
              </div>
            </section>
          </li>
        </ul>
      ))}
      {/* Buttons and title container of the slider*/}
      <div className="absolute left-0 right-0 flex items-center justify-around bg-pizazz-500 px-6 py-1 text-pizazz-10">
        <button className="text-white rounded-r-md" onClick={handlerPrevSlide}>
          <ArrowSliders arrow={faAngleLeft} />
        </button>

        <h3 className="font-lighter text-lg">{nameSection}</h3>

        <button className="text-white rounded-r-md " onClick={handlerNextSlide}>
          <ArrowSliders arrow={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default GamesSlider;
