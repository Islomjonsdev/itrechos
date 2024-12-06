import React from "react";
import style from "./Status.module.scss";
import { status } from "../../api";

const Status = () => {
  return (
    <section className={style.status}>
      <div className={style.container}>
        <ul>
          {status?.map((item, id) => (
            <li key={id}>
              <div>
                <span>{item?.persentage}</span>
                <p>{item?.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Status;
