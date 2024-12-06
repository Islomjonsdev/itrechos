import React from "react";
import { Link } from "react-router-dom";
import { cardData } from "../../../api";
import style from "./Cards.module.scss";

const Cards = () => {
  return (
    <ul className={style.list}>
      {cardData?.map((item, id) => (
        <li key={id}>
          <img src={item?.image} alt="" />
          <h5>{item?.cardTitle}</h5>
          <p>{item?.cardTitle}</p>
          <Link to={"/"}>LEARN MORE</Link>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
