import React from "react";
import { it } from "../../api";
import Cards from "./Cards/Cards";
import style from "./It.module.scss";

const It = () => {
  return (
    <section className={style.it}>
      <div className={style.container}>
        <div className={style.it_container}>
          <div className={style.it_left}>
            <div className={style.top}>
              <span>Service</span>
              <h3>We Providing Complete Professional IT Services.</h3>
              <p>
                Assertively streamline interactive interfaces after value a
                infrastructures. Authoritatively fabricate fully tested
                methodologies before Holistic deliver end-to-end architectures
                rather sound benefits.
              </p>
            </div>
            <ul>
              {it?.map((item, index) => (
                <li key={index}>
                  <img src={item?.img} alt="" />
                  <div>
                    <h6>{item?.header}</h6>
                    <p>{item?.texts}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Cards />
        </div>
      </div>
    </section>
  );
};

export default It;
