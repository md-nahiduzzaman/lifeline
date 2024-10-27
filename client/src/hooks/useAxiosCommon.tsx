import axios from "axios";
// use axios common
const axiosCommon=axios.create({
    baseURL:'https://lifeline-rouge.vercel.app/'
})
const useAxiosCommon=()=>{
    return axiosCommon
}

export default useAxiosCommon