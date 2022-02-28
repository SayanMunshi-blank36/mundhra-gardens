import contactStyles from "../styles/Contact.module.css";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className={contactStyles.contact_main}>
      <h1 className={contactStyles.contact_heading}>Contact Us</h1>
      <hr className={contactStyles.contact_underline} />
      <p className={contactStyles.contact_text_sm}>Make a Booking</p>
      <form action="https://formsubmit.co/sayanmunshi36@gmail.com" method="POST" className={contactStyles.contact_form}>
        <input type="hidden" name="_subject" value="New Email!" />
        <input type="hidden" name="_next" value="https://mundhra-gardens-picnic-spot.vercel.app/" />
        <input type="text" name="name" id="name" placeholder="Name*" required />
        <input type="email" name="email" id="email" placeholder="Email*" required />
        <input
          type="text"
          name="no_of_people"
          id="no_of_people"
          placeholder="Number of people in your party"
        />
        <input
          type="text"
          name="dates"
          id="dates"
          placeholder="Preferred Travel Dates"
        />
        <textarea
          name="more_abt"
          id="more_abt"
          cols="30"
          rows="10"
          placeholder="Tell us more about your vacation"
        ></textarea>
        <Button text="Send" type="submit" />
      </form>
      <p className={contactStyles.more_contact_info}>
        For any further queries please contact in the blow given details
      </p>
      <p className={contactStyles.more_contact_info}>
        <span className={contactStyles.contact_label}>Email: </span>{" "}
        email@gmail.com
      </p>
      <p className={contactStyles.more_contact_info}>
        <span className={contactStyles.contact_label}>Phone No: </span> +91
        9830367891
      </p>
      <p
        className={`${contactStyles.more_contact_info} ${contactStyles.last_line}`}
      >
        Mundhra Garden, Madhyamgram, North 24 Pgs, West Bengal
      </p>
    </section>
  );
};

export default Contact;
