import React from "react";
import { readyData } from "../../api";
import style from "./Ready.module.scss";

const Ready = () => {
  return (
    <section className={style.ready}>
      <div className={style.container}>
        <h4>Ready To Transform Your Business?</h4>
        <ul>
          {readyData?.map((item, index) => (
            <li key={index}>
              <img src={item?.images} alt="" />
              <div>
                <h6>{item?.titles}</h6>
                <p>{item?.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Ready;
