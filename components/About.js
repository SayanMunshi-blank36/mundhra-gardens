import aboutStyles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={aboutStyles.about_main}>
      <h1 className={aboutStyles.about_heading}>About Us</h1>
      <hr className={aboutStyles.about_underline} />
      <div className={aboutStyles.about_details}>
        <div className={aboutStyles.about_details_s1}>
          <h3>Rooms</h3>
          <ul className={aboutStyles.s_details}>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam officia alias perferendis et eius doloribus.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam officia alias perferendis et eius doloribus.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam officia alias perferendis et eius doloribus.
            </li>
          </ul>
        </div>
        <div className={aboutStyles.about_details_s2}>
          <h3>Rates</h3>
          <ul className={aboutStyles.s_details}>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div className={aboutStyles.about_details_s3}>
          <h3>Aminities</h3>
          <p className={aboutStyles.s_details}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            nesciunt velit. Delectus aliquid doloribus ab totam fuga asperiores,
            commodi accusamus.
          </p>
        </div>
        <div className={aboutStyles.about_details_s4}>
          <h3>Food</h3>
          <p className={aboutStyles.s_details}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            eius repellendus ea? Voluptas veritatis sequi voluptatibus animi
            corrupti dignissimos, consectetur nesciunt quam, esse quos
            molestiae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
