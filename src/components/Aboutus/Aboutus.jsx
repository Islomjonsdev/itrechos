import React from "react";
import style from "./Aboutus.module.scss";
import Card from "./Card/Card";

const Aboutus = () => {
  return (
    <section className={style.about_us}>
      <div className={style.container}>
        <div className={style.about_us_container}>
          <div className={style.about_us_top}>
            <span>About us</span>
            <h4>
              Our Company Specialize In IT Solutions & Technology with Passion
            </h4>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end-to-end architectures
              rather than economically sound benefits. Progressively simplify
              end-to-end paradigms. Assertively streamline interactive
              interfaces after value-added infrastructure.
            </p>
          </div>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
