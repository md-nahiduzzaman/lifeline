import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import useAxiosCommon from "./useAxiosCommon"
import { useQuery } from "@tanstack/react-query"

// use role here
const userRole=()=>{
const {user}=useContext(AuthContext)
const axiosCommon=useAxiosCommon()
const {data,refetch}=useQuery({
    queryKey:[user?.email,'users'],
    queryFn:async()=>{
        const {data}=await axiosCommon.get(`/user-role?email=${user?.email}`)
        return data
    }
})
return{data,refetch}

}

export default userRole