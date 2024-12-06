import React from "react";
import Text from "../Text/Text";
import WorkCards from "./WorkCards/WorkCards";
import style from "./Works.module.scss";

const Works = () => {
  return (
    <section className={style.works}>
      <div className={style.container}>
        <div className={style.works_top}>
          <Text title="Projects" />
          <h4>Awesome Works For Our Clients</h4>
          <p>
            Assertively streamline interactive interfaces after value a
            infrastructures. Authoritatively fabricate fully tested
            methodologies before Holistic deliver end-to-end architectures
            rather sound benefits.
          </p>
        </div>
        <WorkCards />
      </div>
    </section>
  );
};

export default Works;
