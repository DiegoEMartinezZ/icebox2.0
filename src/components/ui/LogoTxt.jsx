import React from "react";

const LogoTxt = ({ txt }) => {
  return (
    <ul className="mx-2 text-xl font-black hover:cursor-pointer hover:text-pizazz-200">
      <a href="/home">
        <h5> {txt} </h5>
      </a>
    </ul>
  );
};

export default LogoTxt;
