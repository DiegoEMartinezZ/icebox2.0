import React from "react";
import SocialMedia from "../assets/SocialMedia";
import {
  faDiscord,
  faFacebook,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const MainFooter = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 flex justify-between bg-pizazz-10 p-10 text-pizazz-500">
      <div className="no-wrap flex">
        <SocialMedia icon={faFacebook} />
        <SocialMedia icon={faTwitch} />
        <SocialMedia icon={faYoutube} />
        <SocialMedia icon={faDiscord} />
      </div>
      <section>
        <ul className="no-wrap flex justify-between">
          <li className="mx-5 cursor-pointer hover:text-pizazz-100">
            {" "}
            Featured & Recommended{" "}
          </li>
          <li className="mx-5 cursor-pointer hover:text-pizazz-100">
            {" "}
            Special Offers
          </li>
          <li className="mx-5 cursor-pointer hover:text-pizazz-100">
            {" "}
            Categories{" "}
          </li>
          <li className="mx-5 cursor-pointer hover:text-pizazz-100">
            {" "}
            Top Sellers{" "}
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default MainFooter;
