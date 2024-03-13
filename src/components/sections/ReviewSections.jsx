import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import TitleSm from "../ui/TitleSm";

const ReviewSections = () => {
  return (
    <section className="m-10">
      <TitleSm name={"Reviews"} />
      <div>
        <ul className="text-left text-pizazz-1">
          <li className="mb-3">
            <div className=" mt-4 flex flex-nowrap  items-center justify-start  bg-pizazz-500 p-2 text-sm font-medium text-pizazz-10">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="mx-2 rounded bg-validate-100 p-2 text-2xl text-pizazz-1"
              />
              <div className="mx-2">
                <h4 className="">LowOnCYAN(NOMBRE DE USUARIO)</h4>
                <h6 className="text-sm">13/03/2024</h6>
              </div>
            </div>
            <p className=" bg-validate-100 p-4 text-pizazz-10">
              One of the best games I've ever had the pleasure to play! Runs
              well on every single platform and very fun to play with friends!!!
              10/10 will ALWAYS reccomend this game to everyone who asks or just
              promote it in general! Concerned Ape is one of the coolest
              creators ever and can't wait to see how Haunted Choclatier plays
              after this!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ReviewSections;
