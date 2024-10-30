import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import { FaComment } from "react-icons/fa6"

const UserIndivudual=()=>{
    const axiosCommon=useAxiosCommon()
    const [users,setUsers]=useState<any>({})
    const {id}=useParams()
    useEffect(()=>{
        axiosCommon.get(`/admin/${id}`)
        .then(res=>setUsers(res.data))
    },[id])
    return(
        <div className="w-[96%] mx-auto p-4">
             <div className="flex items-center justify-between bg-gray-200 p-3">
                <div className="flex items-center space-x-4">
                <img src={users.image_url} className="w-[56px] rounded-[50%] bg-blue-400 h-[56px]" alt="" />
                <h1 className="text-xl font-semibold">{users.name}</h1>
                </div>
                <FaComment className="text-[24px]"></FaComment>
             </div>
        </div>
    )
}
export default UserIndivudual