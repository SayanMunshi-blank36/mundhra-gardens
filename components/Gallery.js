import galleryStyles from "../styles/Gallery.module.css";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [photoNumber, setPhotoNumber] = useState(1);

  // setInterval(() => {
  //   setPhotoNumber(photoNumber < 5 ? photoNumber + 1 : 1);
  // }, 5000);

  return (
    <section className={galleryStyles.gallery_main}>
      <h1 className={galleryStyles.gallery_heading}>Photo Gallery</h1>
      <hr className={galleryStyles.gallery_underline} />
      <div className={galleryStyles.gallery_img}>
        <Image
          alt="Gallery_img"
          src={`/pg-${photoNumber}.jpeg`}
          width="100%"
          height="60%"
          layout="responsive"
          objectFit="cover"
          priority={true}
          // loading="eager"
        />
        <button
          onClick={() => setPhotoNumber(photoNumber > 1 ? photoNumber - 1 : 20)}
          className={galleryStyles.prev_btn}
        >
          &#10094;
        </button>
        <button
          onClick={() => setPhotoNumber(photoNumber < 20 ? photoNumber + 1 : 1)}
          className={galleryStyles.next_btn}
        >
          &#10095;
        </button>
        <p className={galleryStyles.photoCount}>{photoNumber}/20</p>
      </div>
    </section>
  );
};

export default Gallery;
