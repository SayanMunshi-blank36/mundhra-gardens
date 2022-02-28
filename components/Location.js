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
        <span className={locationStyles.location_route}>By Road: </span>
        The spot is located at about 6 KM from Madhyamgram Chowmatha.
        From Chowmatha to Kanchantala about 5 KM then left turn and go 1 KM to reach Mundhra Gardens. It will take about 15 to 20 minutes  to reach the destination from Chowmatha by car.
      </p>
    </section>
  );
};

export default Location;
