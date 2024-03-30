const ImageCard = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} width={400} height={300} />
    </li>
  );
};

export default ImageCard;
