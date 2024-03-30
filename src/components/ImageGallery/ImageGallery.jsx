import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={style.list}>
      {Array.isArray(images) &&
        images.map(({ id, alt_description, urls: { small } }) => (
          <ImageCard key={id} src={small} alt={alt_description} />
        ))}
    </ul>
  );
};

export default ImageGallery;
