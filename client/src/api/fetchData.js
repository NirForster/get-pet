import axios from "axios";

const fetchData = async () => {
  try {
    const res = await axios.post(url, data);
    if (res) {
      console.log(res);
    }
  } catch (error) {
    console.error(`Error occurred durning register user: `, error);
  }
};

export { fetchData };