import React, { useState } from "react";
import { solutionData } from "../../api";
import images from "../../assets/images/images.png";
import downIcon from "../../assets/icons/down.svg";
import topIcon from "../../assets/icons/top.svg";
import "./Solution.scss";

const Solution = () => {
  const [collapse, setCollapse] = useState(false);
  const openToogle = (i) => {
    if (collapse === i) {
      return setCollapse(true);
    } else {
      setCollapse(i);
    }
  };
  return (
    <section className="solution">
      <div className="container">
        <div className="solution_blog">
          <div className="solution_left">
            <div>
              <img src={images} alt="" width={734} height={543} />
            </div>
          </div>

          <div className="solution_right">
            <div className="solution_right_top">
              <span>Why choose us</span>
              <h4>Proven Expertise in Complex IT Solutions</h4>
              <p>
                Assertively streamline interactive interfaces after value-added
                infrastructures. Authoritatively fabricate fully tested
                methodologies before. Holistic deliver end-to-end architectures
                rather than economically sound benefits. Progressively simplify
                end-to-end paradigms. Assertively streamline interactive
                interfaces after value-added infrastructure.
              </p>
            </div>

            <ul>
              {solutionData?.map((item, id) => (
                <li key={id} onClick={() => openToogle(id)}>
                  <div className="topp">
                    <h6>{item?.solutionTitle}</h6>
                    {collapse === id ? (
                      <img src={topIcon} />
                    ) : (
                      <img src={downIcon} />
                    )}
                  </div>

                  <div
                    className={collapse === id ? "card_show show" : "card_show"}
                  >
                    {item?.solutionBody}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
