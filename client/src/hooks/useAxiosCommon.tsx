import axios from "axios";
// use axios common
// http://localhost:5000/
// https://lifeline-rouge.vercel.app/

const axiosCommon=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosCommon=()=>{
    return axiosCommon
}

export default useAxiosCommon