import axios from "axios";

export const getHello = async () => {
  try {
    const response = await axios.get("http://localhost:7777/api/");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
