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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorum
          enim accusantium error corporis ullam totam modi fugit animi! Quo fuga
          tempora ex possimus natus praesentium expedita totam, repudiandae
          molestias pariatur mollitia quisquam est nisi facere non odio et
          reiciendis quod. Cupiditate, vitae voluptatibus porro ex quis pariatur
          optio reiciendis.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
