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
    <footer className="relative bottom-0 left-0 right-0 bg-pizazz-10 p-6 text-pizazz-500">
      <section>
        <ul className="mx-5 flex flex-nowrap justify-around text-sm">
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
