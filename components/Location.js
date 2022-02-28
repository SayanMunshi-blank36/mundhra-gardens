import locationStyles from "../styles/Location.module.css";
import Image from "next/image";

const Location = () => {
  return (
    <section className={locationStyles.location_main}>
      <h1 className={locationStyles.location_heading}>How to Reach</h1>
      <hr className={locationStyles.location_underline} />
      <div className={locationStyles.location_img}>
        <Image
          alt="location_img"
          src="/direction.jpeg"
          height="100%"
          width="100%"
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <h3 className={locationStyles.location_direction}>Direction</h3>
      <p className={locationStyles.location_details}>
        <span className={locationStyles.location_route}>By Train: </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        dignissimos excepturi tenetur? Doloremque reprehenderit sequi eligendi
        animi! Iusto quidem nesciunt maiores at! Ullam, dicta nihil!
      </p>
      <p className={locationStyles.location_details}>
        <span className={locationStyles.location_route}>By Road: </span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        dignissimos excepturi tenetur? Doloremque reprehenderit sequi eligendi
        animi! Iusto quidem nesciunt maiores at! Ullam, dicta nihil!
      </p>
    </section>
  );
};

export default Location;
