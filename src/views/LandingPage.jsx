import React from "react";
import Title from "../components/ui/Title";
import Subtitle from "../components/ui/Subtitle";
import ButtonLink from "../components/assets/ButtonLink";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-center bg-pizazz-10 text-center">
      <section>
        <Title name={"ICEBOX"} />
        <Subtitle name={"Level Up Your Collection"} />
        <ButtonLink name={"DEMO"} page={"/home"} />
      </section>
      <Footer />
    </main>
  );
};

export default LandingPage;
