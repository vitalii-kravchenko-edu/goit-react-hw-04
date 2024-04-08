import Modal from "react-modal";

import style from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <div>
      <Modal
        className={style.content}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Selected Image"
        ariaHideApp={false}
      >
        <img
          src={selectedImage}
          alt="Selected Image"
          width={800}
          height={600}
        />
      </Modal>
    </div>
  );
};

export default ImageModal;
