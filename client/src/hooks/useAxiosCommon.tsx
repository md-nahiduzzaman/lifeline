import axios from "axios";
// use axios common
// http://localhost:5000/
// https://lifeline-rouge.vercel.app/

const axiosCommon=axios.create({
    baseURL:'https://lifeline-rouge.vercel.app/'
})
const useAxiosCommon=()=>{
    return axiosCommon
}

export default useAxiosCommon