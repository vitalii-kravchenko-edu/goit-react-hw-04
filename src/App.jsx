// bhr2cWM1lWUI_-ntji5sLULxMUAUw0TjuaDVDLpRF5s

import { useState, useEffect } from "react";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";

import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import { requestImages } from "./services/api";

function App() {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsLoading(true);
        const data = await requestImages();
        setImages(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images && <ImageGallery images={images} />}
    </>
  );
}

export default App;
