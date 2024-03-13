import {
  faCartShopping,
  faCircleUser,
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

  const userHandler = () => {
    console.log("Oprimiste el boton de usuario");
  };

  return (
    <nav className="relative left-0 right-0 top-0 ">
      <li className="flex h-20 flex-nowrap items-center justify-around bg-pizazz-10  text-base  text-pizazz-500">
        <LogoTxt txt={"ICEBOX"} />
        <div className="flex text-base">
          <Icons iconUI={faCircleUser} handler={userHandler} />
          <Icons iconUI={faMagnifyingGlass} handler={searchIconHandler} />
          <Link to="/cart">
            <Icons iconUI={faCartShopping} />
          </Link>
        </div>
      </li>
    </nav>
  );
};

export default NavBar;
