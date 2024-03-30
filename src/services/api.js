import axios from "axios"

export const requestImages = async() => {
    const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=bhr2cWM1lWUI_-ntji5sLULxMUAUw0TjuaDVDLpRF5s"
      );
      return data
}