const ImageCard = ({ src, alt, onClick }) => {
  return (
    <li onClick={onClick}>
      <img src={src} alt={alt} width={400} height={300} />
    </li>
  );
};

export default ImageCard;
