import axios from "axios";
const getData = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default getData;
