import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Icons = ({ iconUI, handler }) => {
  return (
    <ul className="mx-2 font-bold hover:cursor-pointer hover:text-pizazz-200">
      <FontAwesomeIcon icon={iconUI} onClick={handler} />
    </ul>
  );
};

export default Icons;
