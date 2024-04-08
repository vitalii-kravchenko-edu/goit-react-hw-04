import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={style.list}>
      {Array.isArray(images) &&
        images.map(({ id, alt_description, urls: { small, regular } }) => (
          <ImageCard
            key={id}
            src={small}
            alt={alt_description}
            onClick={() => openModal(regular)}
          />
        ))}
    </ul>
  );
};

export default ImageGallery;
