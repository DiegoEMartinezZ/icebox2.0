import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ArrowSliders = ({ arrow }) => {
  return (
    <ul className="rounded  p-2 text-pizazz-10 hover:cursor-pointer hover:bg-pizazz-1">
      <FontAwesomeIcon icon={arrow} />
    </ul>
  );
};

export default ArrowSliders;
