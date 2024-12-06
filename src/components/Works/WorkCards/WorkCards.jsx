import React from "react";
import { workCards } from "../../../api";
import style from "./WorkCards.module.scss";

const WorkCards = () => {
  return (
    <div className={style.work_cards}>
      <ul>
        {workCards?.map((item, index) => (
          <li key={index}>
            <img src={item?.workCardsImage} alt="" width={416} height={400}/>
            <div>
                <span>{item?.tech}</span>
                <h6>{item?.bodys}</h6>
                <p>{item?.descs}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkCards;
