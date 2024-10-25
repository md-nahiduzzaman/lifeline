import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { useEffect, useState } from "react"
import { FaPhone } from "react-icons/fa6"

const IndividualMessage=()=>{
    const {id}=useParams()
    const axiosCommon=useAxiosCommon()
    const [user,setUser]=useState<any>({})
    console.log(user)
    useEffect(()=>{
        axiosCommon.get(`/admin/${id}`)
        .then(res=>setUser(res.data))
    },[id])
    return(
        <div className="h-[100vh] overflow-y-auto">
            <div className="min-h-[50px] w-full border-[1px] border-gray-400 mx-auto bg-white p-2 px-4 flex justify-between items-center">
                <img src={user.image_url} alt="" className="w-[55px] h-[55px] rounded-[50%]" />
                <FaPhone className="text-xl text-black"></FaPhone>
            </div>
            
        
        </div>
    )
}
export default IndividualMessage