import style from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button";
import playIcon from "../../assets/svg/play.svg";
// import heroImage from "../../assets/images/image.png";
import imgCard1 from "../../assets/images/imgcard.png";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.container}>
        <div className={style.hero_container}>
          <div className={style.hero_left}>
            <p className={style.title}>WELCOME TO Ztech!</p>
            <h3>
              We Are Ready <span>To provide</span> It Solution
            </h3>
            <p className={style.text}>
              Assertively streamline interactive interfaces after value
              infrastructures. untorn datively fabricate fully tested
              methodologies before Assertively streamline interactive interfaces
              after infrastructures. We are 100+ professional software .
            </p>

            <div>
              <Button title="Explore services" />
              <Link to={"/"}>
                <img src={playIcon} alt="" />
                Watch A Video
              </Link>
            </div>
          </div>

          <div className={style.hero_right}>
            {/* <img className={style.mainImg} src={heroImage} alt="" /> */}
            <img className={style.card_img1} src={imgCard1} alt="" />
            <div>
              <span>2000+</span>
              <p>Happy Clients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
