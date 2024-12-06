import React from "react";
import style from "./Card.module.scss";
import card1Image from "../../../assets/images/card1.png"
import card1Image2 from "../../../assets/images/card2.png"
import { text } from "../../../api";
import Button from "../../ui/Button/Button";

const Card = () => {
  return (
    <div className={style.card}>
      <div className={style.card_left}>
        <div>
          <img style={{ marginBottom: "10px" }} src={card1Image} alt="" />
          <div>
            <span>12+ </span>
            <p>Years Experience</p>
          </div>
        </div>
        <img src={card1Image2} alt="" />
      </div>

      <div className={style.card_right}>
        <ul className={style.card_list}>
          {text?.map((item, index) => (
            <li key={index}>
              <h5>{item?.heading}</h5>
              <p>{item?.body}</p>
            </li>
          ))}
        </ul>
        <Button title={"MORE ABOUT US"} />
      </div>
    </div>
  );
};

export default Card;
