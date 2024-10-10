import axios from "axios";

// use axios common
const axiosCommon=axios.create({
    baseURL:'https://lifeline-server.vercel.app'
})

const useAxiosCommon=()=>{
    return axiosCommon
}

export default useAxiosCommon