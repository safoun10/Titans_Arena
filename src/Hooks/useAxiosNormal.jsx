import axios from "axios";

const axiosNormal = axios.create({
  baseURL: "https://titans-arena-server.vercel.app",
});

axiosNormal.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("Error fetching data:", error);
    return Promise.reject(error);
  }
);

const useAxiosNormal = () => {
  return [axiosNormal];
};

export default useAxiosNormal;
