import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialMedia = ({ url, icon }) => {
  return (
    <>
      <li className="mx-5 cursor-pointer list-none text-2xl text-pizazz-500 hover:text-pizazz-100">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={icon} />
        </a>
      </li>
    </>
  );
};

export default SocialMedia;
