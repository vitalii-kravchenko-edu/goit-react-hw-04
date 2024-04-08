import axios from "axios";

const ACCES_KEY = "bhr2cWM1lWUI_-ntji5sLULxMUAUw0TjuaDVDLpRF5s";

export const requestImages = async (query = "", page = 1) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${ACCES_KEY}`
  );
  return data.results;
};
