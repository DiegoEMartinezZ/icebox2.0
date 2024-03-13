import {
  faBars,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Icons from "../ui/Icons";
import LogoTxt from "../ui/LogoTxt";
import { Link } from "react-router-dom";

const NavBar = () => {
  const searchIconHandler = () => {
    console.log("oprimiste el boton de Busqueda");
  };

  const shoppingCartIconHandler = () => {
    console.log("oprimiste el boton de Carrito");
  };

  return (
    <nav className="relative left-0 right-0 top-0 z-10 border-2 border-b-pizazz-1  ">
      <li className="mb-0.5 flex h-20 flex-row items-center justify-around bg-pizazz-10  align-middle text-base  text-pizazz-500">
        <div className="mx-4">
          <Icons iconUI={faBars} />
        </div>

        <div className=" text-xl">
          <LogoTxt txt={"ICEBOX"} />
        </div>

        <div className="flex">
          <Icons iconUI={faMagnifyingGlass} handler={searchIconHandler} />
          <Link to="/cart">
            <Icons iconUI={faCartShopping} handler={shoppingCartIconHandler} />
          </Link>
        </div>
      </li>
    </nav>
  );
};

export default NavBar;
