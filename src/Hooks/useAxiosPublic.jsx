import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://assingment-12-backend.vercel.app'
   
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;