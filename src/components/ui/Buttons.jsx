import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Buttons = ({ btnName, icon }) => {
  return (
    <button className="m-auto my-2 w-1/3 rounded bg-pizazz-500 p-2 text-sm font-medium text-pizazz-10 hover:cursor-pointer hover:bg-pizazz-100">
      <FontAwesomeIcon icon={icon} className="mx-2" />
      {btnName}
    </button>
  );
};

export default Buttons;
