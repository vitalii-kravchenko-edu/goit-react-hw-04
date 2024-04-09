import { useState, useEffect } from "react";

import { Toaster } from "react-hot-toast";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

import { requestImages } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!query.length) return;

    const fetchImages = async () => {
      try {
        setIsLoading(true);
        if (page === 1) setImages(null);
        const data = await requestImages(query, page);
        setImages((prevImages) =>
          prevImages !== null ? [...prevImages, ...data] : [...data]
        );
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const onSetSearchQuery = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  const onAddPage = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <Toaster
        containerStyle={{
          top: 50,
        }}
        toastOptions={{
          duration: 2500,
          position: "top-center",
          reverseOrder: false,
          style: {
            background: "red",
            color: "#fff",
          },
        }}
        position="top-center"
        reverseOrder={false}
      />
      <SearchBar onSubmit={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} openModal={openModal} />}
      {images && <LoadMoreBtn onAddPage={onAddPage} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
}

export default App;
