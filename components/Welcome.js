import welcomeStyles from "../styles/Welcome.module.css";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className={welcomeStyles.welcome_section}>
      <div className={welcomeStyles.img_container}></div>
      <div className={welcomeStyles.welcome_txt}>
        <h1 className={welcomeStyles.welcome_txt_head}>
          Welcome to Mundhra Garden
        </h1>
        <p className={welcomeStyles.welcome_txt_para}>
          Welcome to Mundhra Gardens. The best place to enjoy your leisure in a pollution free environment surrounded by greenery. Deepak Mitra Snake Garden and Buddha Temple are located in close proximity. An indeal place to relax your mind from the daily hustle and bustle.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
