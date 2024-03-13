import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ page, name }) => {
  return (
    <Link to={page}>
      <button className="text-pizazz-10 m-3 rounded-md bg-pizazz-500 p-1.5 text-sm ">
        {name}
      </button>
    </Link>
  );
};

export default ButtonLink;
