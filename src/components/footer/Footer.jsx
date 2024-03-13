import { faGithub } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import SocialMedia from "../assets/SocialMedia";
import Copyrights from "../ui/Copyrights";

const Footer = () => {
  return (
    <section className="absolute bottom-0 left-0 right-0 flex flex-col justify-center p-10 text-center">
      <SocialMedia url={"https://github.com/DiegoEMartinezZ"} icon={faGithub} />
      <Copyrights />
    </section>
  );
};

export default Footer;
