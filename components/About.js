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
              One dormitary and one furnished room with air conditioner, inverter and 24 hours running water.
            </li>
            <li>
              One Common Sitting Room along with a roof top balcony.
            </li>
            <li>
              Three outdoor washrooms and one indoor washroom.
            </li>
          </ul>
        </div>
        <div className={aboutStyles.about_details_s2}>
          <h3>Rates</h3>
          <ul className={aboutStyles.s_details}>
            Rs 30000 for family / corporate (maximum 150 people) including car parking.
          </ul>
        </div>
        <div className={aboutStyles.about_details_s3}>
          <h3>Aminities</h3>
          <p className={aboutStyles.s_details}>
            The campus (about 4 acres) is having Mango trees, Coconut trees and has a beautiful garden, pond for fishing, a beautiful swimming pool along with playground, badminton court and many other entertaining aminities. 
            <br />
            <strong>Check in time: </strong> 9 AM
            <br />
            <strong>Check out time: </strong> 6 PM
          </p>
        </div>
        <div className={aboutStyles.about_details_s4}>
          <h3>Food</h3>
          <p className={aboutStyles.s_details}>
            We have in house kitchen for cooking veg and non-veg and guests have to hire local decorators at their own cost for sitting arrangements and cooking utensils as per their choice.
            <br />
            All kinds of beverages are allowed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
