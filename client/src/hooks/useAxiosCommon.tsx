import axios from "axios";
// use axios common
const axiosCommon=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosCommon=()=>{
    return axiosCommon
}

export default useAxiosCommon