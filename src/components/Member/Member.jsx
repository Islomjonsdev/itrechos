import React from "react";
import style from "./Member.module.scss";
import arraowUp from "../../assets/icons/arrow-up.svg"
import { Link } from "react-router-dom";

const Member = () => {
  return (
    <section className={style.member}>
      <div className={style.container}>
        <div className={style.member_top}>
          <span>Our team</span>
          <div>
            <h5>Our Professional Team member</h5>
            <Link><img src={arraowUp} alt="" />View all</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
